/*r.map((r_button, n) =>{
            let boton = document.createElement('button')
            boton.addEventListener('click', analizador)
            boton.textContent = r_button
            boton.className = 'btn-opciones' + n
            divRespuestas.appendChild(boton)
            
        })
        let analizador = () => {
            let r_correcta = (i,j) =>{
                if(boton.innerText === preguntas_respuestas[i][j].c){
                    alert('correcto')
                }
            }
            r_correcta(0,0)
        }*/











/*
let contenedor = document.getElementById('contenedor')
let bienvenida = document.querySelector('.bienvenida')
let divBotones = document.createElement('div')
    divBotones.setAttribute('id', 'divBotones')
let botonA = document.createElement('button')
    botonA.innerText = 'Preguntas de tipo A'    
let botonB = document.createElement('button')
    botonB.innerText = 'Preguntas de tipo B'

    
let pedirNombre = (nombre) =>{
    nombre = prompt('Bienvenidx \n ¿Cuál es tu nombre?')
    let saludo = bienvenida
    if(nombre !== null ){
        bienvenida.innerText = `Hola ${nombre.toUpperCase()}, ¿listx para jugar?`
    } else {
        bienvenida.innerText = 'Hola Anonimx, ¿listx para jugar?'
    } 
    contenedor.appendChild(divBotones)
    divBotones.append(botonA, botonB)
    return saludo
}

pedirNombre() 

//creando una funcion para las preguntas tipo A
let triviaA = function(ejecucionA){
    ejecucionA = (i) =>{  
        //tomando la pregunta del array de preguntas 
        let q = preguntas_respuestas[i]
        //colocar la pregunta dentro del html
        divBotones.remove(botonA,botonB)
        //recorrer el arr de respuestas
        let a = q.r
        //usando el metodo map para recorrer el arreglo de respuestas
        //y devolver un nuevo arreglo
        //currentA es la propiedad, es cada una de las respuestas q se han recorrido 
        //en cada iteracion se devuelve un codigo :`<div class="divBotones><button>${currentA}</button></div>`)
        let a_html_arr = a.map(currentA => `<button id='botonRespuesta'>`${currentA}`, this</button>`)
        //transformar a_html_arr en una cadena de texto con metodo join()
        let a_string = a_html_arr.join(' ')
        let q_html = `<h5>${q.p}</h5><div id="divBotones">${a_string}</button>`
        bienvenida.innerHTML = q_html
        
        } //ya termino ejecucionA
    ejecucionA(0) //aca se ejecuta
    
    let respuestaSelec = (evaluaRespuesta) =>{ //
        evaluaRespuesta = (answer, obj) =>{
            //pintar boton 
        if(answer === rCorrecta){

        }else{

        }
        }
        
          
    }     
    let botonR = document.querySelectorAll('button')
    botonR.forEach(el => el.addEventListener('click', respuestaSelec))
    
}
//agregar event listener al boton A
botonA.addEventListener('click', triviaA)
//ejecutar funcion luego de que funcion pedirNombre termine
*/