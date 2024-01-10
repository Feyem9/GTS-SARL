import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { home } from '../home';

@Component({
  selector: 'app-child',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() images : home[] = []

  selectedIndex = 0;

  showPrev(i:number){
    if(this.selectedIndex > 0){
      this.selectedIndex = i - 1;
    }
  }

  showNext(i:number){
    if(this.selectedIndex < this.images?.length - 1){
      this.selectedIndex = i + 1;
    }
  }
}
