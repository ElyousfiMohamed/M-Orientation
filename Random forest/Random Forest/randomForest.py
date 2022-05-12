import pandas as pd
pd.set_option("display.max_rows", None, "display.max_columns", None)

from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn import metrics

# read the dataSet
dataset = pd.read_excel('Data4.xlsx')
inputs = dataset.drop('Domaine après Baccalauréat', axis = 'columns')

# variables
encoder = LabelEncoder()
colNames = dataset.columns.values.tolist()
colNames.pop(colNames.index('Domaine après Baccalauréat'))
map = {}

# functions
def encode():
    for x in colNames:
        encodeInputs(x)
        map[x] = {}

def encodeInputs(nameIn):
    inputs[nameIn+"_coded"] = encoder.fit_transform(inputs[nameIn])

def encodeTarget(nameIn):
    dataset[nameIn+"_coded"] = encoder.fit_transform(dataset[nameIn])
    target = dataset[nameIn]
    target_coded = dataset[nameIn+"_coded"]
    dataset.drop(nameIn+"_coded", axis='columns')
    return target, target_coded

def fillMap():
    for name in colNames:
        for (v, v_n) in zip(inputs[name],inputs[name+"_coded"]):
            map[name][v] = v_n

def getCoded(entries):
    output = [[]]
    for (name,entry) in zip(colNames,entries):
        output[0].append(map[name].get(entry))
    return output

encode()
fillMap()
target, target_encoded = encodeTarget('Domaine après Baccalauréat')
inputs_encoded = inputs.drop(inputs.columns[[0, 1, 2, 3, 4, 5, 6, 7, 8]], axis='columns')

# Train the model
X_train, X_test, Y_train, Y_test = train_test_split(inputs_encoded, target_encoded,test_size=0.2, random_state=30)
model = RandomForestClassifier(n_estimators=200, random_state=30)
model.fit(X_train, Y_train)
prediction_test = model.predict(X_test)

print("Accuracy = ", metrics.accuracy_score(Y_test, prediction_test))