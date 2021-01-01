import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-team-finder',
  templateUrl: './team-finder.component.html',
  styleUrls: ['./team-finder.component.scss'],
  animations: [routerTransition()]
})
export class TeamFinderComponent implements OnInit {

  collapedSideBar: boolean;

  constructor() { }

  ngOnInit() {
  }

  onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
 
	receiveCollapsed($event) {
	    this.collapedSideBar = $event;
	}

}
