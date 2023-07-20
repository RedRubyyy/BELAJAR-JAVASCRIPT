//============================================================================================================================//

// FOREACH METHOD()
// Melopping setiap element dari array / nodelist tetapi tidak bisa mereturn value

    // SYNTAX : 
    // Array.ForEach(( element , index ) => {
    //   element merepresentasikan setiap element dari array
    //   index merepresentasikan index element saat looping
    // })

    // EXAMPLE

    // const exampleArray = ["andi" , "budi" , "john" , "celc"];
    // exampleArray.forEach((element , index) => {
    //     console.log(element);  
    //     console.log(index);  
    // })

//============================================================================================================================//

// JOIN()
// digunakan untuk mengganti pemisah array

    // SYNTAX : 
    // Array.join("separator")

    // EXAMPLE :
    // const series = ['BD' , 'Movie' , 'Season'];
    // console.log(series.join("-"))

//============================================================================================================================//

// CONCAT()
// Adalah method untuk menggabung beberapa array

    // SYNTAX : 
    // Array.concat(arr1 , arr2 , arr3 , ...arrs)

    // EXAMPLE
    // const concat1 = [1 , 2 , 3 ,4];
    // const concat2 = [0 , 9 , 7];
    // let concatArray = concat1.concat(concat2)
    // console.log(concatArray);

//============================================================================================================================//

// ENTRIES()
// Untuk membuat stiap element array menjadi array multi dimensi dengan index
// Biasa digunakan di for of

    // SYNTAX :
    // for (let element of Array.entries() ) {
    //     return 
    // }

    // EXAMPLE :
    // const arrayEntries = [false , 10 , "909" , undefined];
    // for (element of arrayEntries.entries()){
    //     console.log(element);
    // };

//============================================================================================================================//

// EVERY() && SOME()
// Menghasilkan bolean dengan array | jika semua true akan menghasilkan true jika ada 1 false akan menghasilkan false

    // SYNTAX SIMPLE:
    // Array.every(element => condition)

    // EXAMPLE : 
    // const everyNumber = [0 , 9 , 21 , 8 , 7 , 3 , -3];
    // const resultEvery = everyNumber.every(element => element < 21)
    // console.log(resultEvery)

//============================================================================================================================//

// FILTER()
// Mengatur sebuah kondisi dari suatu lopping dan dapat menghasilkan return value

    // SYNTAX SIMPLE : 
    // Array.filter(element => condition)

    // EXAMPLE : 
    // const filtering = ["50" , 90 , 18 , "44" , 2 , "26" , "0"];
    // const stringFiltering = filtering.filter(element => typeof element === "string") // filter jika element adalah string
    // const numberFiltering = filtering.filter(element => typeof element === "number") // filter jika e adalah number
    // console.log(stringFiltering);
    // console.log(numberFiltering);

//============================================================================================================================//

// MAP ()
// Map hampir sama seperti ForEach tetapi map dapat return value dan tidak dapat melopping nodelist

    // SYNTAX : 
    // Array.map((element , index , array) => {
    //      return value
    // } , default)

    // SYNTAX SIMPLE :
    // Array.map((element , index) => {
    //     return
    // })

    // EXAMPLE : 
    // const mapArray = [90 , 7 , 7 , 5 , 9 , 2];
    // const negativeNumber = mapArray.map(element => element * -1);
    // console.log(negativeNumber);

//============================================================================================================================//

// POP () & PUSH ()
// pop() untuk menghilangkan element array di index terakhir
// push() digunakan untuk menambahkan element di akhir array

    // SYNTAX : array.pop()
    // SYNTAX : array.push(e1 , e2 , e3 ...es)

    // EXAMLE :
    // const numberX = [5 , 6 , 3 , 7 , 0];
    // const punch = [1 , 3]
    // for (loop = 0 ; loop < 2 ; loop++){
    //     numberX.pop(); // jadi pop akan dilakukan 2 kali karena dilooping
    // };
    // numberX.push(...punch)
    // console.log(numberX);

//============================================================================================================================//

