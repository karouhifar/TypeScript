const buttom = document.getElementById("button");
const num1 = document.getElementById("num1")! as HTMLInputElement;
const num2 = document.getElementById("num2")! as HTMLInputElement;
const result = document.getElementById("result")! as Element;

class Data {
    private num1: number
    private num2: number
    constructor (num1 : number, num2: number ) {
        this.num1 = num1;
        this.num2 = num2;
    }
    
    get getNumber() : number {
        return this.num1 + this.num2;
    }

    set covertToNumber({num1,num2}) {
        this.num1 = +num1;
        this.num2 = +num2;

         }
}

buttom.addEventListener("click", ()=> {

    let data = new Data(+num1.value,+num2.value);
    result.innerHTML = data.getNumber as any;
});