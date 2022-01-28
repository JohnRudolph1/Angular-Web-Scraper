

  import { HttpClient } from '@angular/common/http';
  import { Component, OnInit } from '@angular/core';
  import { Injectable } from '@angular/core';
  import { FetchComponent } from '../fetch/fetch.component';
  import { Observable } from 'rxjs';
  @Component({
    selector: 'app-outdoors',
  templateUrl: './outdoors.component.html',
  styleUrls: ['./outdoors.component.css']
  })
  @Injectable()
  export class OutdoorsComponent implements OnInit {

    constructor() { }
  
    ngOnInit(): void {
    }
  
  }