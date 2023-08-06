import React from 'react';
import './Input.css';

// Определение интерфейса для свойств компонента
interface InputProps {
  handle: (value: string) => void;
}

export const Input = ({ handle }: InputProps) => {
  // Обработчик изменения значения в поле ввода
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    handle(value); // Вызываем переданную функцию обратного вызова handle и передаем в нее введенное значение
  };

  return (
    <div className="input-search">
      <label htmlFor="search" hidden></label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search emoji"
        onChange={handleInputChange}
      />
    </div>
  );
};
