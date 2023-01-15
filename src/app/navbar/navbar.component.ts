import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private appService: AppService) { }
  isCollapsed = true;
  ngOnInit() {
  }

  toggleSidebarPin() {
    this.appService.toggleSidebarPin();
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }
  closeModal (){
    let modal =document.getElementById('myModalLogin');
if(modal!=null){
  modal.style.display = "none";

}
//window.location.reload();
}
login(){
  let modal =document.getElementById('myModalLogin');
  if(modal!=null){
    modal.style.display = "block";
  
  }
}
}
