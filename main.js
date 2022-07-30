let preguntas_respuestas =   [ 
    { 
        p: '¿Qué significa tomarse la pastilla roja?',
        r: ['Liberarse de la realidad virtual de matrix y dirigirse al mundo real', ' respuesta incorrecta ', ' respuesta incorrecta'],
        c: 'Liberarse de la realidad virtual de matrix y dirigirse al mundo real'
    },
    { 
        p: '¿Cuál es el nombre real de Neo?',
        r: ['Thomas', 'respuesta incorrecta', 'respuesta incorrecta'],
        c: 'Thomas'            
    }, 
    { 
        p: '¿Qué actriz interpretó a Trinity?',
        r: ['Carrie Anne Moss', 'respuesta incorrecta', 'respuesta incorrecta'],
        c: 'Carrie Anne Moss'           
    },
    {
        p: '¿Cómo se llama el aerodeslizador de transporte de Morfeo?',
        r:['Nebuchadnezzar', 'respuesta incrrecta', 'respuesta incorrecta'],
        c: 'Nebuchadnezzar'             
    }
    ]
    


let preguntas_respuestasB = [//posicion 
{//p. 1.0
    p: 'pregunt tema 2',
    r: ['res1', 'res2', 'res 3'],
    C: 'res1'
},
{//p.1.1
    p: 'pregunta 3',
    r: ['res1', 'res2', 'res 3'],
    c: 'res1'
},
{//p.1.2
    p: 'pregunta 4',
    r: ['res1', 'res2', 'res 3'],
    c: 'res1'
},
{//p.1.3
    p: 'pregunta 4',
    r: ['res1', 'res2', 'res 3'],
    c: 'res1'
}
]
//let r_correctaA = preguntas_respuestas[i].c
//let r_correctaB = preguntas_respuestasB[i].c
let bienvenida = document.getElementById('texto')
let divRespuestas = document.getElementById('respuestas')
let botonA = document.createElement('button')
    botonA.setAttribute('id', 'buttonA')
    botonA.innerText = 'Preguntas de tipo A'
let botonB = document.createElement('button')
    botonB.setAttribute('id', 'botonA')
    botonB.innerText = 'preguntas de tipo B'

let respuesta_correcta

let pedirNombre = (nombre) => {
    nombre = prompt('¿Cuál es tu nombre?')
    let saludo = bienvenida 
    if(nombre !== null){
        bienvenida.innerText = `Hola ${nombre.toUpperCase()}, ¿listx para jugar?`
    } else{
        bienvenida.innerText = `Hola, ANÓNIMO, ¿listx para jugar? `
    }
    divRespuestas.append(botonA, botonB)
    return saludo
}
pedirNombre()
//function that executes a button
let triviaA = () =>{
    divRespuestas.removeChild(botonA)
    divRespuestas.removeChild(botonB)
//procesoA gives a question and also appends
//to the HTML a button
   let procesoA = (i) => {
        let p = preguntas_respuestas[i]
        let p_html = `${p.p}`
        bienvenida.innerText = p_html
        let r = p.r     
        let r_html = r.map(r_button => `<button class="btn-opciones">${r_button}</button>`)
        let r_string = r_html.join(' ')
        divRespuestas.innerHTML = r_string
    //revisaProceso is a function that checks if 
    //the button selected is correct 
        let revisaProceso = () =>{
            for(let m = 0; m < boton.length; m++){
           if(m === p.c){
               alert('correct')
           }
        }        
    }
    let boton = document.querySelectorAll('.btn-opciones')
    boton.forEach(element =>element.addEventListener('click', revisaProceso))
        
    }
    procesoA(0,0)    

   
    
  
}

    
    



//agregar eventListener a BotonA
    botonA.addEventListener('click', triviaA)
//Agregrar eventListener a botonB
  //botonB.addEventListener('click', triviaB)


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


