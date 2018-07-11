const { observable, fromEvent, of, interval, timer, range, from, fromPromise } = rxjs;
const { delay, every, defaultIfEmpty, bufferCount, bufferTime, buffer, distinctUntilChanged, distinct, debounceTime, filter, take, map, pluck, first, last, find, findIndex, skip, skipWhile, takeWhile, skipUntil, takeUntil } = rxjs.operators;

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

// of()
//     .pipe(
//         defaultIfEmpty('I am empty sream!')
//     )
//     .subscribe(createSubcribe('stream'));

from([1, 2, 3, 4, 5])
    .pipe(
        skipWhile(x => x <= 3),
        every(x => x > 2)
    )
    .subscribe(createSubcribe('every'));

from([1, 2, 3, 4, 5])
    .pipe(
        delay(1500),
        skipWhile(x => x <= 3),
    )
    .subscribe(createSubcribe('delay'));

// from([1, 2, 3, 4, 5])
//     .pipe(d
//         map( x => x + 1),
//         let(observer => observer.pipe(
//             map(x => x * x)
//         ))
//     )
//     .subscribe(createSubcribe('delay'));