import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  menus:any[];
  constructor(private serv:ApiService){
    this.menus = [];
  }
  ngOnInit(): void {
    this.serv.getMenus().subscribe((data: any[]) => {
      this.menus = data;
    });
  }

  public change_val(element_id:any) {
    console.log("This " + element_id + " comes from api.change_val");
    this.serv.change_val(element_id);
    //this.api.element_id = element_id;
  }
}
