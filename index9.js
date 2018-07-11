const { observable, fromEvent, of, interval, timer, range, from, fromPromise } = rxjs;
const { bufferCount, bufferTime, buffer, distinctUntilChanged, distinct, debounceTime, filter, take, map, pluck, first, last, find, findIndex, skip, skipWhile, takeWhile, skipUntil, takeUntil } = rxjs.operators;

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


// interval(500)
//     .pipe(
//         buffer(
//             interval(2000)
//         ),
//         take(3)
//     )
//     .subscribe(createSubcribe('buffer'));

// interval(500)
//     .pipe(
//         bufferTime(2000),
//         take(4)
//     )
//     .subscribe(createSubcribe('buffer'));

// range(0, 40)
//     .pipe(
//         bufferCount(3)
//     )
//     .subscribe(createSubcribe('buffer'));

interval(1000)
    .pipe(
        buffer(
            fromEvent(document, 'click')
        ),
        map(x => x.length)
    )
    .subscribe(createSubcribe('buffer'));