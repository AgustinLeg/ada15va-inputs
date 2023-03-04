# Clase 08 - Inputs controlados y no controlados

## Ejercicio 1

- Crear un input password en el que muestre/oculte la contraseña al hacer click en icono

## Ejercicio 2

- Preguntas y respuestas: Crea un componente que tenga una pregunta y cuatro posibles respuestas. Cuando se seleccione una respuesta, se debería mostrar si es la respuesta correcta o no. Luego, se debería mostrar la siguiente pregunta y respuestas. Utiliza una lista de preguntas y respuestas para cambiar de una pregunta a otra.

```
const questions = [
  {
    question: "¿Cuál es el animal más grande del mundo?",
    answers: [
      { id: "1", text: "Elefante" },
      { id: "2", text: "Ballena azul", correct: true },
      { id: "3", text: "Jirafa" },
      { id: "4", text: "Hipopótamo" },
    ],
  },
  {
    question: "¿En qué año comenzó la Segunda Guerra Mundial?",
    answers: [
      { id: "1", text: "1936" },
      { id: "2", text: "1939", correct: true },
      { id: "3", text: "1942" },
      { id: "4", text: "1945" },
    ],
  },
  {
    question: "¿Cuál es la capital de Australia?",
    answers: [
      { id: "1", text: "Sídney" },
      { id: "2", text: "Melbourne" },
      { id: "3", text: "Brisbane" },
      { id: "4", text: "Canberra", correct: true },
    ],
  },
];

```
