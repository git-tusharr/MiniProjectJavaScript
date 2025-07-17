let rollDice = () => {
  let box1 = document.querySelector(".box1");
  let box2 = document.querySelector(".box2");
  let box3 = document.querySelector(".box3");
  let box4 = document.querySelector(".box4");
  let box5 = document.querySelector(".box5");
  let box6 = document.querySelector(".box6");
  let rollingGif = document.querySelector(".rolling");

  box1.style.display = "none";
  box2.style.display = "none";
  box3.style.display = "none";
  box4.style.display = "none";
  box5.style.display = "none";
  box6.style.display = "none";


  rollingGif.style.display = "block";

 
  let number = Math.floor(1 + Math.random() * 6);
  console.log("Random number: " + number);

  setTimeout(() => {
    rollingGif.style.display = "none";

    if (number == 1) {
      box1.style.display = "block";
    } 
    
    else if (number == 2) {
      box2.style.display = "block";
    } 
    
    else if (number == 3) {
      box3.style.display = "block";
    } 
    
    else if (number == 4) {
      box4.style.display = "block";
    }
    
    else if (number == 5) {
      box5.style.display = "block";
    } 
    
    else if (number == 6) {
      box6.style.display = "block";
    }

  }, 5000); 
};
