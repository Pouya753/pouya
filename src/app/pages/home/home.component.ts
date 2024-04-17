import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  isCorrect: boolean = true;
isCancelled:boolean=true
  classes = {};

  ngOnInit() {
    this.classes = {
      'p1': this.isCorrect,
'p2':this.isCancelled,
      
    }
  }


}
