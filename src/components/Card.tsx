// libs
import { SyntheticEvent } from 'react';

// models
import { CardModel } from '../models/CardModel';

// styles
import './Card.scss';

interface CardProps {
    data: CardModel
}

function handleButtonClick(evt: SyntheticEvent) {
    evt.preventDefault();

    const dogName = (evt.target as HTMLElement).getAttribute('data-dog-name'),
        text = `You clicked ${dogName || 'a dog'}.`;

    alert(text);
}

function Card({ data }: CardProps) {
    return (
        <a href={data.wikiUrl || 'https://google.com'} target="_blank" className="app-card" rel="noreferrer">
            <div className="app-card__header">
                <h4>{data.name}</h4>
            </div>
            <div className="app-card__image">
                <img src={data.imageUrl} alt={data.name} />
            </div>
            <div className="app-card__body">
                <ul>
                    {
                        data.infoList.map(
                            (item, i) => <li key={`${data.id}-${i}`}><strong>{item.key}</strong>: {item.value}</li>
                        )
                    }
                </ul>
            </div>
            <div className="app-card__footer">
                <button type="button" onClick={handleButtonClick} data-dog-name={data.name}>Action</button>
            </div>
        </a>
    );
}

export default Card;