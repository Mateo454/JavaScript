(()=>{
    const xhr = new XMLHttpRequest(),//instancia del objeto 
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();//Creacion del fragmento
    
    
    xhr.addEventListener("readystatechange",e=>{
        if(xhr.readyState!==4)return;//Validacion para que solo retorne cuando esta en estado completo 
        
        if(xhr.status>=200 && xhr.status<300){
            console.log("Exito");
            /*console.log(xhr.responseText);*///no se utiliza para la respuesta
            let json = JSON.parse(xhr.responseText); // forma correcta de obtener la respueta
            console.log(json);

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone} -- ${el.website}`;//ingreso de contenido
                $fragment.appendChild($li);


            });

            $xhr.appendChild($fragment);
        }else{
            console.log("error");
            let message= xhr.statusText||"Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }
         console.log("Este mensaje se realizara de cualquier forma") 
    });//asignarle el o los eventos
    xhr.open("GET","https://jsonplaceholder.typicode.com/users");//Abrir la peticion especificando metodo y url
    xhr.send()//enviar la peticion 
})();


(()=>{
    $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();//Create a fragment of DOM 

    fetch("https://jsonplaceholder.typicode.com/users")
    /*then((res)=>{
    
        return res.ok ? res.json():Promise.reject(res);
    })*/
    then((res)=>res.ok ? res.json():Promise.reject(res))//form of valide in optimal to do it
    .then((json)=>{
        console.log(json);
        //$fetch.innerHTML = json;
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone} -- ${el.website}`;//entering contents of API 
            $fragment.appendChild($li);


        });
        $fetch.appendChild($fragment);
    })
    .catch((err)=>{
        console.log("Catch",err);
        let message = err.statusText || "Ocurro un error";
        $fetch.innerHTML= `Error ${err.statusText}: ${message}`
    })
    .finally(()=>{
        console.log("Esto sera ejecutado pase lo que pase");
    });
})();