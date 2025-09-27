import { Directive, effect, inject, input } from '@angular/core';
import { AuthService } from './auth.service';
import { Permission } from './auth.model';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  private authService = inject(AuthService)
  userType = input.required<Permission>({alias:'appAuth'})

  constructor() {
    effect(()=>{
      if(this.authService.activePermission() === this.userType()){
        console.log('show');

      }else{
        console.log('dont show');
        
      }
    })
   }

}
