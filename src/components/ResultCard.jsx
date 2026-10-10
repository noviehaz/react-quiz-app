 import React from 'react';

export default function ResultCard({ score, totalQuestions, onRetake, onHome }) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const incorrect = totalQuestions - score;

  return (
    <div className="result-card">
      <h2>Quiz Completed</h2>
      <div className="score-box">
        <span className="score-label">Your score:</span>
        <div className="score-display">{score} / {totalQuestions}</div>
      </div>

      <div className="result-stats">
        <p><strong>Total Questions:</strong> {totalQuestions}</p>
        <p><strong>Correct Answers:</strong> {score}</p>
        <p><strong>Incorrect Answers:</strong> {incorrect}</p>
        <p><strong>Percentage:</strong> {percentage}%</p>
      </div>

      <div className="result-actions">
        <button className="primary-btn" onClick={onRetake}>Retake Quiz</button>
        <button className="secondary-btn" onClick={onHome}>Return Home</button>
      </div>
    </div>
  );
}