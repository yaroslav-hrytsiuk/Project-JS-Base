const ball = document.getElementById('ball'),
    textInBall = document.getElementById('textInBall'),
    name = document.getElementById('name'),
    question = document.getElementById('question'),
    button = document.getElementById('button'),
    answer = document.getElementById('answer'),
    resultName = document.getElementById('nameResult'),
    questionName = document.getElementById('questionResult'),
    answerName = document.getElementById('answerResult'),
    nameRes = document.getElementById('nameRes'),
    questionRes = document.getElementById('questionRes'),
    decisionRes = document.getElementById('decisionRes'),
    prevNameResults = [],
    prevQuestionResults = [],
    prevDecisionResults = [],
    arrayOfAnswers = ['Gomer say yes', 'You really think about it?', 
    'Yes, it will works', 'No, no, no', 
    'Stars say no', 'Maybe later', 'Better learn JS', 
    'Abra-kadabra!', `Wait, I'll go to future and see it`, 'Go to Vanga', 
    'Think about it one more time', 'Do this, Valhalla wait for you', 
    'Take it easy', `I don't know`, 'Ask tomorrow', 'Chill man, do this tomorrow', 
    'Health is main'],
    moveBall = [
        {transform: 'translateX(0px) translateY(0)'},
        {transform: 'translateX(-10px) translateY(10px)'},
        {transform: 'translateX(10px) translateY(-10px)'},
        {transform: 'translateX(10px) translateY(10px)'},
        {transform: 'translateX(-10px) translateY(-10px)'},
        {transform: 'translateX(-10px) translateY(10px)'},
        {transform: 'translateX(10px) translateY(-10px)'},
        {transform: 'translateX(10px) translateY(10px)'},
        {transform: 'translateX(-10px) translateY(-10px)', offset: 0.9},
        {transform: 'translateX(0px) translateY(0)'}
    ],
    moveBallTime = {
        duration: 1000,
        iterations: 1
    };

button.addEventListener('click', function(){
    const regCheck = new RegExp("^[a-zA-Z]"),
        condition = regCheck.test(name.value) && regCheck.test(question.value);
    if(isNaN(name.value) && isNaN(question.value) && condition) {
        ball.animate(moveBall, moveBallTime);
        answer.animate([{opacity: 1}, {opacity: 0}], 1100);
        setTimeout(function(){
            resultName.innerText = 'Your name:';
            questionName.innerText = 'Your question:';
            answerName.innerText = 'Ball says:';
            let randomAnswer = arrayOfAnswers[Math.floor(Math.random()*arrayOfAnswers.length)];
            answer.innerText = randomAnswer;
            answer.animate([{opacity: 0}, {opacity: 1}], 1000);
            const askNameResults = name.value,
                askQuestionResult = question.value,
                askDecisionResult = randomAnswer;
            prevNameResults.push(askNameResults);
            prevQuestionResults.push(askQuestionResult);
            prevDecisionResults.push(askDecisionResult);
            name.value = null;
            question.value = null;
            showPrevResults();
        },1000)
    } else {
        answer.innerText = 'Please write name and question!';
        name.value = null;
        question.value = null;
    }
})
function showPrevResults (){
    let htmlNameResults = '',
        htmlQuestionResults = '',
        htmlDecisionResults = '';
    prevNameResults.forEach(item => {
        htmlNameResults += `<li>${item}</li>`;
    });
    prevQuestionResults.forEach(item => {
        htmlQuestionResults += `<li>${item}</li>`;
    });
    prevDecisionResults.forEach(item => {
        htmlDecisionResults += `<li>${item}</li>`;
    });
    nameRes.innerHTML = htmlNameResults;
    questionRes.innerHTML = htmlQuestionResults;
    decisionRes.innerHTML = htmlDecisionResults;
}