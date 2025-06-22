document.addEventListener("DOMContentLoaded",function(){
        function checkAnswer(){
            const correctAnswer = "4";

            const selectedOption = document.querySelector('input[name="quiz"]:checked');
            const userAnswer = selectedOption.value ;

            if (userAnswer === correctAnswer)
                {
            const feedback = document.getElementById("feedback");
            feedback.textContent = "Correct! Well done."
           } 
           else {
              feedback.textContent = "That's incorrect. Try again!"
           }
        }
        const submit = document.getElementById("submit-answer");
        submit.addEventListener("click", checkAnswer);
}); 