var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var buttom = document.getElementById("button");
var num1Dom = document.getElementById("num1");
var num2Dom = document.getElementById("num2");
var num3Dom = document.getElementById("num3");
var tBody = document.getElementById("dataJSON");
var result = document.getElementById("result");
var Data = /** @class */ (function () {
    function Data(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Object.defineProperty(Data.prototype, "getNumber", {
        get: function () {
            return this.num1 + this.num2;
        },
        enumerable: false,
        configurable: true
    });
    Data.prototype.doubleAmount = function (double, nameData) {
        var name = { name: nameData };
        console.log(name);
        console.log(this.getNumber);
        return this.getNumber * double + " " + name.name;
    };
    return Data;
}());
function getJSONData() {
    return __awaiter(this, void 0, void 0, function () {
        var dataJSON;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("./data.json").then()];
                case 1:
                    dataJSON = _a.sent();
                    return [2 /*return*/, dataJSON];
            }
        });
    });
}
buttom.addEventListener("click", function () {
    var data = new Data(+num1Dom.value, +num2Dom.value);
    var result1 = data.doubleAmount(+num3Dom.value, "Jack");
    getJSONData().then(function (json) { return json.json(); }).then(function (data) {
        var stringData = "";
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var dataArray = data_1[_i];
            stringData += "<tr><td>" + dataArray.name + "</td><td>" + dataArray.age + "</td><td>" + dataArray.hobbies + "</td></tr>";
        }
        tBody.innerHTML = stringData;
    });
    //  or  data.setNumber(numbers);
    result.innerHTML = result1;
    // or  result.innerHTML = <any> data.getNumber;
});
