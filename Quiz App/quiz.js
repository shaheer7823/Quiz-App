const quesArray = [
    { question: 'What does "let" do in JavaScript?', options: ['Declare a variable', 'Declare a function', 'Loop control', 'None'], answer: 'Declare a variable' },
    { question: 'What is a promise?', options: ['A variable', 'An object', 'A loop', 'None'], answer: 'An object' },
    { question: 'Which company developed JavaScript?', options: ['Microsoft', 'Netscape', 'Apple', 'Google'], answer: 'Netscape' },
    { question: 'What is "NaN"?', options: ['Not a Name', 'Not a Number', 'No Answer', 'Not a Namespace'], answer: 'Not a Number' },
    { question: 'Which type is JavaScript?', options: ['Static', 'Dynamic', 'Compiled', 'Typed'], answer: 'Dynamic' },
    { question: 'How do you write comments?', options: ['// Comment', '## Comment', '** Comment', '/* Comment'], answer: '// Comment' },
    { question: 'What is DOM?', options: ['Document Object Model', 'Display Object Management', 'Data Object Management', 'Digital Object Model'], answer: 'Document Object Model' },
    { question: 'What is an Array?', options: ['Data Structure', 'Function', 'Class', 'Library'], answer: 'Data Structure' },
    { question: 'Which keyword creates an object?', options: ['new', 'create', 'this', 'Object'], answer: 'new' },
    { question: 'What is "use strict"?', options: ['Strict Mode', 'New Syntax', 'Old Syntax', 'None'], answer: 'Strict Mode' },
  ];

  let userAnswers = [];
  let quesCount = 0;
  let correctAnswers = 0;

  const formPage = document.getElementById('formPage');
  const quizPage = document.getElementById('quizPage');
  const resultPage = document.getElementById('resultPage');
  const userInfo = document.getElementById('userInfo');
  const ques = document.getElementById('ques');
  const quesOptions = document.getElementById('quesOptions');
  const progressCircle = document.getElementById('progressCircle');
  const progressText = document.getElementById('progressText');
  const resultMessage = document.getElementById('resultMessage');

  function startQuiz() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rollno = document.getElementById('rollno').value;
    const institute = document.getElementById('institute').value;

    if (!name || !email || !rollno || !institute) {
      alert('All fields are required!');
      return;
    }

    userInfo.textContent = `Name: ${name} | Email: ${email} | Roll No: ${rollno} | Institute: ${institute}`;
    formPage.style.display = 'none';
    quizPage.style.display = 'block';
    loadQuestion();
  }

  function loadQuestion() {
    const currentQues = quesArray[quesCount];
    ques.textContent = currentQues.question;
    quesOptions.innerHTML = '';
    currentQues.options.forEach(option => {
      const li = document.createElement('li');
      li.textContent = option;
      li.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer';
      li.onclick = () => selectOption(li);
      quesOptions.appendChild(li);
    });
  }

  function selectOption(element) {
    const selectedAnswer = element.textContent;
    userAnswers[quesCount] = selectedAnswer;

    if (selectedAnswer === quesArray[quesCount].answer) correctAnswers++;

    Array.from(quesOptions.children).forEach(child => child.classList.remove('bg-green-500', 'bg-red-500'));
    element.classList.add(selectedAnswer === quesArray[quesCount].answer ? 'bg-green-500' : 'bg-red-500');
  }

  function nextQues() {
    if (quesCount < quesArray.length - 1) {
      quesCount++;
      loadQuestion();
    } else {
      quizPage.style.display = 'none';
      resultPage.style.display = 'block';
      showResult();
    }
  }

  function showResult() {
  const percentage = Math.round((correctAnswers / quesArray.length) * 100);

  // Update the progress bar
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  const resultMessage = document.getElementById('resultMessage');

  progressBar.style.width = `${percentage}%`; // Animate the progress bar width
  progressText.textContent = `${percentage}%`; // Update percentage text
  resultMessage.textContent = `You got ${correctAnswers} out of ${quesArray.length} correct!`;
}



  function updateProgress(percentage) {
  let progress = 0;
  const interval = setInterval(() => {
    if (progress >= percentage) {
      clearInterval(interval);
    } 
  }, 10);
}