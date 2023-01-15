import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-screen',
  templateUrl: './config-screen.component.html',
  styleUrls: ['./config-screen.component.scss']
})
export class ConfigScreenComponent implements OnInit {

  constructor() { }
  awards:any
  ngOnInit(): void {
    this.awards=[
      {
        "title":"Registeration",
        "description":"Register here to use Influentiality Calculator"
      },
      {
        "title":"Add Your Team",
        "description":"Add your team here.Provide employee details and take 360 degree feedback"
      },
      {
        "title":"Edit Team Details",
        "description":"Edit team details ,add or remove any names.Update existing details"
      },
      {
        "title":"Add Questions",
        "description":"Set the questions according to your requirement"
      },
      {
        "title":"Max Rating",
        "description":"Set Maximum Rating to be given for any question"
      },
      {
        "title":"Update Profile",
        "description":"Update your Profile"
      }
    ]
  }

}
