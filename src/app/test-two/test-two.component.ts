import { AfterViewInit, ApplicationRef,  Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: ['./test-two.component.scss']})
export class TestTwoComponent implements OnInit ,OnChanges,AfterViewInit{

  constructor(private dataServiceService:DataServiceService,
    private appRef:ApplicationRef,private routes:ActivatedRoute
    ) { 
      
    
  }
  ngAfterViewInit(): void {
    
    this.dataServiceService.getSub().subscribe(res=>{
   //   this.appRef.tick();
      console.log("res in test2 ",res);
    //  this.appRef.tick(); 
    })  }


  ngOnChanges(changes: SimpleChanges): void {
    //this.appRef.tick();
    this.dataServiceService.getSub().subscribe(res=>{
      this.appRef.tick();
      console.log("res in test2 ",res);
   //   this.appRef.tick();
    })
   
  }

  ngOnInit(): void {
   // this.appRef.tick();
    
    this.dataServiceService.setSub(false);

    this.dataServiceService.getSub().subscribe(res=>{
   
     // this.appRef.tick();
      console.log("res in test2 ",res);
      this.appRef.tick();
    })
  
  }


}
