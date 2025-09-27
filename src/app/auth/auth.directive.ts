import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from './auth.service';
import { Permission } from './auth.model';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  private authService = inject(AuthService)
  userType = input.required<Permission>({alias:'appAuth'})
  private templateRef = inject(TemplateRef)
  private viewContainerRef = inject(ViewContainerRef)

  constructor() {
    effect(()=>{
      if(this.authService.activePermission() === this.userType()){
        this.viewContainerRef.createEmbeddedView(this.templateRef)
        console.log('show');

      }else{
        console.log('dont show');
        this.viewContainerRef.clear()
        
      }
    })
   }

}
