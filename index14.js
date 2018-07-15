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

// throw(new Error('Что-то пошло не так!'))
//     .subscribe((x) => {
//         console.log(x);
//     });

// interval(500)
//     .pipe(
//         take(2)
//     )
//     .subscribe(createSubcribe('Error'));