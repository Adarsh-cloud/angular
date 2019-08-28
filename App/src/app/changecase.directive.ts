import { Directive, ElementRef, Renderer , HostListener} from '@angular/core';

@Directive({
  selector: '[appChangeCaseDirective]'
})
export class ChangeCaseDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('blur') // @hostlistener will contain the event value in the argument
  onblur() {
    let changedValue;
    changedValue = this.el.nativeElement.value.toUpperCase();
    this.renderer.setElementProperty(this.el.nativeElement, 'value', changedValue);
  }
}
