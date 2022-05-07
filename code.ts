const buttom = document.getElementById("button");
const num1Dom = document.getElementById("num1")! as HTMLInputElement;
const num2Dom = document.getElementById("num2")! as HTMLInputElement;
const num3Dom = document.getElementById("num3")! as HTMLInputElement;
const tBody = document.getElementById("dataJSON")! as HTMLElement;
const result = document.getElementById("result")! as HTMLElement;

declare type Combinable = Array<string | number>;

interface PersonName {
    name ?: string
}
interface NumData extends PersonName {
    doubleAmount: (double: number, nameData: string) => string;
}
class Data implements NumData {


    constructor (private num1:number,private num2:number) {}
    get getNumber() : number {
        return this.num1 + this.num2;
    }

    doubleAmount(double, nameData) : string {
       let name : PersonName = {name : nameData} as PersonName;
       console.log(name);
       console.log(this.getNumber);
        return this.getNumber * double + " " + name.name;
    }
}

async function  getJSONData () {
   const dataJSON : Response  =  await fetch("./data.json").then();
    return dataJSON;
}



buttom.addEventListener("click", ()=> {
    let data = new Data(+num1Dom.value,+num2Dom.value);
    let result1 = data.doubleAmount(+num3Dom.value, "Jack");
    getJSONData().then((json)=> json.json() ).then((data: Array<{name : string; age: Number, hobbies: Combinable}>)=>{
        let stringData : string = "";
       for (const dataArray of data ) {
        stringData += "<tr><td>" + dataArray.name + "</td><td>" + dataArray.age +"</td><td>" + dataArray.hobbies +"</td></tr>";
       }

       tBody.innerHTML = stringData; 
    });

    //  or  data.setNumber(numbers);
    result.innerHTML = result1 as any;
    // or  result.innerHTML = <any> data.getNumber;
});