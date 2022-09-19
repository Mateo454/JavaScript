
      /*  let texto = "Hola soy   ";
        const hablar = (texto)=>speechSynthesis.speak(new SpeechSynthesisUtterance(texto)) //Api para activar narrador de texto
        hablar(texto);
        console.log("Elementos del documento");
        console.log(window.document);
    console.log(document);
    console.log(document.head);
    console.log(document.body);
    console.log(document.documentElement);
    console.log(document.doctype);
    console.log(document.charset);
    console.log(document.title);
    console.log(document.links);
    console.log(document.images);
    console.log(document.forms);
    console.log(document.styleSheets);
    console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection().toString()); //Para seleccionar algo en el navegador e imprimirlo despues de que se active el settimeout
}, 2000);
document.write("<h2>Hola Mundo desde el DOM</h2>");//para sobre escribir en el documento 
 */

/*console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));//Reemplazo para los getElements para consultar por id 
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card")); por . selecciona por class o con el objeto classList
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));*/

/*console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));//Otra forma de consultar elementoshtml
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));//Forma correcta de consultar atributos

document.documentElement.lang = "en";//Cambiar valores atributos notacion de .
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");//cambiar los valores de los atributos ("Valor a que se desea cambiar" ,"Valor nuevo")
console.log(document.documentElement.lang)

const $linkDOM = document.querySelector(".link-dom");//el $ es buena practica para los links de html

$linkDOM.setAttribute("target", "_blank");//establece nuevos atributos
$linkDOM.setAttribute("rel", "noopener");//para evitar dependencias de ventana a la original para evitar algunos hacks
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");//Cabia los atributos
console.log($linkDOM.hasAttribute("rel"));//Has para saber si tiene el atributo
$linkDOM.removeAttribute("rel");//removeAttribute para eliminar atributos
console.log($linkDOM.hasAttribute("rel"));

//Data-Attributes
console.log($linkDOM.getAttribute("data-description"));//obtener por medio de la data
console.log($linkDOM.dataset);//obtener el data por medio del . y traer un arbol con las descripciones
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");//establecer nuevos valores
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscríbete a mi canal y comparte";//Establecer nuevos valores de otra forma
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id"));*/

/*

const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log(window.getComputedStyle($linkDOM));//para saber todas las propiedades de stylos css desde el objeto window
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));//consultar propiedades en especifico

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");//modificar por medio del metodo setproperty
$linkDOM.style.width = "50%"; //Modificar con la sintaxis de . el tamaño
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";


const $html=document.documentElement,
    $body=document.body;
//let varDarkColor = getComputedStyle($html) para acceder a x propiedad esta vez se accede a html

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
 varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

 console.log(varDarkColor,varYellowColor);

 $body.style.backgroundColor = varDarkColor;
 $body.style.color= varYellowColor;

 $html.style.setProperty("--dark-color","#000")//modificando el valor de la variable
 varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color")//modificando el valor de la variable

 $body.style.setProperty("background-color",varDarkColor) //modificando la propiedad desde la modificacion de la variable )*/

 /*const $card=document.querySelector(".card");

console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));//para saber si contiene o no contiene
$card.classList.add("rotate-45");//añadir clases 
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");//Si no tiene la clase la agrega si la tiene la elimina 
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");//Reemplaza la clase a reemplazar y la clase que sera agregada
$card.classList.add("opacity-80", "sepia");//Agregar varias clases separadas por comas
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");*/
/*

const $whatIsDOM = document.getElementById("que-es");

let text=`

<p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
</p>
<p>
Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
<mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>

`;

//$whatIsDOM.innerText = text; Creada para Explored para agregar contenido textual
/*$whatIsDOM.textContent = text;//Estandar para agregar contenido textual pero no renderiza html
$whatIsDOM.innerHTML = text; reemplaza o agrega texto renderizando html
$whatIsDOM.outerHTML = text;*///Este reemplaza tambien la etiqueta html y renderiza el texto html 

//DOM Traversing: Recorriendo el DOM por medio del nodo elementos del DOM 

/*const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);//ACCEDER A UN HIJO 
console.log($cards.children[2]);//ACCEDER A UN HIJO EN ESPECIFICO
console.log($cards.parentElement);//ACCEDER A EL PADRE  
console.log($cards.firstElementChild);//ACCEDER AL PRIMER NODO DE TIPO ELEMENTO
console.log($cards.lastElementChild);//ACCEDER AL ULTIMO ELEMENTO DE LOS NODOSS SIN LA PALABRA ELEMENT HACE REFERENCIA A LOS NODOS 
console.log($cards.previousElementSibling);//consultar el elemento anterior con el enlace
console.log($cards.nextElementSibling);//consultar el siguiente 
console.log($cards.closest("div"));//clotest busca el padre más cercano con la referencia que le mande 
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));*/
/*
const $figure = document.createElement("figure"), $img = document.createElement("img"),$figcaption = document.createElement("figcaption"),$figcaptionTex = document.createTextNode("Creacion Imagenes Dinamicas"),$cards = document.querySelector(".cards"),$figure2 = document.createElement("figure");

$figure.classList.add("card"); 
$img.setAttribute("src","https://placeimg.com/200/200/tech");
$img.setAttribute("alt","AltDinamica");



 




$figcaption.appendChild($figcaptionTex);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

//Forma de añadir por inner
$figure2.innerHTML =` 
  <img src="https://placeimg.com/200/200/people" alt="People">

  <figcaption>People innerHtml</figcaption>


`;
$figure2.classList.add("card");
$cards.appendChild($figure2);


const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});


const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

//Creacion por medio de fragmentos
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
],
$ul3 = document.createElement("ul"),//creacion html
$fragment = document.createDocumentFragment();//Creacion fragmento

meses.forEach((el) => {
const $li = document.createElement("li");
$li.textContent = el;
$fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);*/

//forma de consumir datos por fragmentos más optima que las demás

/*const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardsContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

  cardsContent.forEach((el) => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;
  
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
  });
  
  $cards.appendChild($fragment);
  
  
  
  forma vieja escuela
  
  const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2]);
//$cards.removeChild($cards.lastElementChild);
$cards.insertBefore($newCard, $cards.firstElementChild);
document.body.appendChild($cloneCards);*/