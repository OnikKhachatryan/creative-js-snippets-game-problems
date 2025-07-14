// a.innerHTML="<mark>barev</mark>"
// a.innerText="barev"


// function f(){
// a.style.color="red"

// }

// a.style.width="100px"
// a.style.height="100px"
// a.style.border="1px solid" 
// var num = 0
// function f(){ 

// if(num%2==0){
// 	a.style.display="block"
// }	else{
// 	a.style.display="none"
// }
// num++
// }


// function f() {
// 	var x = b.value
// 	var y = c.value	
// 	a.style.width=x+"px"
// 	a.style.height=y+"px"
// 	a.style.border="1px solid"
// 	console.log(x,y)
// }



/////////////////////////////////////////INPUTI MEJI TVI QANAKOV SARQI DIV-ER	////////////////////////////////////////	

// function f() {
// 	var x = b.value
// 	for (var i = 0; i < x ; i++) {
		
		
		
// 		document.write("<div style='width:100px; height:100px; border:1px solid'></div>")
// 	}
	
// }


     			      ////HOMEWORK


//1) unenal input tiv grel et tr tdov table sarqi
//2) unenal 2 input meky divi widthy heighty myusy guyny
//3) unenal input tiv grel et qanakov diver sarqi amen vandaky tarber guyn


////1)UNENAL INPUT TIV GREL ET TR TD-OV TABLE SARQI
// //////////////////PROBLEM 1 SOLVING ////////////////////


// function f() {
// 	var x = b.value
// document.write("<table width='200px' height='200px' border='1px'>")
//   for (var i = 0; i <x; i++) {
//     document.write("<tr>")
//       for (var  j= 0; j <x; j++) {
//         document.write("<td>"+i+","+j+"</td>")
//       }
//     document.write("</tr>")
//   }
// document.write("</table>")
	
// }


//2) UNENAL 2 HAT INPUT MEKY DIV-I HEIGHT U WIDTH LINI MYUSY GUYN
//////////////////PROBLEM 2 SOLVING ////////////////////
		
	
 

// function f() {
  
//   // var k = document.getElementById("c").value;
//   // var l = document.getElementById("h").value;
// 	var k=c.value
// 	var l=h.value

 
//   var newDiv = document.createElement("div");

//   newDiv.style.width = k + "px";
//   newDiv.style.height = k + "px";
//   newDiv.style.backgroundColor = l;
//   newDiv.style.border = "1px solid black"; 

//   document.body.appendChild(newDiv);
// }






//3) GREL INPUT ET TVOV DIVER SARQI AMEN MEKY TARBER GUYNI
//////////////////PROBLEM 3 SOLVING ////////////////////

// function f(){

//  var x=document.getElementById("a").value;
//  for (var i = 0; i < x; i++) {
//  	 var r=Math.round(Math.random()*255)
//  	 var g=Math.round(Math.random()*255)
//  	 var b=Math.round(Math.random()*255)
//  	document.write("<div style='width:100px; height:100px; background:rgb("+r+","+g+","+b+"); border:1px solid; float:left; '></div>")
//  }

// }
////////////////////////////////////////////////////////////





// var div = document.createElement("div")
// div.style.width="100px"
// div.style.height="100px"
// div.style.border="1px solid"

// document.body.appendChild(div)

// var h1 = document.createElement("h1")
// h1.innerHTML="barev"
// div.appendChild(h1)


//TUNNEL//
////////////////////////////////// CREATING TUNNEL WITH DIVS ///////////////////////////
// function f(){
// 	var i=Math.round(Math.random()*200)
// 	var div=document.createElement("div")
// 	div.style.width=i+"px"
// 	div.style.height=i+"px"
// 	div.style.border="1px solid"
// 	div.style.margin=i+"px"
// 	div.style.position="absolute"
// 	document.body.appendChild(div)
// 	}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//TARBER CHAPI TARBER TEXERUM DIV-ER
////////////////// CLICK TO CREATE RANDOM COLORED DIVS ////////////////////

// function f(){

// 	var r = Math.round(Math.random()*255)  
// 	var g = Math.round(Math.random()*255)
// 	var b = Math.round(Math.random()*255)

