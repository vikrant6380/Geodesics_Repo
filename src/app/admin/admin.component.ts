import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  apiData:any;
  influentialIndex:any;
  members=[]
multi:number[][] =[];
  howInfluentialPerson!: boolean;
  influentialPersonName!: string;
  isLoggedIn: any;
  constructor(private dataServiceService:DataServiceService) { }

  ngOnInit(): void {
this.howInfluentialPerson=false;
    this.dataServiceService.getBasicData().subscribe((_res:any)=>{
      this.members=_res.data.members
    })
    this.dataServiceService.getisLoggedIn().subscribe((res: any)=>{
      this.isLoggedIn=res
    })
  }
  findMostInfluentialPerson(){
    debugger
//Main Calculation starts
    // console.log(this.skills)
    this.dataServiceService.getData().subscribe(res=>{
      this.apiData=res;
     // debugger
     let tempArray=[]
     for(var m=0;m<this.members.length;m++){
      for(var a=0;a<this.apiData.length;a++){
        if(this.members[m]==this.apiData[a].id){
          tempArray.push({id:this.apiData[a].id,data:this.apiData[a].data})
        }
      }
    }
    console.log(tempArray)


      for(var a=0;a<tempArray.length;a++){
      //var tempArray=[]
      this.multi[a]=new Array();

        for(var b=0;b<tempArray[a].data.data.length;b++){
         this.multi[a][b] = parseFloat(tempArray[a].data.data[b]);
      
        }
        
            }
      console.log("in service", this.multi)
   
//    debugger
   
  //  console.log("2D Matrx created",this.multi);
    var finRes=[]
    
    for(var m=0;m<this.multi.length;m++){
      finRes.push(0)
    }
    
    for (var i=0;i<this.multi.length;i++){ //i==1
      for(var j=0;j<this.multi.length;j++){ //j==4
        if(i!=j && this.multi[i][j]==0){
          var den=0;
          var sum=0;
          //console.log(i+1,j+1,"value==>",this.multi[i][j],"den=>",den)
//debugger
          for(var k=0;k<this.multi.length;k++){ //for denominator
            if(this.multi[k][j] !=0 && this.multi[i][k]!=0){
              den=den+((this.multi[i][k] +this.multi[k][j])/2)
              console.log("i->", i+1,"k->",k+1 ,"j->",j+1,"value==>","den=>",den,this.multi[i][k],this.multi[k][j])
            }
          }

          for(var k=0;k<this.multi.length;k++){ //for sum
            if(this.multi[k][j] !=0 && this.multi[i][k]!=0){
              sum=0;
            //  debugger
              sum=this.multi[i][k]/den;
              finRes[k]=finRes[k]+sum;
             // den=den+((this.multi[k][j] +this.multi[i][k])/2)
            //  for(var l=0;l<finRes.length;l++){
            //   if(finRes[l].index ==k ){
            //     finRes[l].sum= finRes[l].sum+sum;
            //     console.log("index fin->", finRes[l].index,"sum fin",finRes[l].sum)
            //   }
            //   // else{
            //   //   finRes.push({index:k,sum:sum})
            //   // }
            //  }
              console.log( "sumation", sum,"den=>",den,"2nd numerator",this.multi[i][k],)
            }
          }

        }
      }
    }


    for(var l=0;l<finRes.length;l++){
      console.log("final res==>",finRes[l],"index",l)

    }
this.influentialIndex=finRes.indexOf(Math.max(...finRes))
    console.log("most influential person",this.influentialIndex);
    let message=this.members[this.influentialIndex]
    if(message!=undefined && message!=null){
      this.influentialPersonName=message;
      this.howInfluentialPerson=true;
    }
  })

//Main Calculation Ends
  }


}
