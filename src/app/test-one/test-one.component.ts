import { ApplicationRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { TestTwoComponent } from '../test-two/test-two.component';

@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.scss']
})
export class TestOneComponent implements OnInit {

  constructor(private dataServiceService:DataServiceService,   private appRef:ApplicationRef
    ,private routes:ActivatedRoute
    ) { }

  ngOnInit(): void {
    // this.dataServiceService.getSub().subscribe(res=>{
    //   //   this.appRef.tick();
    //   debugger
    //      console.log("res in test1 oninit",res);
    //    //  this.appRef.tick(); 
    //    })
    this.routes.params.subscribe(res=>{
      console.log("actvated routes",res)
    })
  }
  reloadOther(){
    
    console.log("inside test1")
this.dataServiceService.setSub(true);

//this.appRef.tick();


  }
}
