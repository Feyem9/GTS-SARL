import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music';
   list:any = document.querySelector('ul');;

  menu(e: { name: string; }){
 
      
      e.name === 'menu' ? (e.name = "close",
      this.list.classList.add('top-[80px]') , 
      this.list.classList.add('opacity-100')) :( e.name = "menu" ,
      this.list.classList.remove('top-[80px]'),
      this.list.classList.remove('opacity-100'))
    

  }

}
