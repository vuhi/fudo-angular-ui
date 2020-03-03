import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SumaryPipe implements PipeTransform {
  transform(value: string, characters = 200): any {
    if (!value) {
      return null;
    }
    if (value.length > characters ) {
      return `${value.substr(0, characters)} ...`;
    }
    return value;
  }
}
