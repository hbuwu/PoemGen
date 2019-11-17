function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1].replace("+"," ");}
       }
       return(false);
}

let myParagraph = document.querySelector("p");

if (myParagraph) {
	myParagraph.innerHTML = getQueryVariable('word1') + " " + getQueryVariable('word2') + " " + getQueryVariable('word3') + " " + getQueryVariable('word4') + " " + getQueryVariable('word5') + " " + getQueryVariable('word6') + "?";
}

