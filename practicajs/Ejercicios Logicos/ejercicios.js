     //función que cuenta el número de caracteres de una cadena de texto, pe. miFuncion("Cadena de texto") devolverá 10.
     const funcionContar = (palabra)=>
     (palabra!=null)
     ?console.info(`La cadena "${palabra}" tiene ${palabra.length} caracteres`)
     :console.warn("No existe ninguna cadena");
     funcionContar("Prueba cadena de texto enviada");

  
      //función que te devuelve el texto recortado según el número de caracteres indicados, pe. miFuncion("Cadena de texto", 4) devolverá "Hola".
     const extraer=(palabra1="",longitud=undefined)=>(!palabra1)
     ? console.warn("No se ingreso una cadena de texto")
     :(!longitud)
     ? console.warn("No ha ingresado una longitud")
     : console.info(palabra1.slice(0,longitud));
     

     extraer("prueba cadena de texto enviada",4);





     //3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
      let dividir=(palabra2="Hola ")=>{
          console.log(palabra2.split(" "));
          
      };
      dividir();
     //4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

     let repetir=(palabra3='Hola mundo ')=>{
      console.log(palabra3.repeat(5));
     };

     repetir();

     //5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

     const revertir=(cadena="")=>
     (!cadena)
     ?console.warn("Error cadena vacia")
     :console.info(cadena.split("").reverse().join(""));

     revertir("cadenas");




     //6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
     const textoEnCadena=(cadena="",texto="")=>{
      if (!cadena) return console.warn("No se ingreso una palabra a evaluar");
      if (!texto) return console.warn("No se ingreso un texto largo");
      
      let i=0, 
      contador=0;

      while(i!==-1){
          i=texto.indexOf(cadena,i);
          if(i!==-1){
              i++;
              contador++;
          }
      }
      return console.info(`La palabra ${cadena} se repite ${contador} veces`);

      }

      textoEnCadena("mundo", "Hola mundo adios mundo");
     
     //7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
      const palindromo = (palabra="")=>{
          if (!palabra)return console.warn("No se ingreso ninguna frase o palabra");
          palabra= palabra.toLocaleLowerCase();
          let alReves = palabra.split("").reverse().join("");
          
          return(palabra===alReves)
          ? console.info(`La palabra es Palindroma: texto= ${palabra} al reves es= ${alReves} `)
          : console.error(`La palabra ${palabra} No es palindroma`);
      }

      palindromo("Salaslas");

     //8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
      const eliminarCaracteres = (texto="",patron="")=>
      (!texto)
      ?console.error("No ingreso un texto")
      :(!patron)
        ?console.error("No ingreso un patron")
        :console.info(texto.replace(new RegExp(patron,"ig"),""));//Expresion regular para buscar coincidencias i para no distinguir mayusculas o minusculas g para no solo parar en la primer coincidencia
      ;

      eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

    // 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
      const aleatorio = ()=>{console.info((Math.random()*100)+500)};

      aleatorio();

    //10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
      const capicua=(numero=0)=>{
       if(!numero) return console.warn("No se ingreso numero");
       if(typeof numero ==! "number")return console.error(`El valor ${numero} no es un numero`);//para validar el tipo de dato que sea numero
       numero=numero.toString();
      let alReves= numero.split("").reverse().join("");
       return (numero===alReves)
       ?console.info("Si es capicua")
       :console.info(`No es capícua, Numero original ${numero}, Numero al reves ${alReves}`)
      };

    //11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
      const factorial =(numero=undefined)=>{
          if(!numero)return console.warn("No ingreso un numero");
          if(typeof numero ==! "number")return console.error(`El valor ${numero} no es un numero`);//para validar el tipo de dato que sea numero
          if(numero===0)return console.error("El numero no puede ser 0");
          if (Math.sign(numero)===-1)return console.log("El numero no puede ser negativo")

          let factorial=1;

          for(let i=numero;i>1;i--){
              factorial*=i;

          };

          return console.info(`El factorial de ${numero} es= ${factorial}`);
      };





      //12Programa una funcion para saber si un numero es primo o no

      const primo = (numero=undefined)=>{
          if(!numero)return console.warn("No ingreso un numero");
          if(typeof numero ==! "number")return console.error(`El valor ${numero} no es un numero`);//para validar el tipo de dato que sea numero
          if(numero===0)return console.error("El numero no puede ser 0");
          if(numero===1)return console.error("El numero no puede ser 1");
          if (Math.sign(numero)===-1)return console.log("El numero no puede ser negativo")

          let divisible = false;

          for(let i=2; i< numero ; i++){
              if((numero%i)===0){
                  divisible=true;
                  break;

              }


          };
           return (divisible)?console.log(`El numero ${numero} No es primo`):console.log(`El numero ${numero} Es Primo`);
      }
      primo(7);

      //13 Calcular si un numero es par o impar

      const numeroPar=(numero=undefined)=>{
          if(!numero)return console.warn("No ingreso un numero");
          if(typeof numero ==! "number")return console.error(`El valor ${numero} no es un numero`);//para validar el tipo de dato que sea numero

          return((numero%2)===0)?console.log(`El numero ${numero} es PAR`):console.log(`El numero es IMPAR`);
      }

      numeroPar(50);

      //14 programar una funcion para convertir grados Celcius a Fahrenheit y vicebersa

      const convertirGrados = (grados=undefined,unidad=undefined)=>{
          if(grados===undefined)return console.log('No ingresaste un numero   ')
          if(typeof grados !=="number")return console.log('Los grados a convertir no son un numero')

          if(unidad===undefined)return console.log('No se ingreso un numero de Unidades')
          if(typeof unidad!== "string")return console.log('No es una cadena de texto')
          if(unidad.length!==1||!/C||F/.test(unidad))return console.warn('Valor de unidad invalido')

          if(unidad==="C"){
              return console.info(`${grados}C° = ${Math.round((grados*9/5)+32)}°F`);
          }else if(unidad==="F"){
              return console.info(`${grados}F° = ${Math.round((grados-32)*5/9)}°C`);

          }else{
              console.log('El tipo de grados a convertir no es valido')
          }





      }
      convertirGrados(0,"C");


      
      //15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
      const convertirBinarioDecimal=(numero=undefined,base=undefined)=>{
          if(numero===undefined)return console.error('No se ingreso un numero a convertir');
          if(typeof numero !=="number")return console.log('Los que se ingreso son es numero');
          if(base===undefined)return console.error('No se ingreso una base a convertir');
          if(typeof base !=="number")return console.log('Los que se ingreso son es numero');

          if(base===2){
              return console.info(`El numero ${numero} en base ${base} = ${parseInt(numero,base)} base Decimal`);
          }else if(base===10){
              return console.info(`El numero ${numero} en base ${base} = ${numero.toString(base)} base Binaria`)
          }else{
              return console.error('El tipo de base a convertir no es valido')
          }

          

      }

      convertirBinarioDecimal(100,2);
      convertirBinarioDecimal(4,10);

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
      const aplicarDescuento = (monto=undefined,descuento=0)=>{
          if(monto===undefined)return console.error('No se ingreso un monto');
          if(typeof monto !=="number")return console.log('Los que se ingreso en monto no es numero');
          if(monto===0)return console.error('El monto no puede ser 0 ');
          if(Math.sign(monto)===-1)return console.log('El monto no puede ser negativo ');
          if(typeof descuento !=="number")return console.log('Los que se ingreso es un numero de descuento');
          if(Math.sign(descuento)===-1)return console.log('El descuento no puede ser negativo ');

          return console.info(`${monto} - ${descuento}% de descuento aplicado = ${monto-((monto*descuento)/100)}`);
      }

      aplicarDescuento(1000,20);
      aplicarDescuento('1000',25);

      console.clear();
