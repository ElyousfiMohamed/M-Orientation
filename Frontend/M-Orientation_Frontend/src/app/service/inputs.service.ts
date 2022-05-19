import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Input} from "../model/input";
import {Output} from "../model/output";

const optionRequete = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class InputsService {

  constructor(private http : HttpClient) { }

  public getOutput(input:Input):Observable<Output>{
    return this.http.post<Output>(environment.apiBaseUrl+"/api/entries",JSON.stringify(input),optionRequete);
  }
}
