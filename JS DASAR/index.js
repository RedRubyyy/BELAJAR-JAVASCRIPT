class $HTML {
    constructor (element , className , id , textContent , href) {
        this.element = element,
        this.className = className,
        this.id = id,
        this.textContent = textContent,
        this.href = href
    }
    addOn (parrent) {
        const $parrent = document.querySelector(parrent);
        const $ = document.createElement(this.element)
        $parrent.appendChild($);
        $.textContent = this.textContent
        $.classList = this.className
        $.id = this.id
    }
}
const exampleObj = {
    name : "nopal",
    favor : 'jeane'
}

const $$ = new $HTML('li' , 'example' , 'id-ID' ,)
$$.textContent = 'EXAMPLE KIDS'
$$.addOn('body')

function Objects (frist , sec) {
    this.frist = frist,
    this.sec = sec
}

// Object.prototype.ok = () => {
//     console.log('ok')
// }
// const obj = new Objects ('nopal' , 'yo mbarang')

// class Person {
//     name;
  
//     constructor(name) {
//       this.name = name;
//     }
  
//     introduceSelf() {
//       console.log(`Hi! I'm ${this.name}`);
//     }
//   }
// const exc = new Person('kont')
// console.log(exc.name)




// People.prototype = Object.create(Employee.prototype)

// Employee.prototype.sayHello = function () {
//     console.log(`hello iam is employee and my name id ${this.name}`)
// }
// People.prototype.sayHello = function () {
//     console.log(`hello iam is people and my name id ${this.name}`)
// }

// const andi = new Employee ('andi');
// const budi = new People ('budi')
// andi.sayHello()
// budi.sayHello()


