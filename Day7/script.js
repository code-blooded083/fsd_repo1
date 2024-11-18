// let num=[1,2,3,4,45,5,45];
// let newnum=num.map(x=>x*2);
// console.log(newnum)
// let evennum=num.filter(x=>x%2==0);
// console.log(evennum)
// let sum=num.reduce((x,y)=>x+y,0);
// console.log(sum);
// const students=[{name: 'alice', score: 50},
// {name: 'bob', score: 65},
// {name: 'charlie', score: 80},
// {name: 'david', score: 45},
// {name: 'rahul', score: 50}]
// let scores=students.map(x=>x.score).reduce((x,y)=>x+y,0);
// console.log(scores);
// let scores2=students.map(x=>x.score).filter(x=>x>60).reduce((x,y)=>x+y,0);
// console.log(scores2);
// let scores3=students.filter(x=>x>60).map((x)=>x.score+10).reduce((x, y)=>x+y,0);
// console.log(scores3);
// let num=[12,3,3,4,4,4,4,98];
// let arr=num.forEach((x)=>console.log(x*3))
// sayhello=()=>{
// console.log("i am in hello function");
// }
// console.log("start");
// setTimeout(sayhello, 3000);
// console.log("end");
console.log("start");
setTimeout(()=>{
    console.log("first task");
    setTimeout(()=>{
        console.log("second task");
        setTimeout(()=>{
            console.log("third task");
        },3000);
    }, 2000);
}, 1000);
console.log("end")
       

