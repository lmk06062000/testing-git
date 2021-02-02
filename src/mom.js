const myPromise= new Promise((resolve,reject)=>{
    if(true){
        setTimeout(() => {
            resolve("I love you")
        }, 1000)    
    }
    else{
        reject("I failed")
    }
})
myPromise.then(value=>console.log(value).catch(rejectValue=>console.log(rejectValue)));