import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'api address';
  element_id:any; //here is the shared variable
  selectedMenu = new BehaviorSubject<any>({ name: 'None', id: 0 });
  menus = [{name: 'Menu 1', id: 1}, {name: 'Menu 2', id: 2}];
  constructor() { }

  public getMenus(){
    console.log('This ' + this.element_id + ' comes from api.getMenus');
    return of(this.menus);
    //return this.http.get(this.url);
  }
  /*
  public getData(element_id){
    console.log('This ' + element_id + ' comes from api.getData');
    //return this.http.get(this.url);
  }*/

  public change_val(element_id:any){
    console.log('This ' + element_id + " comes from api.change_val");
    this.element_id = element_id;
    let selMen = this.menus.filter(x => x.id == element_id)[0];
    this.selectedMenu.next(selMen);
  }
}
