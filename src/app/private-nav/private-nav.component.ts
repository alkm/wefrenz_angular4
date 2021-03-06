import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";
import { FriendsService } from 'app/services/data/friends.service';

import { SearchService } from 'app/services/data/search.service';

@Component({
  selector: 'app-private-nav',
  templateUrl: './private-nav.component.html',
  styleUrls: ['./private-nav.component.css'],
  providers: [SearchService, FriendsService]
})
export class PrivateNavComponent implements OnInit, AfterViewInit {

	private active: boolean = false;
	private innerWidth: number = 0;
	private searchResultList = undefined;
	private friendRequestPendingList = undefined;
	private reqArr = undefined;
	private isBorder: boolean = false;
	private isFriendReuestBorder: boolean = false;
	private navRef: any;
	private searchValue: string = '';
	private friendRequestCount: number = 0;
	private isFriendRequestPendingDisplay: boolean = false;
	private timerSubscription: any;
	private userId: string = '';

	constructor(private router: Router, private searchService: SearchService, private friendsService: FriendsService) { 
		this.userId = localStorage.getItem('currentUser');
	}
	
	ngOnInit() {
  		this.checkInnerWidth();
  		//this.instance.removeSearchResult.subscribe((data) => this.removeSearchResult(data));
  	}

  	ngAfterViewInit(){
  		this.pullNotifications();
		this.subscribeToNotifications();
  	}

  	removeSearchResult(event){
  		alert('removeSearchResult plz');
  	}
  	private logOut(){
		localStorage.removeItem('currentUser');
		localStorage.removeItem('loginData');
		this.router.navigate(['public']);
	}

  	private onResize(event) {
		this.checkInnerWidth();
	}
	
	private checkInnerWidth(){
		this.innerWidth = window.innerWidth;
		if(this.innerWidth < 768){
			this.active = true;
		}else{
			this.active = false;
		}
	}

	private toggleNav(event) {
		if(!this.active){
	    	this.active = true;
	  	}else{
	  		this.active = false;
	  	}
	}

	private querySearch(searchQuery){
		let postObj = {'searchparam': searchQuery};
        this.searchService.querySearch(postObj).subscribe(data => this.afterSearch(data));
	}

	private afterSearch(data){
		this.searchResultList = data;
		if(this.searchResultList.length > 0){
			this.isBorder = true;
		}else{
			this.isBorder = false;	
		}
	}

	@HostListener('document:click', ['$event']) clickedOutside($event){
		this.searchResultList = [];
		this.friendRequestPendingList = [];
		this.isFriendReuestBorder = false;
	}

	private clickedInside($event: Event){
	    $event.preventDefault();
	    $event.stopPropagation();  // <- that will stop propagation on lower layers
	    this.searchResultList = [];
	    //this.friendRequestPendingList = [];
  	}
  	private requestCountClick(event){
  		event.preventDefault();
  		event.stopPropagation();
  		this.isFriendRequestPendingDisplay = false;
  		this.friendRequestCount = 0;
  		let postObj = {'reqarr': this.reqArr};
  		this.friendsService.getRequestDetails(postObj).subscribe(data => this.afterGetRequestDetails(data));
  	}

  	private afterGetRequestDetails(data){
  		if(data.length > 0){
  			this.isFriendReuestBorder = true;
  			this.friendRequestPendingList = data;
  		}else{
  			this.isFriendReuestBorder = false;
  		}
  	}

  	private subscribeToNotifications(): void {
    	 setInterval(() => { this.pullNotifications(); }, 1000 * 5);
	}

 	//Pulling notifications in every 5 seconds
	private pullNotifications(): void {
		let postObj = {'userid': this.userId};
		this.friendsService.getFriendReq(postObj).subscribe(data => this.afterGetFriendReq(data));
	}

	//Keeping the requester userid in array to query from userinfo collection
	private afterGetFriendReq(data){
		this.friendRequestCount = data.length;
		this.reqArr = [];
		if(this.friendRequestCount > 0){
			this.isFriendRequestPendingDisplay = true;
			for(let obj in data){
				this.reqArr.push(data[obj].requester);
			}
		}
	}

 	//Removing the confirmed friend from the list
	private onFriendConfirmed(event){
		for(let i in this.friendRequestPendingList){
			if(event.data.requester === this.friendRequestPendingList[i].username){
				this.friendRequestPendingList.splice(i, 1);
				if(this.friendRequestPendingList.length === 0){
					this.isFriendReuestBorder = false;
				}
			}
		}
	}

}
