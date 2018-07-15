const { concat, observable, fromEvent, of, interval, timer, range, from, fromPromise } = rxjs;
const { concatAll, mergeAll, merge, delay, every, defaultIfEmpty, bufferCount, bufferTime, buffer, distinctUntilChanged, distinct, debounceTime, filter, take, map, pluck, first, last, find, findIndex, skip, skipWhile, takeWhile, skipUntil, takeUntil } = rxjs.operators;

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


const s1$ = interval(1000)
    .pipe(
        map(x => 'Stream1: ' + x)
    );
const s2$ = interval(500)
    .pipe(
        map(x => 'Stream2: ' + x)
    );

s1$.pipe(
        merge(s2$),
        take(12)
    ).subscribe(createSubcribe('merge'));

range(1, 3)
    .pipe(
        map( x => range(1, 3)),
        mergeAll()
    ).subscribe(createSubcribe('mergeAll'));

const s3$ = from([1, 2, 3]);
const s4$ = from([4, 5, 6]);

concat(s3$, s4$)
    .subscribe(createSubcribe('concat'));

    range(1, 3)
    .pipe(
        map( x => range(x, 3)),
        mergeAll()
    ).subscribe(createSubcribe('concatAll'));