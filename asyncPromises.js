// promises

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

// async await

// console.log("person1: shows ticket");
// console.log("person2: shows ticket");

// const preMovie = async () => {
//     const promiseTicket = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//         resolve("ticket")
//         },3000)
//     });
//     const getPopCorn = new Promise((resolve, reject)=> resolve(`popcorn`));
//     const getButter = new Promise((resolve, reject)=> resolve(`butter`));
//     const getColdDrinks = new Promise((resolve, reject)=> resolve(`Beers`));

//     let ticket = await promiseTicket;

//     console.log(`wife: here is the ${ticket}..`)
//     console.log("husband: we should go in!")
//     console.log("wife: No, I'm feeling hungry..")
//     let popcorn = await getPopCorn;
//     console.log(`husband: I got you ${popcorn}..`)
//     console.log("husband: we should go in!")
//     console.log("wife: No, I need butter on my popCorns..")
//     let butter = await getButter;
//     console.log(`husband: here is your popcorn loaded with ${butter}..`)
//     console.log("husband: anthing else Sweetheart...")
//     console.log("wife: yes, I want cold-Drink..")
//     let colddrink = await getColdDrinks;
//     console.log(`husband: I got two ${colddrink}..`)
//     console.log("wife: let's go for the movie now..!")
//     console.log("husband: yeah!! ofCourse darling... thank you so much...!!")



//     return ticket;
// }

// preMovie().then((m)=>console.log(`person3: shows ${m}`));
// console.log("person4: shows ticket");
// console.log("person5: shows ticket");

// promise.all


// console.log("person1: shows ticket");
// console.log("person2: shows ticket");

// const preMovie = async () => {
//     const promiseTicket = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//         resolve("ticket")
//         },3000)
//     });
//     const getPopCorn = new Promise((resolve, reject)=> resolve(`Popcorn`));
//     const getCandy = new Promise((resolve, reject)=> resolve(`Candy`));
//     const getColdDrinks = new Promise((resolve, reject)=> resolve(`Coke`));

//     let ticket = await promiseTicket;

//     let[popcorn,candy,colddrink] = await Promise.all([getPopCorn,getCandy,getColdDrinks]);
//     console.log(`${popcorn}, ${candy}, ${colddrink}`);
//     return ticket;
// }


// preMovie().then((m)=>console.log(`person3: shows ${m}`));
// console.log("person4: shows ticket");
// console.log("person5: shows ticket");

const posts = [
    {title: "Post One", body:"This is post one", createdAt: new Date().getTime()},
    {title: "Post Two", body:"This is post two", createdAt: new Date().getTime()},
]
     

const creatPost = async (post)=>{
    const getPost = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let output = "";
            posts.forEach((post)=>{
                output+= `<li>${post.title}</li>`
            });
            resolve(document.body.innerHTML = output);
        },1000);
    });

    const creating = new Promise((resolve, reject)=>{
        posts.push(post);
        let error = false;

        if(!error){
            resolve();
        }else{
            reject("Error: Something went wrong Punit");
        }
    });

    // const deletePost = new Promise((resolve,reject)=>{
    //     posts.pop();
    //     if(posts.length>0){
    //         resolve
    //     }else{
    //         reject("Error: No Posts Found")
    //     }
    // });


    // let [creat,get] = await Promise.all([creating, getPost]);
    

}
creatPost({title: "Post Three", body:"This is post two"});
creatPost({title: "Post Four", body:"This is post two"});
