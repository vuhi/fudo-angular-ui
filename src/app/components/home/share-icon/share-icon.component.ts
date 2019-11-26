import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'app-share-icon',
  templateUrl: './share-icon.component.html',
  styleUrls: ['./share-icon.component.scss']
})
export class ShareIconComponent implements OnInit {

  @Input() icon: IconDefinition;
  @Input() recipeId: string;

  constructor() { }

  ngOnInit() {
  }

  onReport() {

  }

}
