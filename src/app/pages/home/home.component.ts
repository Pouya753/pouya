import {Component,} from '@angular/core';

class user {
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  users:user[]=
    [{

    }

    ]
  public onAddUser(firstname:string, lastName:string, userName:string){
    let u:user={
      firstname:firstname,
      lastName:lastName,
      userName:userName,
    }
  }
}
