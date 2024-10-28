import { AbstractControl, Validators } from '@angular/forms';

export class GenericValidator {
  constructor() {}

  static isValidCPF() {
    return (control: AbstractControl): Validators => {
      const strCPF: string = control.value;
      console.log(strCPF);
      var Soma;
      var Resto;
      Soma = 0;
      if (strCPF == '00000000000') return { cpfNotValid: true };

      for (let i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10)))
        return { cpfNotValid: true };

      Soma = 0;
      for (let i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11)))
        return { cpfNotValid: true };
      return true;
    };
  }
}
