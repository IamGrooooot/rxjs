const { combineLatest, zip, concat, observable, fromEvent, of, interval, timer, range, from, fromPromise } = rxjs;
const { withLatestFrom, concatMap, mergeMap, concatAll, mergeAll, merge, delay, every, defaultIfEmpty, bufferCount, bufferTime, buffer, distinctUntilChanged, distinct, debounceTime, filter, take, map, pluck, first, last, find, findIndex, skip, skipWhile, takeWhile, skipUntil, takeUntil } = rxjs.operators;

function createSubcribe(name) {
    return {
        next(x) {
            console.log(name, ': ', x);
        },
        error(err){
            console.log('Error: ', err);
        },
        complete(){
            console.log(name, ': Completed!')
        }
    }
}

// const s1$ = of('Hello');
// const s2$ = of('World');

// zip(
//     s1$.pipe(
//         delay(5000)
//     ), 
//     s2$.pipe(
//         delay(3000)
//     )
// )
//     .subscribe(createSubcribe('zip'));

// const interval$ = interval(1000);

// zip(
//     interval$,
//     interval$.pipe(
//         take(3)
//     ),
//     of('GV')
// )
//     .subscribe(createSubcribe('zip'));

// const int1$ = interval(1000);
// const int2$ = interval(500);

// int1$.pipe(
//     withLatestFrom(int2$),
//     take(10)
// )
// .subscribe(createSubcribe('withLatestFrom'));

const t1$ = timer(1000, 2000);
const t2$ = timer(2000, 2000);
const t3$ = timer(3000, 2000);

combineLatest(t1$, t2$, t3$).pipe(
    take(5)
    )
    .subscribe(createSubcribe('combineLatest'));

