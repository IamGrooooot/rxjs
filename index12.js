const { concat, observable, fromEvent, of, interval, timer, range, from, fromPromise } = rxjs;
const { concatMap, mergeMap, concatAll, mergeAll, merge, delay, every, defaultIfEmpty, bufferCount, bufferTime, buffer, distinctUntilChanged, distinct, debounceTime, filter, take, map, pluck, first, last, find, findIndex, skip, skipWhile, takeWhile, skipUntil, takeUntil } = rxjs.operators;

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

// of('Hello')
//     .subscribe(x => {
//         of(x + ' World')
//             .subscribe(createSubcribe('MergeMap'));
//     });

// of('Hello')
//     .pipe(
//         mergeMap(x => {
//             return of(x + ' World')
//         })
//     )
//     .subscribe(createSubcribe('MergeMap'));

const promise = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data + ' mrSoft');
        }, 2000);
    });
}

// of('GV')
//     .pipe(
//         mergeMap(x => {
//             return promise(x);
//         })
//     )
//     .subscribe(createSubcribe('promice'));

range(1, 10)
    .pipe(
        concatMap((x, i) => {
            return interval(100)
                .pipe(
                    take(x),
                    map(q => i)
                )
        })
    )
    .subscribe(createSubcribe('concatMap'));