// 	var l = Math.round(Math.random()*1800)
// 	var t = Math.round(Math.random()*600)
// 	var w = Math.round(Math.random()*300)
// 	var div=document.createElement("div")
// 	div.style.width=w+"px"
// 	div.style.height=w+"px"
// 	div.style.border="1px solid"
// 	div.style.position="absolute"
// 	div.style.left=l+"px"
// 	div.style.top=t+"px"
// 	div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// 	document.body.appendChild(div)
// 	}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCTION VORY KTPI IRAR MEJ QARAKUSINER IRARIC AMEN MEKY MI POQR POQR 
////////////////// CLICK TO CREATE NESTED SQUARES (meky myusi mej aveli poqr kuber) ////////////////////

// 	var home = document.createElement("div")
// 	home.style.width="500px"
// 	home.style.height="500px"
// 	home.style.border="1px solid"
// 	home.style.display="flex"
// 	home.style.justifyContent="center"
// 	home.style.alignItems="center"
// 	document.body.appendChild(home)
	
// 	var w = 490
// function f(){
// 	var div=document.createElement("div")
// 	div.style.width=w+"px"
// 	div.style.height=w+"px"
// 	div.style.border="1px solid"
// 	div.style.position="absolute"
// 	home.appendChild(div)
// 	w-=10
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////INCH GRES FUNCTION-I MEJ HERTOV TPI BODY-I MEJ IRAR TAK
////////////////// ADD PARAGRAPH (inputi texty tpi body-um) ////////////////////

// function f(){
// 	var x=a.value
// 	var p=document.createElement("p")
// 	p.innerHTML=x
// 	document.body.appendChild(p)
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 
//UNENAL 2 DIV VORONC HAMAR ASHXATI MEK FUNCKCIAN AYSINQ INCH GRES FUNKCIAYI MEJ ANI 2 DIVI HAMAR EL NUYN BANY AMEN ANGAM
////////// CLICK TO CREATE NESTED SQUARES with random colors(meky myusi mej aveli poqr kuber) ////////////////////

// function f(container) {
//   var div = document.createElement("div");
//   div.style.width = w + "px";
//   div.style.height = w + "px";
//   div.style.border = "1px solid";
//   div.style.position = "absolute";

//   	var r = Math.round(Math.random()*255)  
// 	var g = Math.round(Math.random()*255)
// 	var b = Math.round(Math.random()*255)
//   div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

//   	container.appendChild(div);
// 	  w -= 10;
// }

// 	var w = 490;


// var ahome = document.createElement("div");
// ahome.textContent = "privet";
// ahome.style.width = "500px";
// ahome.style.height = "500px";
// ahome.style.border = "1px solid";
// ahome.style.display = "flex";
// ahome.style.justifyContent = "center";
// ahome.style.alignItems = "center";
// document.body.appendChild(ahome);

// var bhome = document.createElement("div");
// bhome.textContent = "privet";
// bhome.style.width = "500px";
// bhome.style.height = "500px";
// bhome.style.border = "1px solid";
// bhome.style.display = "flex";
// bhome.style.justifyContent = "center";
// bhome.style.alignItems = "center";
// document.body.appendChild(bhome);



// d.addEventListener("click", function () {

//   f(ahome);
//   f(bhome);
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////// CLICK TO CREATE RANDOM COLORED KUBS FOR ONE DIV WHICH AUTOMATICALLY DO THE SAME FOR CLONE DIV ///////////


// var home = document.createElement("div");
// home.style.width = "1000px";
// home.style.height = "500px";
// home.style.border = "1px solid";
// home.style.display = "flex";
// home.style.justifyContent = "center";
// home.style.alignItems = "center";
// document.body.appendChild(home);


// var ahome = document.createElement("div");

// ahome.style.width = "500px";
// ahome.style.height = "500px";
// ahome.style.border = "1px solid";
// ahome.style.display = "flex";
// ahome.style.justifyContent = "center";
// ahome.style.alignItems = "center";
// ahome.style.position = "relative";
// home.appendChild(ahome);

// var bhome = document.createElement("div");

// bhome.style.width = "500px";
// bhome.style.height = "500px";
// bhome.style.border = "1px solid";
// bhome.style.display = "flex";
// bhome.style.justifyContent = "center";
// bhome.style.alignItems = "center";
// bhome.style.position = "relative";

// home.appendChild(bhome);


// var num=0
// function f(container) {
//   var div = document.createElement("div");
//   var w = Math.round(Math.random()*400)
//   var l = Math.round(Math.random()*400)


//   div.style.width = "100px";
//   div.style.height = "100px";
//   div.style.border = "1px solid";
//   div.style.position = "absolute";
//   div.style.left=w+"px"
//   div.style.top=l+"px"
//   	var r = Math.round(Math.random()*255)  
// 	var g = Math.round(Math.random()*255)
// 	var b = Math.round(Math.random()*255)
//   div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

