const { observable, of, interval, timer, range, from } = rxjs;
const { take } = rxjs.operators;

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

const arr = [
    {
        id: 1,
        name: 'vg1'
    },
    {
        id: 2,
        name: 'vg2'
    }
]

const set = new Set([1, 2, 3, '4', '5', { id: 1, name: 'vg3' }])

const map = new Map([[1, 2], [3, 4], [5, 6]])

from(map)
    .subscribe(
        createSubcribe('from')
    );

