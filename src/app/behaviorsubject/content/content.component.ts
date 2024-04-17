import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  content:any;
  constructor(private serv:ApiService){}
  ngOnInit(): void {
    this.serv.selectedMenu.subscribe(res => {
      this.content = res;
    });
  }
}
