import { Directive , ElementRef, Renderer , HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {
  @HostBinding('style.border')
  border: string;
  constructor(private el: ElementRef, private renderer: Renderer) {

}

  @HostListener('click')
  onClick() {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', 'blue');
    // this.renderer.setElementStyle(this.el.nativeElement, 'border', '3px solid red' );
    this.border = '5px solid red ';
  }


}
