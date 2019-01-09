import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scramble'
})

export class Scramble implements PipeTransform {

  a: string[];
  n: number;
  j: number;
  tmp: string;

  transform(value: string): string {
      this.a = value.split(''),
      this.n = this.a.length;

      for (let i = this.n - 1; i > 0; i--) {
          this.j = Math.floor(Math.random() * (i + 1));
          this.tmp = this.a[i];
          this.a[i] = this.a[this.j];
          this.a[this.j] = this.tmp;
      }
      return this.a.join('');
  }
}
