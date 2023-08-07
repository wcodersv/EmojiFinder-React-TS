import React from 'react';
import './FieldCards.css';
import { EmojiData } from '../../app/App';
import Card from '../Card';

// Определение интерфейса для свойств компонента
interface FieldCardsProps {
    data: EmojiData[];
}

export const FieldCards = ({ data }: FieldCardsProps) => {
    return (
        <div className="field-cards">
            <ul className="card-body">
                {data.map((item: any) => (
                    <Card
                        key={item.title}
                        title={item.title}
                        symbol={item.symbol}
                        keywords={item.keywords}
                    />
                ))}
            </ul>
        </div>
    );
};
