import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'app-interaction-icon',
  templateUrl: './interaction-icon.component.html',
  styleUrls: ['./interaction-icon.component.scss']
})
export class InteractionIconComponent implements OnInit, AfterViewInit {

  @ViewChild('interacionIcon', { static: false, read: ElementRef }) interacionIcon: ElementRef;
  @ViewChild('interacionNum', { static: false, read: ElementRef }) interacionNum: ElementRef;

  @Input() num: number;
  @Input() faIcon: IconDefinition;
  @Input() matIconName: string;
  @Input() recipeId: string;
  @Input() interactedColor: string;

  interaction = false;

  private DEFAULT_ICON_COLOR = '#838689';

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.interaction = this.getInteraction(this.recipeId);
    // console.log(this.el)
  }
  ngAfterViewInit(): void {
    this.renderer.setStyle(this.interacionNum.nativeElement, 'width', `${this.num.toString().length}.5rem`);
  }

  onInteract() {
    this.interaction = !this.interaction;
    this.num = this.interaction ? this.num + 1 : this.num - 1;
    this.renderer.setStyle(
      this.interacionIcon.nativeElement,
      'color',
      this.interaction ? this.interactedColor : this.DEFAULT_ICON_COLOR
    );
    this.interaction ? this.renderer.addClass(this.interacionIcon.nativeElement, 'bounceIn') :
      this.renderer.removeClass(this.interacionIcon.nativeElement, 'bounceIn');
    this.renderer.setStyle(
      this.interacionNum.nativeElement,
      'color',
      this.interaction ? this.interactedColor : this.DEFAULT_ICON_COLOR
    );
    // PUT REQUEST
  }

  getInteraction(recipeId: string) {
    return false;
  }
}
