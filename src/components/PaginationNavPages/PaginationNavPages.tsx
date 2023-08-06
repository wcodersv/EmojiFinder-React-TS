import React from 'react';
import './PaginationNavPages.css';

// Определение интерфейса для свойств компонента
interface PaginationNavPagesProps {
    currentPage: number; // Текущая страница
    totalPages: number; // Общее количество страниц
    onPageChange: (newPage: number) => void; // Функция обработки изменения страницы
}

export const PaginationNavPages = ({ currentPage, totalPages, onPageChange }: PaginationNavPagesProps) => {
    // Обработчик клика по номеру страницы
    const handlePageClick = (newPage: number) => {
        onPageChange(newPage);
    };

    // Функция для отображения номеров страниц
    const renderPageNumbers = () => {
        const pageNumbers = []; // Массив для хранения JSX элементов номеров страниц
        const maxDisplayedPages = 5; // Максимальное количество отображаемых номеров страниц

        // Вычисление начальной и конечной страницы для отображения
        const startPage = Math.max(0, currentPage - Math.floor(maxDisplayedPages / 2));
        const endPage = Math.min(totalPages - 1, startPage + maxDisplayedPages - 1);

        // Добавляем "First" в навигацию
        if (startPage >= 0) {
            pageNumbers.push(
                <li key="first" onClick={() => handlePageClick(0)}>
                    First
                </li>
            );
        }

        // Создаем элементы для номеров страниц
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <li
                    key={i}
                    className={i === currentPage ? 'active' : ''}
                    onClick={() => handlePageClick(i)}
                >
                    {i + 1}
                </li>
            );
        }

        // Добавляем "Last" в навигацию
        if (endPage <= totalPages - 1) {
            pageNumbers.push(
                <li key="last" onClick={() => handlePageClick(totalPages - 1)}>
                    Last
                </li>
            );
        }

        return pageNumbers;
    };

    return (
        <div className="pagination-nav__pages">
            <ul className="pages-bar">
                {renderPageNumbers()}
            </ul>
            {/* Отображаем общее количество страниц */}
            <p>Total Pages: {totalPages || 0}</p>
        </div>
    );
};
