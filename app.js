// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigoSecreto = [];
const mensaje = document.getElementById("mensaje");
function agregarAmigo(){
    //tomo valor del input y lo almaceno en la variable
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
    
    const soloTextoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;  
    
     //valido si el campo está vacio, dato no esté repetido y que sea solo texto

    if(nombreAmigo ==""){
        alert("Digite un Nombre");
        return;
    }else{   
            if (amigoSecreto.includes(nombreAmigo)==true) {
                    alert("Nombre de amigo repetido");
                    inputAmigo.value = "";
                    inputAmigo.focus();
                    return;
            }
         
                
                if (soloTextoRegex.test(inputAmigo.value)) {
                    //console.log("Entrada válida: Solo contiene texto.");
                    //mensaje.textContent = "Entrada válida: Solo contiene texto.";
                   // mensaje.style.color = "green";

                    amigoSecreto.push(nombreAmigo);
                    inputAmigo.value = "";
                    inputAmigo.focus();
                    renderizarAmigos();
                
                }else {
                    
                    inputAmigo.value = "";
                    inputAmigo.focus();
                   // mensaje.textContent = "Error: Solo se permiten letras y espacios.";
                   // mensaje.style.color = "red";
                    alert("Solo puedes escribir texto.")
                    
                }
        
            
        
        
        }    
 }

    function renderizarAmigos(){
        let listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML ="";

       // console.log(amigoSecreto.length);
        for (let i = 0; i < amigoSecreto.length; i++) {
            let item = document.createElement("li");
            item.textContent = amigoSecreto[i];
            listaAmigos.appendChild(item);
            
        }
    }

    function sortearAmigo() {
        if (amigoSecreto.length === 0){
            alert("Lista de Amigos vacia")
            return
        }
        
        let amigoSorteado = amigoSecreto[Math.floor(Math.random()*amigoSecreto.length)];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;        
    }


    




    