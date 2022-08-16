//p:PROPIEDAD QUE ALMACENA LA PREGUNTA
//r: PROPIEDAD QUE ALMACENA LAS OPCIONES DE RESPUESTA
//c: PROPIEDAD QUE ALMACENA LA RESPUESTA CORRECTA
let preguntas_respuestas = [[
  {
    p: "¿Cuál fue su primera banda?",
    r: ["One Direction", "White Skimo", "Little Mix"],
    c: "White Skimo"
  },
  {
    p: "¿En qué pelicula hizo su debut?",
    r: ["Dunkerke", "Call me by your name", "Don't Worry Darling"],
    c: 'Dunkerke'
  },
  {
    p: "¿Cuál fue su primer sencillo como solista?",
    r: ["As it was", "Watermelon Sugar", "Sign of the times"],
    c: "Sign of the times"
  },
  {
    p: "¿Cuál es el nombre real del Harry Styles",
    r: ["Harry Steph Styles", "Harry Edward Styles", "Harry Connor Styles"],
    c: "Harry Edward"
  },
],[
  {
    p: "PREGUNTA 1B",
    r: ["RESPUESTA1", "RESPUESTA2", "RESPUESTA 3"],
    c: "RESPUESTA1",
  },
  {
    p: "PREGUNTA 2B",
    r: ["RESPUESTA1", "RESPUESTA2", "RESPUESTA 3"],
    c: "RESPUESTA 3",
  },
  {
    p: "PREGUNTA 3B",
    r: ["RESPUESTA1", "RESPUESTA2", "RESPUESTA 3"],
    c: "RESPUESTA2",
  },
  {
    p: "PREGUNTA 4B",
    r: ["RESPUESTA1", "RESPUESTA2", "RESPUESTA 3"],
    c: "RESPUESTA 3",
  }
]]


//let r_correctaA = preguntas_respuestas[i].c
//let r_correctaB = preguntas_respuestasB[i].c
let bienvenida = document.getElementById("texto");
let divRespuestas = document.getElementById("respuestas");
let botonA = document.createElement("button");
botonA.setAttribute("id", "buttonA");
botonA.innerText = "HARRY STYLES";
let botonB = document.createElement("button");
botonB.setAttribute("id", "botonA");
botonB.innerText = "preguntas de tipo B";

let respuesta_correcta;

let pedirNombre = (nombre) => {
  nombre = prompt("¿Cuál es tu nombre?");
  let saludo = bienvenida;
  if (nombre !== null) {
    bienvenida.innerText = `Hola ${nombre.toUpperCase()}, ¿listx para jugar?`;
  } else {
    bienvenida.innerText = `Hola, ANÓNIMO, ¿listx para jugar? `;
  }
  divRespuestas.append(botonA, botonB);
  return saludo;
};
pedirNombre();
//FUNCIÓN QUE EJECUTA EL BOTÓN A
let triviaA = (event) => {

  divRespuestas.removeChild(botonA);
  divRespuestas.removeChild(botonB);
  //procesoA DEVUELVE UNA PREGUNTA Y ADHIERE
  //BOTONES AL HTML
  let procesoA = (i, k) => {
    let p = preguntas_respuestas[i][k]
    console.log(preguntas_respuestas, i,k)
    let p_html = `${p.p}`;
    bienvenida.innerText = p_html;
    let r = p.r;
    let r_html = r.map(
      (r_button) => `<button class="btn-opciones">${r_button}</button>`
    );
    let r_string = r_html.join(" ");
    divRespuestas.innerHTML = r_string;
    //revisaProceso ES UNA FUNCION QUE COMPARA
    //EL BOTÓN SELECCIONADO CON LA RESPUESTA CORRECTA
    let revisaProceso = (event) => {
      let divPregunta = document.getElementById('pregunta')


      if (event.target.innerHTML === p.c) {
        divPregunta.innerHTML = '<div class="correct"><p>CORRECTO</p></div>'
        //i += 1
        k += 1
        p = preguntas_respuestas[i][k];
        bienvenida.innerText = preguntas_respuestas[i][k].p

        divRespuestas.innerHTML = preguntas_respuestas[i][k].r.map((r_button) => `<button class="btn-opciones">${r_button}</button>`).join('')
        
        let boton = document.querySelectorAll(".btn-opciones");
        boton.forEach((element) =>
          element.addEventListener("click", revisaProceso)
          
        )

      } else {
        divPregunta.innerHTML = '<div class="wrong"><p>INCORRECTO</p></div>'

      }

    };
    let boton = document.querySelectorAll(".btn-opciones");
    boton.forEach((element) =>
      element.addEventListener("click", revisaProceso)
    );
  };

  procesoA(0,0);
};



//agregar eventListener a BotonA
botonA.addEventListener("click", triviaA);
//Agregrar eventListener a botonB

let triviaB = (evento) =>{
  let procesoA = (i, k) => {
    let p = preguntas_respuestas[i][k]
    console.log(preguntas_respuestas, i,k)
    let p_html = `${p.p}`;
    bienvenida.innerText = p_html;
    let r = p.r;
    let r_html = r.map(
      (r_button) => `<button class="btn-opciones">${r_button}</button>`
    );
    let r_string = r_html.join(" ");
    divRespuestas.innerHTML = r_string;
    //revisaProceso ES UNA FUNCION QUE COMPARA
    //EL BOTÓN SELECCIONADO CON LA RESPUESTA CORRECTA
    let revisaProceso = (event) => {
      let divPregunta = document.getElementById('pregunta')


      if (event.target.innerHTML === p.c) {
        divPregunta.innerHTML = '<div class="correct"><p>CORRECTO</p></div>'
        //i += 1
        k += 1
        p = preguntas_respuestas[i][k];
        bienvenida.innerText = preguntas_respuestas[i][k].p

        divRespuestas.innerHTML = preguntas_respuestas[i][k].r.map((r_button) => `<button class="btn-opciones">${r_button}</button>`).join('')
        
        let boton = document.querySelectorAll(".btn-opciones");
        boton.forEach((element) =>
          element.addEventListener("click", revisaProceso)
          
        )

      } else {
        divPregunta.innerHTML = '<div class="wrong"><p>INCORRECTO</p></div>'

      }

    };
    let boton = document.querySelectorAll(".btn-opciones");
    boton.forEach((element) =>
      element.addEventListener("click", revisaProceso)
    );
  };

  procesoA(1,0);
};
  
botonB.addEventListener('click', triviaB)





/*console.log('funciona', e)
        e.classList.add('correct')
       // alert("correct");
      } else{
          alert('JAJA')
          e.classList.add('wrong')*/