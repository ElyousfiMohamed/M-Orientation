from fastapi import FastAPI
from module import Entry,Mail
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

@app.get("/api/chartGender")
def genderStat():
    f = open('rss/dataForm.json', encoding="utf8")
    data = json.load(f)

    countMen = "[? Sexe == 'Homme'] | length(@)"
    countWomen = "[? Sexe == 'Femme'] | length(@)"

    return [jmespath.search(countMen, data), jmespath.search(countWomen, data)]