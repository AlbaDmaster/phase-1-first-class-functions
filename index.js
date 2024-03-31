

function receivesAFunction(callback){
return callback();
}

function returnsANamedFunction(){
    function Kimani(){
        console.log("I am named");
    }
    return Kimani;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("My name is the master");
    }
}