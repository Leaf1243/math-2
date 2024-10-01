let currentQuestion = 0;  
let correctAnswers = 0;  

function generateQuestion() {  
    const num1 = Math.floor(Math.random() * 100);  
    const num2 = Math.floor(Math.random() * 100);  
    const operation = Math.random() < 0.5 ? '+' : '-'; // '+' または '-' をランダムに選ぶ  

    document.getElementById('question').innerText = `${num1} ${operation} ${num2} = ?`;  

    // 正しい答えを計算して保存  
    const correctAnswer = operation === '+' ? num1 + num2 : num1 - num2;  
    return correctAnswer;  
}  

let correctAnswer = generateQuestion();  

function checkAnswer() {  
    const userAnswer = parseInt(document.getElementById('answer').value);  
    
    if (userAnswer === correctAnswer) {  
        correctAnswers++;  
        document.getElementById('result').innerText = '正解！';  
    } else {  
        document.getElementById('result').innerText = '不正解...';  
        correctAnswers = 0; // リセット  
    }  

    document.getElementById('score').innerText = `現在の正解数: ${correctAnswers}`;  
    
    if (correctAnswers === 10) {  
        alert('ゲームクリア！おめでとうございます！');  
        correctAnswers = 0; // リセット  
    }  

    document.getElementById('answer').value = ''; // 入力フィールドをクリア  
    correctAnswer = generateQuestion(); // 新しい問題を生成  
}  

// 初始状態  
document.getElementById('score').innerText = `現在の正解数: ${correctAnswers}`;  
