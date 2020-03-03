// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// var name='Subash';

// if (true) {
//     var name='subbkxau';
    
    
// }
// alert(this.name);

// let fname='subash';
// let lname='N';
// let age= prompt("guess subash's age..");
//old way
// let result = fname + ' ' + lname + ' ' + age + ' years old';
// alert(result);
//using template string
// let result = `${fname} ${lname} is ${age} years old`;
// alert(result);

// function welcome(user="k xa", message="solti"){
//     alert(`hello ${user} ${message}`);
// }
// //  welcome('subash', 'good morning');
// welcome();

//arrow function
//  function greeting (message) {
//      return alert(`${message} everyone !!`);
//  }
// if no arguments are expected
//  let greeting = () => alert(`hello everyone!!`);
//   greeting('good morning');
//  if one arguments are expected
//  let greeting = message => alert(`${message} hello everyone!!`);
//   greeting('good morning');

//if two or more statement are there
// let createblog = (title, body) => {
//     if (!title) {
//         throw new Error('a title is missing');
//     }
//     if (!body) {
//         throw new Error('a body is requied');
        
//     }
//     return alert(`${title} - ${body}`);

// }
// createblog('blog title', 'blog body');

// Destructing objects
// let subashDon = {
//     kaa: "subbu",
//     yeiho: "haina",
//     tara: "soltee"

// };
// let {kaa, yeiho}= subashDon;
// console.log(kaa, '-', yeiho);

//Destructing functions
// let uniStudent = student => {
//     console.log(`${student.name} from ${student.university}`)
// };
// uniStudent({
//     name: 'ryan',
//     university: 'University of tu'
// });
//  now using Destructing 
// let uniStudent = student => {
//     let {name, university}= student;
//     console.log(`${name} from ${university}`)
// };
// uniStudent({
//     name: 'ryan',
//     university: 'University of KU'
// });
// another process of using destructing
let uniStudent = ({name, university}) => {
console.log(`${name} from ${university}`)
};
uniStudent({
    name: 'Bishow',
    university: 'University of Butwal'
});