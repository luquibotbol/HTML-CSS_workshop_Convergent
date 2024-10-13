// script.js

// Function to change the text when button is clicked
function changeText() {
  document.getElementById("myParagraph").innerText = "You clicked the button!";
  window.location.href = "why.html";
}

function placeImage(x)
{
    var div = document.getElementById("div_picture_right");

    div.innerHTML = ""; // clear images
    document.getElementById("headerrr").innerText = "Get trolled loser";
    for (counter=1;counter<=x;counter++) {
        var imagem=document.createElement("img");
        imagem.src="image.png";
        imagem.width = "195";
        imagem.height = "390";
        div.appendChild(imagem);
    }
    var para = document.createElement("p");
    para.innerText = "You can't go back now ://///////////";
    document.getElementById("here").appendChild(para);
    var elem = document.getElementById('dummy');
    elem.parentNode.removeChild(elem);
}


