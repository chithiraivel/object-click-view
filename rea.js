
// import {person} from "./rea1.js"

// let a=true;
// function only(){

//     return new Promise( (resolve,reject) =>{

//         if(a){
//             resolve();
//             only2();
//         }
//         else{
//             reject()
//         }
//     })
// }

// function only2(){

//     return new Promise( (resolve,reject) =>{

//         if(a){
//             resolve();
//             console.log('hiii');
//         }
//         else{
//             reject()
//         }
//     })
// }

// only()
// .then( () => {
//     console.log('success');
// })
// .then(only2)
// .catch( () => {
//     console.log('err');
// })




// function one() {

// return new Promise( ( resolve , reject) => {
//     setTimeout( () => {
//         console.log('first');
//         resolve()
//     },3000)
// })
// }


// function two() {
//     console.log('second');
// }


//  async function three() {

//     await one();
//     two();
// }
// three()


// var p1 = new Promise( (resolve,reject) => {
//     resolve(20)
// })

// var p2 = new Promise( (resolve,reject) => {
//     resolve(30)
// })

// var p3 = new Promise( (resolve,reject) => {
//     resolve(40)
// })

// var p4 = new Promise( (resolve,reject) => {
//     reject(60)
// })

// Promise.all([p1,p2,p3,p4]).then( (data) => {

//     const total = data.reduce( (acc , cum) => {

//         return acc+cum;
//     })

//     console.log(total);
// })
// .catch( (d) => {
//     console.log('not executed ' + d);
// })

// var x = [1,2,3,4]
// var y = [...x];
// x[1] =6;
// console.log(x,y);

const person = [

    {
        Name: 'vel',
        age: 24,
        id:1
    },

    {
        Name: 'rahul',
        age: 24,
        id:2

    },

    {
        Name: 'muthu',
        age: 24,
        id:3

    },

    {
        Name: 'leo',
        age: 24,
        id:4

    },
    {
        Name: 'mari',
        age: 24,
        id:5
    },

    {
        Name: 'alphanse',
        age: 24,
        id:6
    }
]
let input = document.querySelector('#input');
let btn = document.querySelector('#btn')
let show = document.querySelector('#show')
let remove1 = document.querySelector('#remove1')

var a1 = [];


btn.addEventListener('click', () => {
  
    var input1 = input.value;
    a1.push(input1);
});

var b1 = []; 
show.addEventListener('click' , () => {

    for (let i = 0; i < a1.length; i++) {

        if (a1.indexOf(a1[i]) == i) {
            b1.push(a1[i])

            person.forEach(function info(data) {

                if (a1[i] == data.id ) {
                    console.log(data);
                }
            })
        }
    }
})

remove1.addEventListener('click' , () => {

    a1.pop(input)  
     
})
