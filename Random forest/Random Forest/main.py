from fastapi import FastAPI
from module import Entry,Mail,Output
import randomForest
from fastapi.middleware.cors import CORSMiddleware
import jmespath
import json
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = FastAPI()

origins = [
    "http://localhost:4200",
    "*"
]

f = open('rss/formData.json', encoding="utf8")
data = json.load(f)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/api/entries")
def getIt(entry: Entry):
    user_entry = entry.dict()
    user_entry_coded = randomForest.getCoded(list(user_entry.values()))
    output_list = list(randomForest.encoder.inverse_transform(randomForest.model.predict(user_entry_coded)))
    output_dict = {"resultat": output_list.pop()}
    return output_dict

@app.post("/api/mail")
def sendIt(mail: Mail):
    flag = 0
    sender_address = 'm.orientation.22@gmail.com'
    sender_pass = 'm.orientation.2022'
    receiver_address = 'm.orientation.22@gmail.com'

    mail_content = mail.message;

    # Setup the MIME
    message = MIMEMultipart()
    message['From'] = sender_address
    message['To'] = receiver_address
    message['Subject'] = 'Email from : '+mail.email  # The subject line
    try:
        # The body and the attachments for the mail
        message.attach(MIMEText(mail_content, 'plain'))
        # Create SMTP session for sending the mail
        session = smtplib.SMTP('smtp.gmail.com', 587)  # use gmail with port
        session.starttls()  # enable security
        session.login(sender_address, sender_pass)  # login with mail_id and password
        text = message.as_string()
        session.sendmail(sender_address, receiver_address, text)
        session.quit()
        flag = 1
    except Exception as e:
        print('SendMail Failed')
        print(e)
        flag = 0
    return flag

@app.post("/api/chartGender")
def genderStat(domaine : Output):
    countMen = "[? d_abac == '"+domaine.resultat+"'] | [? Sexe == 'Homme'] | length(@)"
    countWomen = "[? d_abac == '"+domaine.resultat+"'] | [? Sexe == 'Femme'] | length(@)"
    return [jmespath.search(countMen, data), jmespath.search(countWomen, data)]

@app.post("/api/chartAge")
def ageStat(domaine : Output):
    count_m25 = "[? d_abac == '"+domaine.resultat+"'] | [? Age == '-25'] | length(@)"
    count_p25_m35 = "[? d_abac == '"+domaine.resultat+"'] | [? Age == '25 à 35'] | length(@)"
    count_p35_m45 = "[? d_abac == '"+domaine.resultat+"'] | [? Age == '35 à 45'] | length(@)"
    count_p45 = "[? d_abac == '"+domaine.resultat+"'] | [? Age == '+45'] | length(@)"
    return [jmespath.search(count_m25, data),
            jmespath.search(count_p25_m35, data),
            jmespath.search(count_p35_m45, data),
            jmespath.search(count_p45, data)]

@app.post("/api/chartMention")
def mentionStat(domaine : Output):
    count_passable = "[? d_abac == '"+domaine.resultat+"'] | [? m_bac == 'Passable (10/20 à 11.9/20)'] | length(@)"
    count_assez_bien = "[? d_abac == '"+domaine.resultat+"'] | [? m_bac == 'Assez bien (12/20 à 13.9/20)'] | length(@)"
    count_bien = "[? d_abac == '"+domaine.resultat+"'] | [? m_bac == 'Bien (14/20 à 15.9/20)'] | length(@)"
    count_tres_bien = "[? d_abac == '"+domaine.resultat+"'] | [? m_bac == 'Très Bien (16/20 à 20/20)'] | length(@)"
    return [jmespath.search(count_passable, data),
            jmespath.search(count_assez_bien, data),
            jmespath.search(count_bien, data),
            jmespath.search(count_tres_bien, data)]

@app.post("/api/chartSchool")
def mentionStat(domaine : Output):
    count_faculté = "[? d_abac == '"+domaine.resultat+"'] | [? e_abac == 'Faculté'] | length(@)"
    count_ge = "[? d_abac == '"+domaine.resultat+"'] | [? e_abac == 'Grande école (Ingénierie)'] | length(@)"
    count_es = "[? d_abac == '"+domaine.resultat+"'] | [? e_abac == 'École supérieure (EST, ENS, BTS, ...)'] | length(@)"
    count_cpge = "[? d_abac == '"+domaine.resultat+"'] | [? e_abac == 'CPGE'] | length(@)"
    count_ofppt = "[? d_abac == '"+domaine.resultat+"'] | [? e_abac == 'OFPPT'] | length(@)"
    count_institue = "[? d_abac == '"+domaine.resultat+"'] | [? e_abac == 'Institue'] | length(@)"
    return [jmespath.search(count_faculté, data),
            jmespath.search(count_ge, data),
            jmespath.search(count_es, data),
            jmespath.search(count_cpge, data),
            jmespath.search(count_ofppt, data),
            jmespath.search(count_institue, data)]

@app.post("/api/chartChoice")
def mentionStat(domaine : Output):
    count_famille = "[? d_abac == '"+domaine.resultat+"'] | [? inf_choix == 'Famille'] | length(@)"
    count_amis = "[? d_abac == '"+domaine.resultat+"'] | [? inf_choix == 'Amis'] | length(@)"
    count_ecole = "[? d_abac == '"+domaine.resultat+"'] | [? inf_choix == 'Ecole'] | length(@)"
    count_ville = "[? d_abac == '"+domaine.resultat+"'] | [? inf_choix == 'Ville de résidence'] | length(@)"
    count_choix_p = "[? d_abac == '"+domaine.resultat+"'] | [? inf_choix == 'Choix personnel'] | length(@)"
    return [jmespath.search(count_famille, data),
            jmespath.search(count_amis, data),
            jmespath.search(count_ecole, data),
            jmespath.search(count_ville, data),
            jmespath.search(count_choix_p, data)]
