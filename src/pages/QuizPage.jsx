import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';

export default function QuizPage({ onFinishQuiz }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);
  const navigate = useNavigate();

  const currentQuestion = questions[currentIndex];

  const handleNext = () => {
    if (!selectedAnswer) return;

    const updatedAnswers = [
      ...userAnswers,
      {
        questionId: currentQuestion.id,
        selected: selectedAnswer,
        isCorrect: selectedAnswer === currentQuestion.answer
      }
    ];

    setUserAnswers(updatedAnswers);
    setSelectedAnswer('');

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Calculate total score and navigate to result page
      const finalScore = updatedAnswers.filter(item => item.isCorrect).length;
      onFinishQuiz(finalScore, questions.length);
      navigate('/result');
    }
  };

  return (
    <div className="page-container quiz-page">
      <div className="card">
        <ProgressBar current={currentIndex + 1} total={questions.length} />
        
        <QuestionCard
          questionData={currentQuestion}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={setSelectedAnswer}
        />

        <div className="action-row">
          <button 
            className="primary-btn" 
            onClick={handleNext}
            disabled={!selectedAnswer}
          >
            {currentIndex + 1 === questions.length ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}