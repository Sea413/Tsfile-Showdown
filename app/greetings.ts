class Greeter {
  constructor (public message: string){}

  greet(){
    return "hello " + this.message;
  }
}

var greeters = [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter("how are you"));
console.log(greeters);
for(var greeter of greeters){
  console.log(greeter.greet());
}
