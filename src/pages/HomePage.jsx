 import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuizHeader from '../components/QuizHeader';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="page-container home-page">
      <div className="card">
        <QuizHeader 
          title="Welcome to the Frontend Quiz!" 
          subtitle="Test your knowledge on HTML, CSS, JavaScript, and React fundamentals." 
        />
        <button className="primary-btn" onClick={() => navigate('/quiz')}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}