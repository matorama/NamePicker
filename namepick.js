console.log("Hello World");

var x = "Yo, What's up?";

var wdiNames = [
		"Abe Menashy", "Alok Somani", "Austen Weinhart", "Austin Kim", "Austin Langley", "Carlos Cruz", 
		"Conrad Sze", "Daniel Dowling", "Fancy Moua", "Glenn Harris", "Gobind Tandon", "Jessica Grinberg", 
		"Joey Volpe", "Kath Magnuson", "Ksenia Smith", "Kyle Conkright", "Kyle Hurst", "Mathieu Fallows", 
		"Mikel Pacheco", "Nancy Ma", "Nicholas Mitchell", "Rushi Sinha", "Russ Dollinger", "Sarah Kruberg", 
		"Tiffany Lim", "Zack Gourley", "Curtis Ott", "Long Huynh", "Mike Woo", "Richard Luo", "Ted Burkow"];

function printNames() {
	for (var i = 0; i< wdiNames.length; i++) {
		console.log(wdiNames[i]);
	}
}

printNames();

//the following is mostly Blaise Thomas code, slightly adjusted by me, namely I used RGB
//instead of hex code for background colors.

  function namePicker(){
    //pick random numbers for color
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    //Name Picker
    //var namePick = wdi_15_names[Math.floor(Math.random() * wdi_15_names.length)];
    var namePick = wdiNames.splice(Math.floor(Math.random() * wdiNames.length), 1);
    

    //Print to DOM
    if (wdiNames.length > 1) {
      document.getElementById("picked-name").innerHTML = (namePick);
      document.getElementsByTagName("body")[0].style.backgroundColor = "rgb("+red +","+green +","+ blue + ")";
    } 
    else {
      document.getElementById("picked-name").innerHTML = ("Done");
    }
    //document.write(namePick);
    //document.getElementById("chosen_one").innerHTML = (namePick);
  } 
  