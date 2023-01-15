import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private appService: AppService,private dataService:DataServiceService) { }
  isCollapsed = true;
  isLoggedIn: any
  logInOutTitle="Login"
  ngOnInit() {
    this.dataService.getUserLoggedInDetails().subscribe((res: any)=>{
      if(res){
        this.isLoggedIn=res;
        this.logInOutTitle = !res?"Login" : "Logout"
        let modal =document.getElementById('myModalLogin');
        if(modal!=null){
          modal.style.display = "none";
        
        }
      }
    })
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
login(title:any){
  if(title=="Logout"){
    this.dataService.setisLoggedIn(false);
    this.logInOutTitle="Login"
  }
  else{
  let modal =document.getElementById('myModalLogin');
  if(modal!=null){
    modal.style.display = "block";
  
  }
}
}
}
