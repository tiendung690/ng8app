import { Directive, ElementRef, Input,OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appSimple]'
})
export class SimpleDirective implements OnInit {

  @Input() forColor: string;
  @Input() brColor: string;
  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.color = this.forColor;
    this.el.nativeElement.style.backgroundColor = this.brColor;
  }
  @HostListener('onmouseleave') onmouseleave(){
    this.el.nativeElement.style.color = null;
    this.el.nativeElement.style.backgroundColor = null;
  }
  constructor(private el: ElementRef) {
    
   }
   ngOnInit(){
   }

}
