import {
  Directive, ElementRef, OnInit, Renderer2, Input,
} from '@angular/core';

@Directive({
  selector: '[appBottomBorderColor]',
})

export class BottomBorderDirective implements OnInit {
  @Input('appBottomBorderColor') date?: string;

  constructor(private element: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    const currentTime = new Date().getTime() - new Date(<string> this.date).getTime();
    const msToDay = 86400000;
    const currentDays = Math.floor(currentTime / msToDay);

    let borderBottomColor = 'orange';

    if (currentDays <= 7) {
      borderBottomColor = 'blue';
    } else if (currentDays <= 30) {
      borderBottomColor = 'green';
    } else if (currentDays >= 180) {
      borderBottomColor = 'red';
    }

    this.renderer2.setStyle(this.element.nativeElement, 'border-bottom-color', borderBottomColor);
  }
}
