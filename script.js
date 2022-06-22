// allow to stroe an entity with different properties in a variables
let questions = [
    {
      title: 'gato',
      alternatives: ['dog', 'cat', 'bird', 'fish'],
      correctAnswer: 1
    },
    {
      title: 'ave',
      alternatives: ['mouse', 'hamster', 'lizard', 'bird'],
      correctAnswer: 3
    },
    {
      title: 'rata',
      alternatives: ['cat', 'fish', 'rat', 'shark'],
      correctAnswer: 2
    },
    {
      title: 'mosca',
      alternatives: ['fly', 'puma', 'fish', 'dog'],
      correctAnswer: 0
    }
  ];

let alts = document.querySelectorAll('.alternative');
 
let app = {
    start: function() {
        // display all query to HTML and add event listening to check the answer is correct  
        // use arrow function for binding
        alts.forEach((element, index) => {
            element.addEventListener('click', () => {
                this.checkAnswer(index)
            })
        });
        this.score = 0;
        this.updateStats();
        //  show first question
        this.currPosition = 0
        this.showQuestion(questions[this.currPosition]);
    },
    showQuestion: function(q) {
        // select dom element and modify it
        let titleDiv = document.getElementById('title');
        titleDiv.textContent = `Qusetion ${this.currPosition+1}: ${q.title}`;
        // show questions
        alts.forEach(function(element, index){
            element.textContent = q.alternatives[index];
        });
    },
    checkAnswer: function(userSelected) {
        let currQuestion = questions[this.currPosition];

        if(currQuestion.correctAnswer == userSelected){
            // correct
            console.log('correct');
            this.score++;
            this.showResult(true)
        }
        else {
            // not correct
            console.log('wrong')
            this.showResult(false)
        }
        // refresh stats
        this.updateStats()
        // show next question
        this.increasePosition();
        this.showQuestion(questions[this.currPosition]);
    },
    increasePosition: function() {
        this.currPosition++;
        // if the questions are reached the end of the array, it starts over
        if(this.currPosition == questions.length) {
            this.currPosition = 0;
        }
    },
    updateStats: function() {
        let scoreDiv = document.getElementById('score')
        scoreDiv.textContent = `Your score: ${this.score}`;
    },

    showResult: function(isCorrect) {
        let resultDiv = document.getElementById('result');
        let result = '';
        if(isCorrect) {
            result = 'Correct Answer!';
        } else{
            // display answer 
            let currQuestion = questions[this.currPosition];
            let correctAnsIndex = currQuestion.correctAnswer;
            let correctAnsText = currQuestion.alternatives[correctAnsIndex];

            result = `Wrong! The answer was: ${correctAnsText}`
        }
        resultDiv.textContent = result;
    }

}


app.start();

