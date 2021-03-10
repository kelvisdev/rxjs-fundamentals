import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Observable, PartialObserver } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
      <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <h2>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul>
    
  `,
  styles: []
})
export class AppComponent implements OnInit {

  title = 'RXJS';

  ngOnInit(): void {
    // this.runPromise('Kelvis')
    //   .then(result => console.log(result))
    //   .catch(erro => console.log(erro));

    // this.runObservable('Kelvis')
    //   .subscribe(result => console.log(result), error => console.log(error));

    const observer = {
      next: valor => console.log('Next: ', valor),
      error: erro => console.log('Erro: ', erro),
      complete: () => console.log('FIM!'),
    };

    const obs = this.runObservable('Kelvis');
    obs.subscribe(observer);

  }

  runPromise(name: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const nameExpected = 'Kelvis';

      if (name === nameExpected) {
        setTimeout(() => {
          resolve('Welcome ' + name);
        }, 1000);
      } else {
        reject('Ops! Not found ' + nameExpected);
      }
    });
  }

  runObservable(name: string): Observable<string> {
    return new Observable(subscriber => {
      const nameExpected = 'Kelvis';

      if (name == nameExpected) {
        subscriber.next('Olá ' + nameExpected);
        subscriber.next('Olá de novo! ' + nameExpected);
        setTimeout(() => {
          subscriber.next('Reponse with delay! ' + nameExpected);
        }, 5000);
        subscriber.complete();
      } else {
        subscriber.error('Ops! Not found!');
      }

    });
  }
}
