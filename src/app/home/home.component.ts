import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { RouteinfoService } from 'app/services/shareobject/routeinfo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	private info = undefined;
	private routeInfo = undefined;

	/*get loginData(): any {
		return this.routeinfoService.routeData;
	}
	set loginData(value: any) {
		this.routeinfoService.routeData = value;
	}*/

	constructor(private router: Router, private route: ActivatedRoute, public routeinfoService: RouteinfoService) { 
		if (!localStorage.getItem('currentUser')) {
			this.router.navigate(['public']);	
		}else{
			localStorage.setItem('currentRoute', 'home');
		}
	}

	ngOnInit() {
		/*if(localStorage.getItem('loginData')) {
			this.loginData = localStorage.getItem('loginData');
		}else{
			localStorage.setItem('loginData', this.loginData);
		}*/
		
	}
}
