import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-graph-analysis',
  templateUrl: './graph-analysis.component.html',
  styleUrls: ['./graph-analysis.component.scss']
})
export class GraphAnalysisComponent implements OnInit {
  displayedColumns: string[] = ['position', 'Vikrant', 'Rajat', 'Sachin','Swapnil','Sahil','Ashish'];
  activeList=[0,1,2,3,4,5]
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  members:any
  selectedOption:any
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor() { }

  ngOnInit(): void {
    this.members=['Vikrant','Rajat','Sachin','Swapnil','Sahil','Ashish']
  }

  selectMember(memberName: any){
    
    this.displayedColumns=['position', 'Vikrant', 'Rajat', 'Sachin','Swapnil','Sahil','Ashish']
    const index: number = this.displayedColumns.indexOf(memberName);
    if (index !== -1) {
        this.displayedColumns.splice(index, 1);
    } 
    console.log(this.selectedOption,memberName,this.displayedColumns)
  }

}

export interface PeriodicElement {
 
  position: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: "Do I provide resources and remove obstacles for my staff/team members? Am I even aware of what resources they need and where the obstacles are"},
  {position: "Do you think I interact enough with my team members?  "},
  {position: "Am I comfortable with several “experts” being in the room, and how do I demonstrate that I value their input"},
  {position: "Did I transfer learning, understanding and value to my team members"},
  {position: "Do I ever thank my staff for helping"},
  {position: "Do I learn from my team what I need to keep doing, start doing, or stop doing"},
  {position: "Do I create an environment for my team members to do their best work and be successful"},
  {position: " Have I been taking care of my team members"},
  {position: "Is I am helping others if they stuck anywhere"},
  {position: " Communication Skill"},
  {position: "Question here"},
  {position: "Question here"},
  {position: "Question here"},
  {position: "Question here"},
  {position: "Question here"},
];
