import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Input} from "../model/input";
import {Observable} from "rxjs";
import {Output} from "../model/output";
import {environment} from "../../environments/environment";
import {Mail} from "../model/mail";

const optionRequete = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http : HttpClient) { }

  public sendMail(mail:Mail):Observable<number>{
    return this.http.post<number>(environment.apiBaseUrl+"/api/mail",JSON.stringify(mail),optionRequete);
  }
}
