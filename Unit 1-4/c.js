let myProm = new Promise((res, rej)=>{
    setTimeout(()=>{
        res("Promise resolved");
    }, 5000);
});

myProm.then((result)=>{
    alert(result);
});

//change.then
//resolve, reject