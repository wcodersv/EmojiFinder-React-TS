import React from 'react';
import './PaginationNavPerpage.css'

// Определение интерфейса для свойств компонента
interface PaginationNavPerpageProps {
  cardsPerPage: number; // Количество карточек на странице
  // Функция обработки изменения количества карточек на странице
  onPerPageChange: (perPage: number) => void;
};

export const PaginationNavPerpage = ({ cardsPerPage, onPerPageChange }: PaginationNavPerpageProps) => {
  // Обработчик изменения количества карточек на странице
  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPerPage = parseInt(event.target.value, 10); // Получение нового значения количества карточек
    onPerPageChange(newPerPage); // Вызов функции обработки изменения количества карточек
  };

  return (
    <div className="pagination-nav__perpage">
      <p>Per page</p>
      <select
        name="list-pages"
        id="list-pages"
        className="list"
        value={cardsPerPage} // Значение выбранного количества карточек
        onChange={handlePerPageChange} // Обработчик изменения количества карточек
      >
        <option value="12">12</option>
        <option value="24">24</option>
        <option value="48">48</option>
      </select>
    </div>
  );
};
