import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  constructor(private userService : UserService,private router : Router) { 
    
  }

  logOut() {
    this.userService.destroyAuth();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
