const { observable, fromEvent, of, interval, timer, range, from, fromPromise } = rxjs;
const { take, map, pluck } = rxjs.operators;

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

fromEvent(document.querySelector('input'), 'keyup')
    .pipe(
        //map(x => x.target.value),
        pluck('target', 'value'),
        //map(x => x.toUpperCase()),
        map(x => {
            return {
                value: x,
                length: x.length
            } 
        })
    )
    .subscribe(createSubcribe('map'));