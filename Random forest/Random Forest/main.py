# packages we need
# pandas : Data analysis and manipulation tool
import pandas as pd
pd.set_option("display.max_rows", None, "display.max_columns", None)

# sklearn (scikit-learn) : Simple and efficient tools for predictive data analysis
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn import metrics


# read the dataSet
dataset = pd.read_excel('Data3.xlsx')
inputs = dataset.drop('Domaine après Baccalauréat', axis = 'columns')

# count of entries in training/testing data
sizes = dataset['Domaine après Baccalauréat'].value_counts(sort=1)
# print(sizes)

# variables
encoder = LabelEncoder()

# functions
def encodeInputs(nameIn, nameOut):
    inputs[nameOut] = encoder.fit_transform(inputs[nameIn])

def encodeTarget(nameIn, nameOut):
    dataset[nameOut] = encoder.fit_transform(dataset[nameIn])
    target = dataset[nameIn]
    target_coded = dataset[nameOut]
    dataset.drop(nameOut, axis='columns')
    return target, target_coded

# econding the data
encodeInputs('Filière Baccalauréat ','Filiere Bac')
encodeInputs('Avez-vous essayé de prendre des certifications en ligne?','Avez vous des certificats ?')
encodeInputs('Comment mesurez-vous votre niveau en langue française (durant le baccalauréat) ?','Niveau en francais')
encodeInputs('Comment mesurez-vous votre niveau en langue anglaise (durant le baccalauréat) ?','Niveau en anglais')
encodeInputs('Comment mesurez-vous votre niveau en mathématique (durant le baccalauréat) ?','Niveau en math')
encodeInputs('Comment mesurez-vous votre capacité à vous adapter à des changements continus ?','Adaptation au changements')
encodeInputs('Comment mesurez-vous votre capacité à travailler sous pression (stresse) ?','Travaille sous pression')
encodeInputs('Comment mesurez-vous votre capacité à travailler en groupe','Travaille en equipe')
encodeInputs('Est-ce que vous avez besoin que l’information soit explicite pour la comprendre (1), ou vous pouvez comprendre avec le moindre d’information possible(2)? ','Info_Explicite_Implicite')

target, target_encoded = encodeTarget('Domaine après Baccalauréat','Domain_Apres_bac')
inputs_encoded = inputs.drop(inputs.columns[[0, 1, 2, 3, 4, 5, 6, 7, 8]], axis='columns')

# print(inputs_encoded.head())
# print(target_encoded.head())

# Train the model
X_train, X_test, Y_train, Y_test = train_test_split(inputs_encoded, target_encoded,test_size=0.1, random_state=30)
model = RandomForestClassifier(n_estimators=10, random_state=30)
model.fit(X_train, Y_train)
prediction_test = model.predict(X_test)

print("Accuracy = ", metrics.accuracy_score(Y_test, prediction_test))
print(encoder.inverse_transform(model.predict([[8, 1, 3, 2, 1, 3, 1, 3, 0]])))