//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const calcularEdad = (fecha=undefined)=>{
  if(fecha===undefined)return console.error('No se ingreso una fecha valida Fecha vacia');
  if(!(fecha instanceof Date))return console.error('Valor ingresado tipo de dato fecha NO valida');
  
  let hoyMenosFecha = new Date().getTime()-fecha.getTime(),
  edadEnMs= 1000*60*60*24*365,
  edadReal=Math.floor(hoyMenosFecha/edadEnMs);

  return (Math.sign(hoyMenosFecha)===-1)
  ? console.info(`Faltan ${Math.abs(edadReal)} años para el ${fecha.getFullYear()}.`)
  : (Math.sign(edadReal)===1)
     ? console.info(`Han pasado ${edadReal} años desde el ${fecha.getFullYear()}`)
     :console.info('Estamos en el año actual')


}

calcularEdad();
calcularEdad({});
calcularEdad(new Date());
calcularEdad(new Date(1997,3,9));




//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarLetras = (cadena="")=>{
if(!cadena)return console.log('No se ingreso una cadena de texto');
if(typeof cadena !=="string")return console.log("Lo ingresado no es una cadena");

let vocales=0,
consonantes=0;


cadena=cadena.toLocaleLowerCase();



for (let letra of cadena){
if(/[aeiouáéíóú]/.test(letra))vocales++;
if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra))consonantes++;
}

return console.info({
  cadena,
  vocales,
  consonantes
})


}
contarLetras("HolaMundo");
//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const validarNombre = (nombre="")=>{
  if(!nombre)return console.log('No se ingreso una cadena de texto');
  if(typeof nombre !=="string")return console.log("Lo ingresado no es una cadena");


  let expRegular = /^[A-Za-zÑñÁÉÍÓÚáéíóúüÜ\s]+$/g.test(nombre);
  return (expRegular)
          ?console.log('Nombre ingresad es valido')
          :console.log('Nombre ingresado NO es Valido')

}

validarNombre('Mateo Marin');
//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const validarEmail = (email="")=>{
  if(!email)return console.log('No se ingreso una cadena de texto');
  if(typeof email !=="string")return console.log("Lo ingresado no es una cadena");


  let expRegular =  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

  return (expRegular)
          ?console.log('El email ingresad es valido')
          :console.log('El email ingresado NI es Valido')

}


