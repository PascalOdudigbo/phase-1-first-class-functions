function receivesAFunction(callback){
    callback();
}
function callback(){
    return "Alexander the great";
}
function returnsANamedFunction(){
    return function named(){
        return "Hello world";
    };
}
function returnsAnAnonymousFunction(){
    return function (){
        return "Test completed yeah?";
    }
}