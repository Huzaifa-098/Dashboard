import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf('') >= 0)
      return { cannotContainSpace: true };
    return null;
  }

static minLength(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf('') >= 0)
      return { minLength:{
        requiredLength:10,
        actulLength:control.value.length,
      }}
    return null;
  }
  static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
    setTimeout(() => {
      console.log('ok');
    }, 2000);

    if (control.value === 'huzaifa') return { shouldBeUnique: true };
    return null;
  }
}
