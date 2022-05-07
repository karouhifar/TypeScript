var buttom = document.getElementById("button");
var num1Dom = document.getElementById("num1");
var num2Dom = document.getElementById("num2");
var result = document.getElementById("result");
var Data = /** @class */ (function () {
    function Data() {
    }
    Object.defineProperty(Data.prototype, "getNumber", {
        get: function () {
            return this.num1 + this.num2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "setNumber", {
        set: function (_a) {
            var num1 = _a.num1, num2 = _a.num2;
            this.num1 = +num1;
            this.num2 = +num2;
        },
        enumerable: false,
        configurable: true
    });
    return Data;
}());
var numbers;
(function (numbers) {
    numbers[numbers["num1"] = +num1Dom] = "num1";
    numbers[numbers["num2"] = +num2Dom] = "num2";
})(numbers || (numbers = {}));
;
buttom.addEventListener("click", function () {
    var data = new Data();
    data.setNumber(numbers);
    result.innerHTML = data.getNumber;
});
