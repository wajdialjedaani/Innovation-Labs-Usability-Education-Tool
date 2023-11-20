const answers = document.querySelectorAll('.answer');
const emptyBoxes = document.querySelectorAll('.empty-box');
let score = 0; // Initialize a score variable

// Unique identifiers for correct answers
const correctAnswers = {
    'q1a1': 'visibility-of-system-status',
    'q2a1': 'match-between-system-and-real-world',
    'q3a1': 'user-control-and-freedom',
    'q4a1': 'consistency-and-standards'
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
    e.preventDefault();  // Prevent the default behavior to enable drop

    const answerId = e.dataTransfer.getData('text/plain');
    const answer = document.getElementById(answerId);

    // Check if the dropped answer is correct
    if (correctAnswers[answerId] === this.id) {
        answer.classList.add('correct');
        score++; // Increment the score for correct answers
    } else {
        answer.classList.add('incorrect');
    }

    // Update the score display
    document.getElementById('score').textContent = `Score: ${score}`;

    this.appendChild(answer);
    this.classList.remove('hovered');
}