// if(num%2==0){
// 	ahome.appendChild(div)
// }	else{
// 	bhome.appendChild(div)
// }
// num++

// }




// d.addEventListener("click", function () {
  
//   f(ahome);
//   f(bhome);
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////WRITE IN THE BODY ENTERED TEXT ON BLUE OR RED///////////////////////////
// var num=0
// function f(){
// 	var x=a.value
// 	var p=document.createElement("p")
// 	p.innerHTML=x
// 	document.body.appendChild(p)
// 	if(num%2==0){
// 	p.style.backgroundColor="red"
// }	else{
// 	p.style.backgroundColor="blue"
// }
// num++
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////EVERY 1 SECOND, CREATE RANDOM-SIZED & RANDOM-POSITION CUBS///////////////////////////

// setInterval(function(){
// var l=Math.round(Math.random()*500)
// var w=Math.round(Math.random()*500)
// var div = document.createElement("div")
// div.style.height=w+"px"
// div.style.width=w+"px"
// div.style.border="1px solid"
// div.style.position = "absolute";
// div.style.left=w+"px"
// div.style.top=l+"px"
// document.body.appendChild(div);

// },1000)



// var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// var i = 0;

// setInterval(function () {
//     if (i < x.length) {
//         document.write(x[i]);
//         i++;
//     }
// }, 1000);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


					////SHARJVOX PATKER DIV-I MEJ



// var home= document.createElement("div")
// home.style.width="500px"
// home.style.height="500px"
// home.style.border="1px solid"
// home.style.position = "relative";
// document.body.appendChild(home)

// var div= document.createElement("div")
// div.style.width="100px"
// div.style.height="100px"
// div.style.border="1px solid"
////div.style.left = Math.floor(Math.random() * 900) + "px"; 
////div.style.top = Math.floor(Math.random() * 400) + "px";
// div.style.position="absolute"
// home.appendChild(div)

// var l = 0
// setInterval(function(){
// if(l<400){
// 	div.style.left=l+"px"
// 	l++
// }
// },10);


//NO NEED HTML

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


							/////////HECANIV QSHOX MARDY





var divmec= document.createElement("div")
divmec.style.width="250px"
divmec.style.height="250px"
divmec.style.border="0px solid"
divmec.style.position="relative"
document.body.appendChild(divmec)


var mard= document.createElement("div")
mard.style.width="150px"
mard.style.height="150px"
mard.style.border="0px solid"
mard.style.position="absolute"
mard.style.background="url(b.png)"
mard.style.backgroundSize="100% 100%"
mard.style.left="20px"
mard.style.bottom="130px"
divmec.appendChild(mard)


var div= document.createElement("div")
div.style.width="250px"
div.style.height="250px"
div.style.border="0px solid"
div.style.background="url(a.png)"
div.style.backgroundSize="100% 100%"
div.style.position="absolute"
divmec.appendChild(div)



var l = 0
setInterval(function(){
if(l<900){
	divmec.style.left=l+"px"
	l++
}
},10);


var ak1 = document.createElement("div");
ak1.style.width = "60px";
ak1.style.height = "60px";
ak1.style.border = "20px solid orange";
ak1.style.borderRadius = "50%";
ak1.style.position = "absolute"; 
ak1.style.bottom = "50px";
ak1.style.display="flex"
ak1.style.justifyContent="center"
ak1.style.alignItems="center"
div.appendChild(ak1);

var gic=document.createElement("div")
gic.style.width = "5px";
gic.style.height = "50px";
gic.style.background = "orange";
ak1.appendChild(gic);

var ak2 = document.createElement("div");
ak2.style.width = "60px";
ak2.style.height = "60px";
ak2.style.border = "20px solid orange";
ak2.style.borderRadius = "50%";
ak2.style.position = "absolute"; 
ak2.style.bottom = "50px";
ak2.style.left="150px"
ak2.style.display="flex"
ak2.style.justifyContent="center"
ak2.style.alignItems="center"
div.appendChild(ak2);


var giccc=document.createElement("div")
giccc.style.width = "5px";
giccc.style.height = "50px";
giccc.style.background = "orange";
ak2.appendChild(giccc);

var k = 0
setInterval(function(){
if(k<1800){
	ak1.style.rotate=k+"deg"
	k++
}
},10);


var k = 0
setInterval(function(){
if(k<1800){
	ak2.style.rotate=k+"deg"
	k++
}
},10);



