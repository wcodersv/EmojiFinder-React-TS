import React from 'react';
import './FieldCards.css';

// Определение интерфейса для свойств компонента
interface FieldCardsProps {
    data: any[];
}

export const FieldCards = ({ data }: FieldCardsProps) => {
    return (
        <div className="field-cards">
            <ul className="card-body">
                {data.map((item: any) => (
                    <li key={item.title} className='card'>
                        <div className='card-inform'>
                            <p className='card-inform__symbol'>{item.symbol}</p>
                            <h2 className="card-inform__title">{item.title}</h2>
                            <p className="card-inform__description">{item.keywords.join(' ')}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
