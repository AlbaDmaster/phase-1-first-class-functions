
function callback(world){
    console.log(`Hello world`) ;
}

function receivesAFunction(callback){
return callback();
}

function returnsANamedFunction(){
    return receivesAFunction();
}