validarEmail('teomarin97@gmail.com');

//FUSION 19-20 EN UNA SOLA FUNCION 

const validarPatron = (cadena="", patron=undefined)=>{
  if(!cadena)return console.log('No se ingreso una cadena de texto');
  if(typeof cadena !=="string")return console.log("Lo ingresado no es una cadena");

  if(patron===undefined)return console.log('No se ingreso un patron de texto');
  if(!(patron instanceof RegExp))return console.log("Lo ingresado no es un patron");


  let expRegular = patron.test(cadena);

  return (expRegular)
          ?console.log('LA CADENA DE TEXTO ESTA VALIDADA SEGUN SU PATRON')
          :console.log('LA CADENA DE TEXTO NO ESTA VALIDADA SEGUN SU PATRON')

}

validarPatron('MAteo MArin Florez', /^[A-Za-zÑñÁÉÍÓÚáéíóúüÜ\s]+$/g);

//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const devolverCuadrados = (arr=undefined)=>{
    if(arr===undefined)return console.log("No se ha ingresado nada en la funcion");
    if(!(arr instanceof Array))return console.log("Tipo de dato no valido");
    if(arr.length===0)return console.log("El arreglo se encuentra vacio");

    for (let num of arr) {

        if(typeof num !== "number")return console.log(`El valor ${num} no es un numero valido`);
 
    }

    let newArr=arr.map(el=>el*el);
    return console.info(`El arreglo ${arr} al cuadrado sera: ${newArr}`)

}

devolverCuadrados();
devolverCuadrados({});
devolverCuadrados([]);
devolverCuadrados(['2',4,5]);
devolverCuadrados([5,10,2,8]);

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const devolverMaxMin = (arr=undefined)=>{
    if(arr===undefined)return console.log("No se ha ingresado nada en la funcion");
    if(!(arr instanceof Array))return console.log("Tipo de dato no valido");
    if(arr.length===0)return console.log("El arreglo se encuentra vacio");

    for (let num of arr) {

        if(typeof num !== "number")return console.log(`El valor ${num} no es un numero valido`);
 
    }

    return console.info(`El arreglo ${arr} \n Numero mayor: ${Math.max(...arr)} \n Numero menor: ${Math.min(...arr)} `)

}

devolverMaxMin([1,5,6,8,99,26,-2]);
//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
const separarParesImpares=(arr=undefined)=>{
    if(arr===undefined)return console.log("No se ha ingresado nada en la funcion");
    if(!(arr instanceof Array))return console.log("Tipo de dato no valido");
    if(arr.length===0)return console.log("El arreglo se encuentra vacio");

    for (let num of arr) {
        if(typeof num !== "number")return console.log(`El valor ${num} no es un numero valido`);
    }

    return console.info({
        pares: arr.filter(num=>num%2===0),
        impares: arr.filter(num=>num%2===1)
    })
}

separarParesImpares([5,2,6,4,7])
//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const arrOrd = (arr=undefined)=>{
    if(arr===undefined)return console.log("No se ha ingresado nada en la funcion");
    if(!(arr instanceof Array))return console.error("Tipo de dato no valido");
    if(arr.length===0)return console.log("El arreglo se encuentra vacio");
    for (let num of arr) {
        if(typeof num !== "number")return console.log(`El valor ${num} no es un numero valido`);
    }

    let arrN = arr.filter((item,index)=>{
        return arr.indexOf(item) === index;
    })

    return console.info({
        arr,
        asc:arrN.map(el=>el).sort(),
        desc:arrN.map(el=>el).sort().reverse()

    })
}
arrOrd([5,2,11,0,6,8,10,2,11]);


//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const eliminarDuplicados = (arr=undefined)=>{
    if(arr===undefined)return console.log("No se ha ingresado nada en la funcion");
    if(!(arr instanceof Array))return console.log("Tipo de dato no valido");
    if(arr.length===0)return console.log("El arreglo se encuentra vacio");

    /*return console.info({
        original: arr,
        sinduplicado:arr.filter((item,index,self)=>self.indexOf(item)===index)
    
    })*/

    return console.info({
        original: arr,
        sinduplicado:[...new Set(arr)]
    
    })



}

eliminarDuplicados([2,2,6,5,3,6,2,8,9,6,10]);
//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const promedio =(arr=undefined)=>{
    if(arr===undefined)return console.log("No se ha ingresado nada en la funcion");
    if(!(arr instanceof Array))return console.log("Tipo de dato no valido");
    if(arr.length===0)return console.log("El arreglo se encuentra vacio");

    return console.info(
        arr.reduce((total,num,index,arr)=>{
        total+=num;
        if(index===arr.length-1){
            return `El promedio de ${arr.join("+")} es ${(total/arr.length)}`;
        }else{
            return total;
        }
    })
    )

}
promedio(true);
promedio([5,5,5,5,5]);

/*27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/

class Pelicula{
    i

}