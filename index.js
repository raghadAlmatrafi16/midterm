document.querySelector('button').addEventListener("click",ThrowRandom);
var colors = ['Red', 'Orange', 'Yellow', 'Green', 'brown', 'Blue', 'White', 'Gray', 'Pink'];
var numbers = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9'];

function ThrowRandom(){
  var rand1;
  for (i=0; i < 9; i++){
      var rand1 = Math.random();
      rand1 = rand1*10;
      rand1 = Math.floor(rand1)+1;
      randomNumbers.push(rand1);
  }
  //alert(randomNumbers);

  for (j=0; j < randomNumbers.length; j++){
    document.getElementByClassName("numbers[j]").textContent = randomNumbers[j];
    document.getElementByClassName("numbers[j]").style.backgroundColor = colors[randomNumbers[j]];
  }
}

document.getElementByTagName("td").addEventListener("mouseover",disappear);


function disappear(){
  if(){

  }

  alert("the order in which the numbers disappeared is: ");
}
