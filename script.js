const riddles = [
    {
      question: "¿Qué tiene cabeza pero no tiene cuerpo?",
      answer: "ajo"
    },
    {
      question: "Mientras más le quitas, más grande se vuelve. ¿Qué es?",
      answer: "agujero"
    },
    {
      question: "¿Qué va hacia arriba pero nunca baja?",
      answer: "edad"
    }
  ];
  
  let currentRiddleIndex = Math.floor(Math.random() * riddles.length);
  document.getElementById("riddle").innerText = riddles[currentRiddleIndex].question;
  
  document.getElementById("checkButton").addEventListener("click", () => {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const feedback = document.getElementById("feedback");
  
    if (userAnswer === riddles[currentRiddleIndex].answer) {
      feedback.innerText = "¡Correcto! 🎉";
      feedback.style.color = "green";
    } else {
      feedback.innerText = "Incorrecto. Intenta de nuevo.";
      feedback.style.color = "red";
    }
  });
  