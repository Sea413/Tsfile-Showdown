var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.greet = function () {
        return "hello " + this.message;
    };
    return Greeter;
}());
var greeters = [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter("how are you"));
console.log(greeters);
for (var _i = 0, greeters_1 = greeters; _i < greeters_1.length; _i++) {
    var greeter = greeters_1[_i];
    console.log(greeter.greet());
}
