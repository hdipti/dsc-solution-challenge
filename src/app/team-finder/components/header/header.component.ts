import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CandidateService } from './../../../core/data/service/CandidateService';
import { CacheService } from './../../../core/data/service/CacheService';
import { Candidate } from './../../../core/data/model/Candidate';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
	i:number;
	candidate: Candidate[];
	
    constructor(private translate: TranslateService, 
				public router: Router,
 				private candidateService: CandidateService,
			    private cacheService: CacheService
				) {

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
        this.candidateService.getCandidatesList()
        .subscribe(
            data => {
				/*localStorage.setItem(`candidates`, JSON.stringify(data));
				this.cacheService.set("candidates", data );*/
				//implement search functionality
            },
            error => {
				// do nothing - this data is used in search bar and loads all candidates
				console.log(error);
			});
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

   /* rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }*/

	onProfile(){
		
	}
	
	onBlog(){
		
	}
	
	onCandidates(){
		
	}

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
