import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geodesics',
  templateUrl: './geodesics.component.html',
  styleUrls: ['./geodesics.component.scss']
})
export class GeodesicsComponent implements OnInit {

  constructor() { }
multi:number[][] =

[
  [0,0.68,0.65,0,0.61,0],
  [0.76,0,0.72,0.66,0.61,0],
  [0.71,0.77,0,0,0.63,0.63],
  [0.94,0.68,0,0,0.64,0],
  [0.85,0.81,0.87,0.64,0,0.67],
  [0,0,0.72,0,0.6,0]
]


  ngOnInit(): void {
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

    console.log("most influential person",finRes.indexOf(Math.max(...finRes))+1);
  }

}
