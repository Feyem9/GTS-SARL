import { Component } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
title:string = 'welcome';

  constructor(){}


  images = [
    {
      img:'assets/baterie.jpg',
      name:'baterie',
      description:'lorem ipsum sit dolor '
    },    
    {
      img:'assets/flute.jpg',
      name:'flute',
      description:'lorem ipsum sit dolor '
    },    
    {
      img:'assets/guitar.jpg',
      name:'guitar',
      description:'lorem ipsum sit dolor '
    },    
    {
      img:'assets/piano.jpg',
      name:'piano',
      description:'lorem ipsum sit dolor '
    },    
    {
      img:'assets/saxophone.jpg',
      name:'saxophone',
      description:'lorem ipsum sit dolor '
    },    
    {
      img:'assets/violon.jpg',
      name:'violon',
      description:'lorem ipsum sit dolor '
    },    
    {
      img:'assets/tamtam.avif',
      name:'tamtam',
      description:'lorem ipsum sit dolor '
    },    
    
    {
      img:'assets/trumpete.avif',
      name:'trumpete',
      description:'lorem ipsum sit dolor '
    }
  ]

}
