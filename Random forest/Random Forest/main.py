from fastapi import FastAPI
from module import Entry
import randomForest

app = FastAPI()

@app.post("/api/entries")
def getIt(entry: Entry):
    user_entry = entry.dict()
    user_entry_coded = randomForest.getCoded(list(user_entry.values()))
    output_list = list(randomForest.encoder.inverse_transform(randomForest.model.predict(user_entry_coded)))
    output_dict = {}
    output_dict["resultat"] = output_list.pop()
    return output_dict