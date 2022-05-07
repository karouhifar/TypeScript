const buttom = document.getElementById("button");
const num1Dom = document.getElementById("num1")! as HTMLInputElement;
const num2Dom = document.getElementById("num2")! as HTMLInputElement;
const result = document.getElementById("result")! as Element;
class Data {
    private num1: number
    private num2: number
    constructor ( ) {}
    get getNumber() : number {
        return this.num1 + this.num2;
    }
    set setNumber({num1,num2} ) {
        this.num1 = +num1;
        this.num2 = +num2;
         }
}

enum numbers { num1 = +num1Dom, num2 = +num2Dom};

buttom.addEventListener("click", ()=> {
    let data = new Data();
    data.setNumber(numbers);
    result.innerHTML = data.getNumber as any;
});