import React, { useEffect, useState } from 'react';
import './styles/App.css';

import Layout from '../layout/Layout';
import Input from '../ui/Input';
import FieldCards from '../components/FieldCards';
import PaginationNavPages from '../components/PaginationNavPages';
import PaginationNavPerpage from '../components/PaginationNavPerpage';
import Loader from '../ui/Loader';


 export interface EmojiData {
  title: string;
  symbol: string;
  keywords: string[];
}

function App() {
  // Хранение значения из Input
  const [inputValue, setInputValue] = useState('');
  // Состояние для отображения загрузки
  const [isLoading, setLoading] = useState(false);
  // Состояние для хранения массива данных карточек
  const [data, setData] = useState<EmojiData[]>([]);
  // Состояние для текущей страницы
  const [currentPage, setCurrentPage] = useState(0);
  // Состояние для количества карточек на странице
  const [cardsPerPage, setCardsPerPage] = useState(12);
  // Состояние для хранения обработанных данных эмодзи с уникальными ключевыми словами
  const [dataUniqueWords, setDataUniqueWords] = useState<EmojiData[]>([]);

  // Загрузка данных при изменении inputValue, currentPage или cardsPerPage
  useEffect(() => {
    const fetchCards = async () => {
      let url: string;
      if (!inputValue) {
        url = "http://api.codeoverdose.space/api/emoji/v1";
      } else {
        url = `http://api.codeoverdose.space/api/emoji/v1/find/?query=${inputValue}`;
      }

      try {
        setLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);

      } catch (error) {
        setLoading(false);
        console.log("Произошла ошибка", error);
        alert('Упсссс, ошибка не моя, не работает API')
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [inputValue, currentPage, cardsPerPage]);

  // Обработка данных при изменении массива data
  useEffect(() => {
    if (!Array.isArray(data) || data.length === 0) {
      // Если data не является массивом или пуст, устанавливаем пустой массив в dataUniqueWords
      setDataUniqueWords([]);
    } else {
      const processedData = data.map((item: any) => {
        const keywordsArray = item.keywords.split(' ').filter((word: string) => word);
        const setWords = [...new Set(keywordsArray)];
        return {
          ...item,
          keywords: setWords
        };
      });

      setDataUniqueWords(processedData);
    }
  }, [data]);


  // Обработчик изменения значения Input
  const handleInput = (value: string) => {
    setInputValue(value);
    setCurrentPage(0); // Сброс текущей страницы при изменении значения Input
  };

  //Функции для обработки изменения текущей страницы и количества карточек на странице
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Обработчик изменения количества карточек на странице
  const handlePerPageChange = (perPage: number) => {
    setCardsPerPage(perPage);
    setCurrentPage(0); // Сброс текущей страницы при изменении количества карточек на странице
  };

  return (
    <>
      <Layout>
        <>
          <div className="main">
            <Input handle={handleInput} />
            <Loader loading={isLoading} />
            {/* Отображение карточек с уникальными ключевыми словами */}
            <FieldCards
              data={dataUniqueWords.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage)}
            />
          </div>

          <div className="pagination-nav">
            {/* Навигация по страницам */}
            <PaginationNavPages
              currentPage={currentPage}
              totalPages={Math.ceil(data.length / cardsPerPage)}
              onPageChange={handlePageChange}
            />
            {/* Навигация по количеству карточек на странице */}
            <PaginationNavPerpage
              cardsPerPage={cardsPerPage}
              onPerPageChange={handlePerPageChange}
            />
          </div>
        </>
      </Layout>
    </>
  );
}


export default App;
