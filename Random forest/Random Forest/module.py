from pydantic import BaseModel

class Entry(BaseModel):
    filiere : str
    certification: str
    niveau_fr: int
    niveau_en: int
    niveau_math: int
    adap_chang: int
    travail_stress: int
    travail_groupe: int
    impl_expl: int

class Mail(BaseModel):
    name:str
    email:str
    message:str

class Output(BaseModel):
    resultat:str