// SORT() && REVERSE()
// sort() Digunakan untuk mengurutkan array
// reverse() Digunakan untuk membalikkan urutan array

    // SYNTAX FOR NUMBER : array.sort( (a , b) => a - b)
    // SYNTAX FOR ALPABET : array.sort()

    // SYTNAX REVERSE : array.reverse()

    // EXAMPLE :
    // const randomNumber = [99 , 8 , 3 , 10 , 43 , 76 , 20];
    // const sortArray = randomNumber.sort((a , b) => a - b);
    // console.log(sortArray);
    // sortArray.reverse();
    // console.log(sortArray);
//============================================================================================================================//

// INCLUDES() & INDEXOF()
// includes() digunkan untuk menghasilkan bollen dengan ada atau tidaknya element di dalam array
// indexOf() diggunakan untuk mencari index dari element

    // SYNTAX : Array.includes(element, start)
    // STNYAX INDEXOF() : Array.indexOf(item, start)

    // EXAMPLE : 
    // const murderer = ["Jack" , "Natta" , "Ted Bundy"];
    // const check = murderer.includes("Jack");
    // const index = murderer.indexOf("Jack")
    // console.log(`Jack ${check} dengan index ${index}`);

//============================================================================================================================//

// REDUCE()
// untuk menambahkan semua element array jika dalam operasi number

    // SYNTAX : Array.reduce((total , element , index) => {
        // block code
    // }, initial value);

    // EXAMPLE :
    // const semesterValue = [90 , 88 , 92 , 89 , 83];
    // const average = semesterValue.reduce((total , Element) => total + Element)
    // console.log(average);

//============================================================================================================================//

// SHIFT() & UNSHIFT()
// shift() untuk menghapus element peratama array
// unshift() untuk menambahkan element di awal array

    // SYNTAX : Array.shift();
    // SYNTAX : Array.unshift(item1 , item2 , item2 , ...items);

    // EXAMPLE : 
    // const fruits = ['banana' , 'apple' , 'orange' , 'grape'];
    // console.log(fruits.shift());
    // fruits.unshift('water melon' , 'durian')
    // console.log(fruits);

//============================================================================================================================//

//SLICE() && SPLICE() 
// slice() untuk memotong suatu bagian array 
// splice() untuk menambah dan/atau menghapus elemen array

    // SYNTAX : Array.splice(index , many , ...items);
    // index mempresentasikan index element yang akan ditandai
    // many merepresentasikan berapa banyak yang akan dihapus setelah index yang ditandai
    // ...items merepresentasikan item yang akan ditambahkan setelah index yang ditandai

    // EXAMPLE : 
    // const furniture = ["table" , 'chair' , 'lamp' , 'freezer'];
    // furniture.splice(3 , 1 , 'door');
    // console.log(furniture)

//============================================================================================================================//

// FILL()
// fill() digunakan untuk mengisi semua elemnt array dengan index yang sama

    // SYNTAX : Array.fill(value , start , end)
    
    // EXAMPLE : 
    // const color = ['red' , 'green' , 'blue' , 'orange' , 'yellow'];
    // color.fill("black" , 0 , color.length)
    // console.log(color);

//============================================================================================================================//

// FROM () && TOSTRING()
// from() digunakan untuk menjadikan array
// tostring() digunakan untuk menjadikan string dari array

    // SYNTAX : Array.from(Variable);
    // variable adalah elemnt yang akan di tranform menjadi array

    // EXAMPLE : ;
    // const alfabhet = Array.from("ABCDEFGHIJ")
    // console.log(alfabhet)

//============================================================================================================================//

// FIND() && FINDINDEX()
// digunakan untuk mencari index pertama atau element pertama dari suatu seleksi

    // SYNTAX :
    // Array.find(( element , index)=> element < 10);
    // akan mereturn element yang kurang dari 10

//============================================================================================================================//

const x = [false , "string" , 100 , 'True' , true];
let boll = [] 
x.filter(filterBollean)

function filterBollean (e) {
    if (typeof e == "boolean") {
        boll.push(e)
    }
}
console.log(filterBollean);
console.log(boll)