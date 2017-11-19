import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  isSSLCtab =false;
  isHStab =false;
  isDegreeTab =false;
  ngOnInit() {
    // this.isSSLCtab=true;
    console.log('isSSLCtab : '+ this.isSSLCtab);
    //this.openSSLC();
  }
  openSSLC(){
    this.isSSLCtab =true;
    this.isHStab =false;
    this.isDegreeTab =false;
    
  }
  openHS(){
    this.isSSLCtab =false;
    this.isHStab =true;
    this.isDegreeTab =false;
  }
  openDegree(){
    this.isSSLCtab =false;
    this.isHStab =false;
    this.isDegreeTab =true;
  }
  mouseOut(){
    this.isSSLCtab =false;
    this.isHStab =false;
    this.isDegreeTab =false;
  }

}
