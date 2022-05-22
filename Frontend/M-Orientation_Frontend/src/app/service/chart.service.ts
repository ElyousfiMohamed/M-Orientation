import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Input} from "../model/input";
import {Observable} from "rxjs";
import {Output} from "../model/output";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http : HttpClient) { }

  public getGenderStats(domaine:Output):Observable<number[]>{
    return this.http.post<number[]>(environment.apiBaseUrl+"/api/chartGender",domaine);
  }

  public getAgeStats(domaine:Output):Observable<number[]>{
    return this.http.post<number[]>(environment.apiBaseUrl+"/api/chartAge",domaine);
  }

  public getMentionStats(domaine:Output):Observable<number[]>{
    return this.http.post<number[]>(environment.apiBaseUrl+"/api/chartMention",domaine);
  }

  public getEtablissementStats(domaine:Output):Observable<number[]>{
    return this.http.post<number[]>(environment.apiBaseUrl+"/api/chartSchool",domaine);
  }

  public getChoixStats(domaine:Output):Observable<number[]>{
    return this.http.post<number[]>(environment.apiBaseUrl+"/api/chartChoice",domaine);
  }
}
