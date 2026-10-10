 import React from 'react';

export default function AnswerOption({ option, isSelected, onSelect }) {
  return (
    <button
      type="button"
      className={`option-btn ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(option)}
    >
      <span className="radio-circle">{isSelected ? '●' : '○'}</span>
      <span className="option-text">{option}</span>
    </button>
  );
}