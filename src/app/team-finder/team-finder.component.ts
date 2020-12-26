import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-finder',
  templateUrl: './team-finder.component.html',
  styleUrls: ['./team-finder.component.scss']
})
export class TeamFinderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }


}
