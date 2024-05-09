import { Directive, ElementRef, Input } from '@angular/core';
import { th } from '@faker-js/faker';

@Directive({
  selector: '[appClassName]'
})
export class ClassNameDirective {

  constructor(private element: ElementRef) {}

  @Input('appClassName') set classNames(classObj: any){
    for(let key in classObj){
      if(classObj[key])
        this.element.nativeElement.classList.add(key);
      else
        this.element.nativeElement.classList.remove(key);
    }
  }

}
