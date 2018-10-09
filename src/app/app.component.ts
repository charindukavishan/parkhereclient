import { Component, OnInit, Input }   from '@angular/core';
import { RegserviceService } from './servers/regservice.service';

@Component ({
    selector:     'app-component'
    ,templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    state=false;
    constructor(private service:RegserviceService) {
    }
click(){
    this.service.deleteToken();
    this.state=false;
}
    ngOnInit() {
        if(this.service.isLoggedIn())
        this.state=true;
    }
}