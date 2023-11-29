const answers = document.querySelectorAll('.answer');
const emptyBoxes = document.querySelectorAll('.empty-box');
let score = 0;

const correctAnswers = {
    'q1a1': 'visibility-of-system-status',
    'q2a1': 'match-between-system-and-real-world',
    'q3a1': 'user-control-and-freedom',
    'q4a1': 'consistency-and-standards',
    'q5a1': 'question-5',
    'q6a1': 'question-6',
    'q7a1': 'question-7',
    'q8a1': 'question-8',
    'q9a1': 'question-9',
    'q10a1': 'question-10'
};

answers.forEach(answer => {
    answer.addEventListener('dragstart', dragStart);
    answer.addEventListener('dragend', dragEnd);
});

emptyBoxes.forEach(box => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', this.id);
}

function dragEnd() {
    // Nothing needed here for now
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}

function dragLeave() {
    this.classList.remove('hovered');
}

function dragDrop(e) {
    e.preventDefault();

    const answerId = e.dataTransfer.getData('text/plain');
    const answer = document.getElementById(answerId);

    const isCorrect = correctAnswers[answerId] === this.id;

    if (isCorrect) {
        answer.classList.add('correct');
        score++;
        document.getElementById('score').textContent = `Score: ${score}`;
        showMessage('GOODJOB!!!!!', true);
    } else {
        answer.classList.add('incorrect');
        showMessage('TRY AGAIN', false);
    }

    this.appendChild(answer);
    this.classList.remove('hovered');
}

function showMessage(message, isCorrect) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message');

    // Adjust the background color and other styles based on correct or incorrect answer
    if (isCorrect) {
        messageElement.style.backgroundColor = '#4CAF50';  // Green background for correct answer
    } else {
        messageElement.style.backgroundColor = '#f44336';  // Red background for incorrect answer
    }

    document.body.appendChild(messageElement);

    setTimeout(() => {
        messageElement.remove();
    }, 3000);
}