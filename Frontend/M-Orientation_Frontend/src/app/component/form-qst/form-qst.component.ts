import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {InputsService} from "../../service/inputs.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-qst',
  templateUrl: './form-qst.component.html',
  styleUrls: ['./form-qst.component.css']
})
export class FormQstComponent implements OnInit {

  captcha: string;
  email: string;

  constructor(private service:InputsService, private router:Router) {
    this.captcha = '';
    this.email = 'm.elyousfi_etu@enset-media.ac.ma';
  }

  ngOnInit(): void {
  }

  onValidate(input: NgForm) {
    this.service.getOutput(input.value).subscribe({
      next : (data)=>{
        this.router.navigate(["/result",data ])
      },
      error : (err)=>{
        console.log(err);
      }
    });
  }

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    console.log('resolved captcha with response: ' + this.captcha);
  }
}
