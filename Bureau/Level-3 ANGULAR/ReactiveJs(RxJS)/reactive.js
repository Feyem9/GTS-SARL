// const { range, filter, map } = rxjs;

// range(1, 200)
//   .pipe(
//     filter((x) => x % 2 === 1),
//     map((x) => x + x)
//   )
//   .subscribe((x) => console.log(x));

  const { range } = rxjs;
const { filter, map } = rxjs.operators;

range(1, 200)
  .pipe(
    filter((x) => x % 2 === 1),
    map((x) => x + x)
  )
  .subscribe((x) => console.log(x));