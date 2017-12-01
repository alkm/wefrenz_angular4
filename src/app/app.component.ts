import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	
	constructor(private router : Router) {
    	//router.navigate(['public']);
    	if (localStorage.getItem('currentUser')) {
    		if(localStorage.getItem('currentRoute')){
    			let routePath = localStorage.getItem('currentRoute');
				this.router.navigate([routePath]);
    		}else{
    			this.router.navigate(['public']);	
    		}
	    }else{
	    	this.router.navigate(['public']);
	    }

	    // not logged in so redirect to login page with the return url and return false
	    //this.router.navigate(['/public'], { queryParams: { returnUrl: state.url }});
	    //return false;
  	}

}
