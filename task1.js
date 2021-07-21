// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let mass_exe = [
    {
        product: 'Milk',
        price: 34,
        status: 'Drink'
    },
    {
        product4: 'Bread',
        price: 12,
        status: 'Eat'
    },
    {
        product1: 'Juice',
        product2: 'Cake',
        product3: 'Cake',
        price: 22,
        status: 'Drink'
    },
    {
        product6: 'Cake',
        product5: 'Cake',
        price: 71,
        status: 'Eat'
    }
];

let client1 = new Client(45, 'Vanya', 'Voloshyn', 'igmf@mrmomm', '25685', mass_exe);
console.log(client1)


// створити пустий масив, наповнити його 10 об'єктами Client
let newProduct = ['milk', 'banana'];
let newProduct_1 = ['banana'];
let newProduct_2 = ['milk', 'apple', 'banana'];
let newProduct_3 = ['milk', 'apple', 'banana', 'onion'];

let empty_one = [];
let client1_1 = new Client(45, 'John', 'Surname', 'igmf@mrmomm', '25685', newProduct);
let client2 = new Client(23, 'Jak', 'Surname', 'igmf@mrmomm', '25685', newProduct_1);
let client3 = new Client(12, 'Oleg', 'JNJJBN', 'igmf@mrmomm', '25685', newProduct_3);
let client4 = new Client(14, 'Roman', 'VolosSRWFFWhyn', 'igmf@mrmomm', '25685', newProduct_2);
let client5 = new Client(41, 'Grisha', 'VolosWFWFn', 'igmf@mrmomm', '25685', newProduct_1);
let client6 = new Client(78, 'Nazar', 'VFWFn', 'igmf@mrmomm', '25685', newProduct_2);
let client7 = new Client(1, 'Zenia', 'WFEWFWshyn', 'igmf@mrmomm', '25685', newProduct_1);
let client8 = new Client(26, 'Igor', '45Y5GEGE', 'igmf@mrmomm', '25685', newProduct_3);
let client9 = new Client(11, 'Nastya', 'Voloshyn', 'igmf@mrmomm', '25685', newProduct);
let client10 = new Client(22, 'Ira', 'Voloshyn', 'igmf@mrmomm', '25685', newProduct_3);

empty_one.push(client1_1, client2, client3, client4, client5, client6, client7, client8, client9, client10)
console.log(empty_one)

// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let wrap_empty_one = empty_one.sort(function (a, b) {
        return a.order.length - b.order.length
    }
)
console.log(wrap_empty_one)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// -- info () - яка виводить всю інформацію про автомобіль

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue


function Car(model, maker, year, power, motor) {

    this.model = model;
    this.maker = maker;
    this.year = year;
    this.power = power;
    this.motor = motor;

    this.driver = function drive() {
        console.log((`їдемо зі швидкістю ${this.power} на годину`));

    }
    this.newSpeed = function speed(newValue) {
        this.power = newValue
    }

    this.newYear = function year(newValueOfYear) {
        this.year = newValueOfYear
    }


    this.driver_ = function (new_value_for_driver) {
        this.driver_ = new_value_for_driver
    }
    this.info = function (){
        console.log(`model: ${this.model}, maker: ${this.maker}`);
    }
}

let driver_ = {
    age: 21,
    work: 'Museum',
    play: 'basketball'
}


let cars = new Car('Tesla', 'Usa', 2020, 250, 500);

console.log(cars)
cars.driver()
cars.info()
cars.newSpeed(270)

cars.newYear(2021);

cars.driver_(driver_)
console.log(cars)



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
