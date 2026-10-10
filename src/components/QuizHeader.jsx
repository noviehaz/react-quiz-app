import react from 'react';
export default function QuizHeader({ title, subtitle }) {
  return (
    <header className="quiz-header">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}