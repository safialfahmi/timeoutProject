function ChangeColor()
{
var v = document.getElementById("formID");
            v.style.backgroundColor = "#8F3A4E59";
 
}
function ChangeColor1()
{
var v = document.getElementById("formID1");
            v.style.backgroundColor = "#8F3A4E59";
 
}
function ChangeColor2()
{
var v = document.getElementById("formID2");
            v.style.backgroundColor = "#8F3A4E59";
 
}
function ChangeColor3()
{
var v = document.getElementById("formID3");
            v.style.backgroundColor = "#8F3A4E59";
 
}
function ChangeColor4()
{
var v = document.getElementById("formID4");
            v.style.backgroundColor = "#8F3A4E59";
 
}
function ChangeColor5()
{
var v = document.getElementById("formID5");
            v.style.backgroundColor = "#8F3A4E59";
 
}
function ChangeColor6()
{
var v = document.getElementById("formID6");
            v.style.backgroundColor = "#8F3A4E59";
 
}
function ChangeColor7()
{
var v = document.getElementById("formID7");
            v.style.backgroundColor = "#8F3A4E59";
 
}
function ChangeColor8()
{
var v = document.getElementById("formID8");
            v.style.backgroundColor = "#8F3A4E59";
 
}
function ChangeColor9()
{
var v = document.getElementById("formID9");
            v.style.backgroundColor = "#8F3A4E59";
 
}
function ChangeColor10()
{
var v = document.getElementById("formID10");
            v.style.backgroundColor = "#8F3A4E59";
 
}
function ChangeColor11()
{
var v = document.getElementById("formID11");
            v.style.backgroundColor = "#8F3A4E59";
 
}
function ChangeColor12()
{
var v = document.getElementById("formID12");
            v.style.backgroundColor = "#8F3A4E59";
 
}
function ChangeColor13()
{
var v = document.getElementById("formID13");
            v.style.backgroundColor = "#8F3A4E59";
 
}
function ChangeColor14()
{
var v = document.getElementById("formID14");
            v.style.backgroundColor = "#8F3A4E59";
 
}
function ChangeColor15()
{
var v = document.getElementById("formID15");
            v.style.backgroundColor = "#8F3A4E59";
 
}



    function addfav(){
             var button = document.querySelectorAll(".addfav");
            var like = document.querySelectorAll(".like");
              var button2=document.getElementById("fav");
          
           count=0;
         button[0].onclick=function(){
            count+=1;
              button2.style.background="#ffb3b3";
            button2.innerHTML="favorates: "+count;
         like[0].src="../images/redheart.png"; /* i took this code of changing the img from w3school*/
            add1( button[0].value);}
         
            button[1].onclick=function(){
            count+=1;
            button2.style.background="#ffb3b3";
            button2.innerHTML="favorates: "+count;
          add1( button[1].value);
                 like[1].src="../images/redheart.png";
          }
            
            button[2].onclick=function(){
            count+=1;
             button2.style.background="#ffb3b3";
            button2.innerHTML="favorates: "+count;
          add1( button[2].value);
            like[2].src="../images/redheart.png";
          }
            
               button[3].onclick=function(){
            count+=1;
            button2.style.background="#ffb3b3";
            button2.innerHTML="favorates: "+count;
             
          add1( button[3].value);
           like[3].src="../images/redheart.png";}
            
               button[4].onclick=function(){
            count+=1;
              button2.style.background="#ffb3b3";
            button2.innerHTML="favorates: "+count;
           
          add1( button[4].value);
           like[4].src="../images/redheart.png";}
               
                 button[5].onclick=function(){
            count+=1;
              button2.style.background="#ffb3b3";
            button2.innerHTML="favorates: "+count;
           
          add1( button[5].value);
           like[5].src="../images/redheart.png";}
                 
                   button[6].onclick=function(){
            count+=1;
              button2.style.background="#ffb3b3";
            button2.innerHTML="favorates: "+count;
           
          add1( button[6].value);
           like[6].src="../images/redheart.png";}
             
             button[7].onclick=function(){
            count+=1;
             button2.style.background="#ffb3b3";
            button2.innerHTML="favorates: "+count;
         
          add1( button[7].value);
           like[7].src="../images/redheart.png";}
             
               button[8].onclick=function(){
            count+=1;
              button2.style.background="#ffb3b3";
            button2.innerHTML="favorates: "+count;
                
          add1( button[8].value);
           like[8].src="../images/redheart.png";}
               
             button[9].onclick=function(){
            count+=1;
              button2.style.background="#ffb3b3";
            button2.innerHTML="favorates: "+count;
               
          add1( button[9].value);
           like[9].src="../images/redheart.png";}
             
            button[10].onclick=function(){
            count+=1;
            button2.style.background="#ffb3b3";
            button2.innerHTML="favorates: "+count;
             
          add1( button[10].value);
           like[10].src="../images/redheart.png";}
            
            button[11].onclick=function(){
            count+=1;
              button2.style.background="#ffb3b3";
            button2.innerHTML="favorates: "+count;
          
          add1( button[11].value);
           like[11].src="../images/redheart.png";}
            
             button[12].onclick=function(){
            count+=1;
              button2.style.background="#ffb3b3";
            button2.innerHTML="favorates: "+count;
             
          add1( button[12].value);
              button2.style.background="#ffb3b3";
           like[12].src="../images/redheart.png";}
    }

        
          function add1(val){
  var node = document.createElement("LI");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("menue").appendChild(node);
}

    

	
	function isBlank(inputField){
	
    if (inputField.value==""){
	return true;
    
    }
    return false;
}

function borderRed(inputDiv){
   	inputDiv.style.border="solid 1pt red";
	
    
}
function Clean(inputDiv){
	inputDiv.style.border="auto";
}

window.onload = function(){
   
    var Form = document.getElementById("Form");
    var requiredInputs = document.querySelectorAll(".required");
    Form.onsubmit = function(e){
	for (var i=0; i < requiredInputs.length; i++){
	    if( isBlank(requiredInputs[i]) ){
		e.preventDefault();
		borderRed(requiredInputs[i]);
	    }
	    else{
		Clean(requiredInputs[i]);
	    }
	}
      
       
		 if(requiredInputs[0].value==""||requiredInputs[1].value==""){
			return
		 }
		
           return alert("welcome: "+requiredInputs[0].value);
	 }
    }
   
   
   
   function date(){

document.getElementById('date').innerHTML = Date();}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	