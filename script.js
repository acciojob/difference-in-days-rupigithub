var dateDiffInDays = function (date1, date2) {
  //   write your code here
	   // Convert input strings to Date objects
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    
    // Calculate the difference in milliseconds
    const diffInMs = d2 - d1;
    
    // Convert milliseconds to days
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    return diffInDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
