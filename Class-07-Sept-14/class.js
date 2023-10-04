// Synchronous Coding
function goToSchool() {
   console.log(`I missed the bus!`);
}

function code() {
   console.log(`I successfully coded all day!`);
}

console.groupCollapsed(`Synchronous Coding`);
goToSchool();
code();
// functions run in sequence
console.groupEnd();


// Callbacks
function growCorn() {
   setTimeout(() => {
      console.log(`Corn has been grown!`);
   }, 3000);
}

function waterCorn() {
   console.log(`Corn has been watered.`);
}

console.groupCollapsed("Callbacks");
growCorn();
waterCorn();
// since the first function will take time the second function runs while the first waits.
console.groupEnd();


// Promises

const someAPIRequest = {
   success: Math.random() * 5,
   data: 'Here is your data!',
};
// An API request is used to get data from a database.

const getDetails = new Promise((resolve, reject) => {
   if(someAPIRequest.success) {
      resolve(someAPIRequest.data);
   } else {
      reject(new Error('API Request Failed. Try again.'));
   }
});
// This is the structure for what our data will look like if it is successful or not

console.groupCollapsed("Promises");

getDetails.then((done) => {
   console.log("We are done here:", done);
}).catch((err) => {
   console.log("Houston, we have a problem:", err);
});
// This is tells it what to do if there is success or if there is an error.
console.groupEnd


// Async/Await

// Old school Way 
function useBoredAPI() {
   const data = fetch('http:/www.boredapi.com/api/activity/')
   .then((res) => {
      return res.json();
      // json (javascript object notation) returns an object
   })
   .then((data) => console.log("data: ", data))
   .catch((err) => console.log("err: ", err));
}
// can get messy if you have multiple ".then"

useBoredAPI();


// must write async before the keyword function to make it asynchronous
async function asyncBoredAPI() {
   try {
      const data = await fetch('http:/www.boredapi.com/api/activity/');
      // in this case data is a promise that will be fulfilled.
      const res = await data.json();
      // adding the keyword 'await' tells it that it needs to wait for that to finish before it continues 
      console.log("ASYNC/AWAIT: ", res);
   } catch (err) {
      console.log('err: ', err);
   }
}
// an async function returns a promise.

asyncBoredAPI();
