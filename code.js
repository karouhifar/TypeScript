const buttom = document.getElementById("button");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
class Data {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    get getNumber() {
        return this.num1 + this.num2;
    }
    set covertToNumber({ num1, num2 }) {
        this.num1 = +num1;
        this.num2 = +num2;
    }
}
buttom.addEventListener("click", () => {
    let data = new Data(+num1.value, +num2.value);
    result.innerHTML = data.getNumber;
});
