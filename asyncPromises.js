// console.log("person1: shows ticket");
// console.log("person2: shows ticket");

// const promiseTicket = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     resolve("ticket")
//     },3000)
// });

// const getPopCorn = promiseTicket.then((t)=>{
//     console.log("wife: here is the ticket..")
//     console.log("husband: we should go in!")
//     console.log("wife: No, I'm feeling hungry..")
//     return new Promise((resolve, reject)=> resolve(`${t} popcorn`))
// });
// const getButter = getPopCorn.then((t)=>{
//     console.log("husband: I got you popcorns..")
//     console.log("husband: we should go in!")
//     console.log("wife: No, I need butter on my popCorns..")
//     return new Promise((resolve, reject)=> resolve(`${t} butter`))
// });
// const getColdDrinks = getButter.then((t)=>{
//     console.log("husband: here is your popcorn loaded with butter..")
//     console.log("husband: anthing else Sweetheart...")
//     console.log("wife: yes, I want cold-Drink..")
//     return new Promise((resolve, reject)=> resolve(`${t} colddrink`))
// });

// getColdDrinks.then((t)=>console.log(t));
// console.log("person4: shows ticket");
// console.log("person5: shows ticket");

console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {
    const promiseTicket = new Promise((resolve, reject)=>{
        setTimeout(()=>{
        resolve("ticket")
        },3000)
    });
    const getPopCorn = new Promise((resolve, reject)=> resolve(`popcorn`));
    const getButter = new Promise((resolve, reject)=> resolve(`butter`));
    const getColdDrinks = new Promise((resolve, reject)=> resolve(`Beers`));

    let ticket = await promiseTicket;

    console.log(`wife: here is the ${ticket}..`)
    console.log("husband: we should go in!")
    console.log("wife: No, I'm feeling hungry..")
    let popcorn = await getPopCorn;
    console.log(`husband: I got you ${popcorn}..`)
    console.log("husband: we should go in!")
    console.log("wife: No, I need butter on my popCorns..")
    let butter = await getButter;
    console.log(`husband: here is your popcorn loaded with ${butter}..`)
    console.log("husband: anthing else Sweetheart...")
    console.log("wife: yes, I want cold-Drink..")
    let colddrink = await getColdDrinks;
    console.log(`husband: I got two ${colddrink}..`)
    console.log("wife: let's go for the movie now..!")
    console.log("husband: yeah!! ofCourse darling... thank you so much...!!")



    return ticket;
}

preMovie().then((m)=>console.log(`person3: shows ${m}`));
console.log("person4: shows ticket");
console.log("person5: shows ticket");
