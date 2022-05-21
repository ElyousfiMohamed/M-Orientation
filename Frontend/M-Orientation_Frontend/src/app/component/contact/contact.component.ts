import { Component, OnInit } from '@angular/core';
import {MailService} from "../../service/mail.service";
import {Mail} from "../../model/mail";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;


  constructor(private service:MailService,private router:Router) {
    this.name = "";
    this.email = "";
    this.message = "";
  }

  ngOnInit(): void {
  }

  submitForm() {
    var mail:Mail = {
      name : this.name,
      email : this.email,
      message : this.message
    }
      this.service.sendMail(mail).subscribe({
        next: (data) => {
          if(data === 1)
            this.router.navigate(["/success"])
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
}
