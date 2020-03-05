import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-delicous',
  templateUrl: './delicous.component.html',
  styleUrls: ['./delicous.component.scss']
})
export class DelicousComponent implements OnInit, AfterViewInit {

  @ViewChild('interacionIcon', { static: false, read: ElementRef }) interacionIcon: ElementRef;
  @ViewChild('interacionNum', { static: false, read: ElementRef }) interacionNum: ElementRef;

  @Input() num: number;
  @Input() icon: string;
  @Input() recipeId: string;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    // this.interaction = this.getInteraction(this.recipeId);
    // console.log(this.el)
  }

  get isInteracted() {
    // TODO: use userId + recipeId to query db if user already interact with recipe,
    return false;
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.interacionNum.nativeElement, 'width', `${this.num.toString().length}.5rem`);
  }

  onInteract() {
    // TODO: should use API call to update record
    this.num = this.isInteracted ? this.num + 1 : this.num - 1;
    // this.renderer.setStyle(
    //   this.interacionIcon.nativeElement,
    //   'filter',
    //   this.interaction ? this.interactedColor : this.DEFAULT_ICON_COLOR
    // );
    // this.interaction ? this.renderer.addClass(this.interacionIcon.nativeElement, 'bounceIn') :
    //   this.renderer.removeClass(this.interacionIcon.nativeElement, 'bounceIn');
    // this.renderer.setStyle(
    //   this.interacionNum.nativeElement,
    //   'color',
    //   this.interaction ? this.interactedColor : this.DEFAULT_ICON_COLOR
    // );
    // PUT REQUEST
  }
}
