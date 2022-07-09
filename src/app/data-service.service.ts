import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  subject$=new Subject<Boolean>();

  setSub(flag: boolean | Boolean | undefined){
    console.log("inside set subject service")
    this.subject$.next(flag);
    this.subject$.complete();
  }
  getSub(){
    console.log("inside get subject service")
    return this.subject$.asObservable();
  }
}
