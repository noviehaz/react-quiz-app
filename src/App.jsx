import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

export default function App() {
  const [quizResult, setQuizResult] = useState({ score: 0, total: 10 });

  const handleFinishQuiz = (score, total) => {
    setQuizResult({ score, total });
  };

  return (
    <div className="app-layout">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/quiz" 
          element={<QuizPage onFinishQuiz={handleFinishQuiz} />} 
        />
        <Route 
          path="/result" 
          element={
            <ResultPage 
              score={quizResult.score} 
              totalQuestions={quizResult.total} 
            />
          } 
        />
      </Routes>
    </div>
  );
}