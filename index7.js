const { observable, fromEvent, of, interval, timer, range, from, fromPromise } = rxjs;
const { take, map, pluck, first, last, find, findIndex, skip, skipWhile, takeWhile, skipUntil, takeUntil } = rxjs.operators;

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

of(1, 5, 'Hello', 'World')
    .pipe(
        //first(),
        //last()
        //find( x => {
        //    if (typeof x === 'string')
        //        return x.toLowerCase() === 'hello'
        //})
        //findIndex(x => x === 5)
        //take(2)
        //skip(2)
        skipWhile(x => {
            return typeof x === 'number'
        })
    )
    .subscribe(createSubcribe('first'));

// interval(500)
//     .pipe(
//         skipWhile(x => x < 5),
//         takeWhile(x => x < 9)
//     )
//     .subscribe(createSubcribe('skipWhile'));

interval(500)
    .pipe(
        skipUntil(
            timer(3000)
        ),
        takeUntil(
            timer(5000)
        )
    )
    .subscribe(createSubcribe('skipWhile'));