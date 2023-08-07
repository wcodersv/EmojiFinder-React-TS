import React from 'react'

interface CardProps {
    title: string;
    symbol: string;
    keywords: string[];
}

export const Card = ({ title, symbol, keywords }: CardProps) => {
    return (
        <li key={title} className='card'>
            <div className='card-inform'>
                <p className='card-inform__symbol'>{symbol}</p>
                <h2 className="card-inform__title">{title}</h2>
                <p className="card-inform__description">{keywords.join(' ')}</p>
            </div>
        </li>
    )
}
