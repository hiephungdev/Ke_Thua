// kế thừa 
class School {
    constructor(id , name , birthYear) {
        this.id = id;
        this.name = name;
        this.birthYear = birthYear;
    }

    // phương thức của lớp school 
    calcAge(currentYear){
        return currentYear - this.birthYear;
    }
}

const p1 = new School("P001","Bắp","2005");
p1.calcAge(2026);

// lớp student kế thừa từ lớp school
class student extends School{}

// tạo đối tượng sub class student 
const s1 = new student("HS001","Hà","2005");
s1.calcAge(2027);

// kế thừa từ lớp School ( có thuộc tính và phương thức riêng)
class Teacher extends School{
    constructor(id,name,birthYear,phone){
        super(id,name,birthYear);
        this.phone = phone;
    }

    wakeUp(){
        console.log(`${this.name} thường dậy lúc 5h sáng`);
    }
}

const teacher = new Teacher("GV001","Oanh","1990","0911139501")
teacher.wakeUp();


// giải bài tập 
// giải bài tập 34 :
class Employee{
    constructor(name , salary){
        this.name = name;
        this.salary = salary;
    }

    getInfo(){
        console.log(`Tên : ${this.name} - Lương: ${this.salary}`);
    }

    calculateSalary(){
        return this.salary;
    }
}

class Devaloper extends Employee{
    constructor(name , salary , language) {
        super(name , salary);
        this.language = language;
    }

    getInfo(){
        return `${super.getInfo()} - Ngôn ngữ : ${this.language}`;
    }

    calculateSalary(){
        const baseSalary = super.calculateSalary();
        return baseSalary * 1.2;
    }
}


// get , set 
// get để lấy giá trị 
// set để lấy giá trị 

class Schools {
    constructor(name , id, birthYear , score) {
        this.id = id;
        this.name = name;
        this.birthYear = birthYear;
        this._score = score ;
        // thêm dấu _ dưới thuộc tính thể hiện nó ở trạng thái protected 
        // không nên truy cập sửa , đổi trực tiếp từ bên ngoài 
    }

    calcAge(currentYear){
        return currentYear - this.birthYear;
    }

    // get cho thuộc tính score
    get score(){
        return this._score;
    }

    // set thiết lập thuộc tính score 
    set score(value){
        // thêm các biểu thức logic để kiểm tra giá trị có hợp lệ không
        if(value >= 0 && value <= 100){
            this._score = value;
        }
        else{
            console.log("Điểm số không hợp lệ");
        }
    }
}


// tạo đối lượng 
const john = new Schools("ABC","TH001",2007,40);  

// sử dụng get và set 
console.log(john.score);

//set 
john.score = 50 ;



/// Tính đóng gói trong js (Encapsulation)
/*
public fields : Trường công khai , công cộng 
private fields : Trường riêng tư
pulic method : phương thức công khai 
private method : phương thức riêng tư 
*/

class Wallet{ //  Wallet : Ví 
    constructor(bankName , pin) {
        this.bankName = bankName;
        this.pin = pin;
        this.balance = 0;
    }

    deposit(value){
        this.balance = value;
    }

    withdraw(){
        if(value > this.balance){
            console.log("số tiền trong tài khoản không đủ");
        }
        else{
            this.balance -= value;
            console.log("rút tiền thành công");
        }
    }
}


// tính đóng gói 
