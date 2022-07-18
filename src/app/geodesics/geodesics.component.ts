import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-geodesics',
  templateUrl: './geodesics.component.html',
  styleUrls: ['./geodesics.component.scss']
})
export class GeodesicsComponent implements OnInit {
maxRating:any
questions=[]
members=[]
  skillsForm!: FormGroup;
  constructor(private dataServiceService:DataServiceService,private fb:FormBuilder) {

    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([]) ,
    });
   }

   get skills() : FormArray {
    return this.skillsForm.get("skills") as FormArray
  }
 
  newSkill(name: string): FormGroup {
    return this.fb.group({
      teamMemName: name,
      exp: '',
    })
  }
 
  // addSkills() {
  //   debugger
  //   this.skills.push(this.newSkill());
  //   console.log(this.skills.controls[0].value.exp)
  //   console.log( this.newSkill())
   

  // }
 
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }
 
  onSubmit() {
    debugger
    let totalRating:number=this.questions.length
    let maxMarks=this.maxRating*totalRating;
    let datatoBackend: number[]=[];
    
    this.skillsForm.value.skills.map((_element: any)=>{
      const weight :number =this.skillsForm.value.name==_element.teamMemName?0 : _element.exp/maxMarks;
      let finalWeight = weight>=0.6 ? weight :0;
      datatoBackend.push((finalWeight))
     // console.log(weight)
    })
    // datatoBackend.map(_k=>{
      console.log(totalRating,datatoBackend);
let apiData={
  name:this.skillsForm.value.name,
  data:datatoBackend
}

this.dataServiceService.submitFeedback(apiData).subscribe((res:any)=>{
  debugger
  console.log("data submitted",res)
  let modal =document.getElementById('myModal');
  if(modal!=null){
    modal.style.display = "block";
  
  }
})
    // })

    
  }
  closeModal (){
    let modal =document.getElementById('myModal');
if(modal!=null){
  modal.style.display = "none";

}
window.location.reload();
}
  apiData:any;
  influentialIndex:any;

 
  
multi:number[][] =[];
// multi:number[][] =

// [
//   [0,0.68,0.65,0,0.61,0],
//   [0.76,0,0.72,0.66,0.61,0],
//   [0.71,0.77,0,0,0.63,0.63],
//   [0.94,0.68,0,0,0.64,0],
//   [0.85,0.81,0.87,0.64,0,0.67],
//   [0,0,0.72,0,0.6,0]
// ]


  ngOnInit(): void {


  //Basics Details

this.dataServiceService.getBasicData().subscribe((_res:any)=>{
  console.log(_res['data'])
  this.questions=_res.data.questions
  this.members=_res.data.members
  this.maxRating=_res.data.maxRating
  this.members.map(_ele=>{
      
    this.skills.push(this.newSkill(_ele))
  })
})

  //Basics Details ends

  }




}

export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
