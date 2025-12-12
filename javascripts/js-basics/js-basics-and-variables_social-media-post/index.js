console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

// --v-- write your code here --v--
const title = "first post";
const textContent = "this is the first day of javascript";
let likesCount = 20;
const userName = "enayat";
const isReported = false;


// --^-- write your code here --^--

/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/
console.log("Title:", title)
console.log("Content:", textContent)
console.log("Like:", likesCount)
console.log("UserName",userName)
console.log("repordted: ",isReported)
// --v-- write your code here --v--
likesCount++
// --^-- write your code here --^--
console.log("UpdateLikes: ",likesCount)