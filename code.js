var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const buttom = document.getElementById("button");
const num1Dom = document.getElementById("num1");
const num2Dom = document.getElementById("num2");
const num3Dom = document.getElementById("num3");
const tBody = document.getElementById("dataJSON");
const result = document.getElementById("result");
class Data {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    get getNumber() {
        return this.num1 + this.num2;
    }
    doubleAmount(double, nameData) {
        let name = { name: nameData };
        console.log(name);
        console.log(this.getNumber);
        return this.getNumber * double + " " + name.name;
    }
}
function getJSONData() {
    return __awaiter(this, void 0, void 0, function* () {
        const dataJSON = yield fetch("./data.json").then();
        return dataJSON;
    });
}
buttom.addEventListener("click", () => {
    let data = new Data(+num1Dom.value, +num2Dom.value);
    let result1 = data.doubleAmount(+num3Dom.value, "Jack");
    getJSONData().then((json) => json.json()).then((data) => {
        let stringData = "";
        for (const dataArray of data) {
            stringData += "<tr><td>" + dataArray.name + "</td><td>" + dataArray.age + "</td><td>" + dataArray.hobbies + "</td></tr>";
        }
        tBody.innerHTML = stringData;
    });
    //  or  data.setNumber(numbers);
    result.innerHTML = result1;
    // or  result.innerHTML = <any> data.getNumber;
});
