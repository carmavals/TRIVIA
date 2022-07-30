//p:PROPIEDAD QUE ALMACENA LA PREGUNTA
//r: PROPIEDAD QUE ALMACENA LAS OPCIONES DE RESPUESTA
//c: PROPIEDAD QUE ALMACENA LA RESPUESTA CORRECTA
let preguntas_respuestas =   [ 
    { 
        p: 'PREGUNTA 1A',
        r: ['RESPUESTA 1', 'RESPUESTA 2 ', 'RESPUESTA 3'],
        c: 'RESPUESTA 1'
    },
    { 
        p: 'PREGUNTA 1A',
        r: ['RESPUESTA 1A', 'RESPUESTA 2 ', 'RESPUESTA 3'],
        c: 'RESPUESTA 1'           
    }, 
    { 
        p: 'PREGUNTA 1A',
        r: ['RESPUESTA 1', 'RESPUESTA 2 ', 'RESPUESTA 3'],
        c: 'RESPUESTA 1'           
    },
    {
        p: 'PREGUNTA 1A',
        r: ['RESPUESTA 1', 'RESPUESTA 2 ', 'RESPUESTA 3'],
        c: 'RESPUESTA 1'           
    }
    ]
    


let preguntas_respuestasB = [
{
    p: 'PREGUNTA 1B',
    r: ['RESPUESTA1', 'RESPUESTA2', 'RESPUESTA 3'],
    C: 'RESPUESTA 1'
},
{
    p: 'PREGUNTA 1B',
    r: ['RESPUESTA1', 'RESPUESTA2', 'RESPUESTA 3'],
    C: 'RESPUESTA 1'
},
{
    p: 'PREGUNTA 1B',
    r: ['RESPUESTA1', 'RESPUESTA2', 'RESPUESTA 3'],
    C: 'RESPUESTA 1'
},
{
    p: 'PREGUNTA 1B',
    r: ['RESPUESTA1', 'RESPUESTA2', 'RESPUESTA 3'],
    C: 'RESPUESTA 1'
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
//FUNCIÓN QUE EJECUTA EL BOTÓN A
let triviaA = () =>{
    divRespuestas.removeChild(botonA)
    divRespuestas.removeChild(botonB)
//procesoA DEVUELVE UNA PREGUNTA Y ADHIERE
//BOTONES AL HTML
   let procesoA = (i) => {
        let p = preguntas_respuestas[i]
        let p_html = `${p.p}`
        bienvenida.innerText = p_html
        let r = p.r     
        let r_html = r.map(r_button => `<button class="btn-opciones">${r_button}</button>`)
        let r_string = r_html.join(' ')
        divRespuestas.innerHTML = r_string
    //revisaProceso ES UNA FUNCION QUE COMPARA 
    //EL BOTÓN SELECCIONADO CON LA RESPUESTA CORRECTA
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

  


