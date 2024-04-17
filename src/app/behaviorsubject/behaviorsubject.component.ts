import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-behaviorsubject',
  standalone: true,
  imports: [NavComponent, ContentComponent],
  templateUrl: './behaviorsubject.component.html',
  styleUrl: './behaviorsubject.component.css'
})
export class BehaviorsubjectComponent {

}
