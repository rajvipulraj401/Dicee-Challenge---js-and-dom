 /* FIRSt check if js is link in html or not for THAT we can simply
  put an alert and see if it is working or not  like .
     alert("working");*/

var randomNumber1 =Math.floor(Math.random()*6)+1; // no from 1 to 6
var randomNumber2 =Math.floor(Math.random()*6)+1;

// NOTE - i cannot use Math.round here because when i ddo
/* Math.random from 0 to 6 i can get numbers like 0.53 or 0.32 so when i will round it up
 it will become 0 so here i will use math.floor instead . and Then add +1 */

// setting the random number value from 1 to 6
// use Math.


// NOw i want to change the images as of randome number so that
/*  shows different images as of the random number
  step 1- for this we need to change the attribute direction
  step 2 - and showw different image as of the random number .*/
document.querySelector(".img1").setAttribute("src" ,"images/dice" +randomNumber1 +".png");
document.querySelector(".img2").setAttribute("src" ,"images/dice" +randomNumber2 +".png");

  /* HERE WE ARE  WHAT WE WANT to change and then , WHO WE want to change it width
    step 1- what we want to change - source of image .
    step 2 - who we want to change it with the source of images which i have copied in folder with .
    step 3 - in who we want to change we have made the name of images as
    step 4 - dice1.png , dice2.png so we JUST NEED TO PUT THE LOCATION OF
     STEP 5 - FOLDER  AND THEn concatenate the variable name randomNumber1 where we have stored the
      value of all the random numbers we are getting and then at last concatenate and add the extension of .png files in
       that way we would be able to add different source images .


 /* step 1 - first check in get attribute in the console that
   whether the oringinal src is being pointed at or not .

   document.querySelector("img").getAttribute("src");

  step 2- then use setAttribute to point it to different location .


*/

 if (randomNumber1> randomNumber2){
   document.querySelector("h1").innerHTML = "🚩Player 1 Winner!";
}
else if(randomNumber2> randomNumber1){
  document.querySelector("h1").innerHTML ="🚩Player 2 Winner";
}
else {
    document.querySelector("h1").innerHTML ="DRAW!!";
}
// we have to pass the value as a string
