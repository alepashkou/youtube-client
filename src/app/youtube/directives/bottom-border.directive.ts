import {
  Directive, ElementRef, OnInit, Renderer2, Input,
} from '@angular/core';

@Directive({
  selector: '[appBottomBorder]',
})
export class BottomBorderDirective implements OnInit {
  @Input() date?: string;

  constructor(private element: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    const currentTime = new Date().getTime() - new Date(<string> this.date).getTime();
    const currentDays = Math.floor(currentTime / 86400000);
    if (currentDays <= 7) {
      this.renderer2.setStyle(this.element.nativeElement, 'border-bottom-color', 'blue');
    } else if (currentDays <= 30) {
      this.renderer2.setStyle(this.element.nativeElement, 'border-bottom-color', 'green');
    } else if (currentDays >= 180) {
      this.renderer2.setStyle(this.element.nativeElement, 'border-bottom-color', 'red');
    } else {
      this.renderer2.setStyle(this.element.nativeElement, 'border-bottom-color', 'orange');
    }
  }
}
