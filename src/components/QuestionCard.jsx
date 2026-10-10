import React from 'react';
import AnswerOption from './AnswerOption';

export default function QuestionCard({ questionData, selectedAnswer, onSelectAnswer }) {
  return (
    <div className="question-card">
      <h2 className="question-text">{questionData.question}</h2>
      <div className="options-grid">
        {questionData.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            isSelected={selectedAnswer === option}
            onSelect={onSelectAnswer}
          />
        ))}
      </div>
    </div>
  );
}