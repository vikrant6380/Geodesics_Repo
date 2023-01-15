import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  results:any
  constructor(private http: HttpClient) {
    this.results = [];
   }

  subject$=new Subject<Boolean>();
  userLoggedInDetails$=new Subject<{}>();
  isLoggedIn$=new Subject<Boolean>();

  setSub(flag: boolean | Boolean | undefined){
    console.log("inside set subject service")
    this.subject$.next(flag);
    this.subject$.complete();
  }
  getSub(){
    console.log("inside get subject service")
    return this.subject$.asObservable();
  }

  getBasicData(){
    let apiURL = environment.API_URL+"/geBasicDetails"
   // "https://mysterious-beyond-43809.herokuapp.com/getData";
  
    return this.http.get(apiURL);
  }


  getData(){
    let apiURL = environment.API_URL+"/getData"
   // "https://mysterious-beyond-43809.herokuapp.com/getData";
  
    return this.http.get(apiURL);
  }

  submitFeedback(data:any){
    let apiURL = environment.API_URL+"/postData"
    return this.http.post(apiURL,data);
  }


  setUserLoggedInDetails(data:any){
    console.log("inside set setUserLoggedInDetails service")
    this.userLoggedInDetails$.next(data);
    this.subject$.complete();
  }
  getUserLoggedInDetails(){
    console.log("inside get getUserLoggedInDetails service")
    return this.userLoggedInDetails$.asObservable();
  }

  setisLoggedIn(data:any){
    console.log("inside set setUserLoggedInDetails service")
    this.isLoggedIn$.next(data);
    this.subject$.complete();
  }
  getisLoggedIn(){
    console.log("inside get getUserLoggedInDetails service",this.isLoggedIn$.asObservable())
    return this.isLoggedIn$.asObservable();
  }
}
