// const { Observable } = rxjs;

// let _obs = new Observable();

// // proceeed from here if you haven't setup 

// ---------------------------------------------------------------------

// const { range, filter, map } = rxjs;

// range(1, 500)
//   .pipe(
//     filter((x) => x % 2 === 1),
//     map((x) => x + x)
//   )
//   .subscribe((x) => console.log(x));

// ----------------------------------------------------------------------

// const { of, map } = rxjs;

// of(1, 2, 3).pipe(map((x) => x + '!!!')); // etc

// -----------------------------------------------------------------------

// import { of } from 'rxjs';

// const sumObserver = {
//   sum: 0,
//   next(value) {
//     console.log('Adding: ' + value);
//     this.sum = this.sum + value;
//   },
//   error() {
//     // We actually could just remove this method,
//     // since we do not really care about errors right now.
//   },
//   complete() {
//     console.log('Sum equals: ' + this.sum);
//   }
// };

// of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
//   .subscribe(sumObserver);

// // Logs:
// // 'Adding: 1'
// // 'Adding: 2'
// // 'Adding: 3'
// // 'Sum equals: 6'

// ----------------------------------------------------------------------------

// mix.js('resources/js/app.js', 'public/js')
//    .babelConfig({
//        plugins: ['@babel/plugin-syntax-dynamic-import']
//    });


import { interval, take } from 'rxjs';

const source$ = interval(1000).pipe(take(4));

async function getTotal() {
  let total = 0;

  await source$.forEach(value => {
    total += value;
    console.log('observable -> ' + value);
  });

  return total;
}

getTotal().then(
  total => console.log('Total: ' + total)
);

// Expected:
// 'observable -> 0'
// 'observable -> 1'
// 'observable -> 2'
// 'observable -> 3'
// 'Total: 6'
