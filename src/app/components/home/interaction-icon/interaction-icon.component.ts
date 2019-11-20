import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'app-interaction-icon',
  templateUrl: './interaction-icon.component.html',
  styleUrls: ['./interaction-icon.component.scss']
})
export class InteractionIconComponent implements OnInit {

  @Input() num: number;
  @Input() icon: IconDefinition;
  @Input() recipeId: string;

  interaction = false;
  constructor() { }

  ngOnInit() {
    this.interaction = this.getInteraction(this.recipeId);
  }

  onInteract() {
    this.interaction = !this.interaction;
    this.num = this.interaction ? this.num + 1 : this.num - 1;
    // PUT REQUEST
  }

  getInteraction(recipeId: string) {
    return false;
  }
}
