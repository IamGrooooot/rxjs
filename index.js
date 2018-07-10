const { Observable, fromEvent } = rxjs;

var button = document.querySelector("button");

var btn$ = fromEvent(button, 'click');

btn$.subscribe(data => {
    console.log(data);
});

fromEvent(document.querySelector('input'), 'keyup')
    .subscribe(data => {
        console.log(data);        
    });

fromEvent(document, 'mousemove')
    .subscribe(data => {
        document.querySelector('h1').innerHTML=`X: ${data.clientX}, Y: ${data.clientY}`;
    });