// Componens
import Card from './Card';

// Styles
import { CardModel } from '../models/CardModel';
import './CardList.scss';

interface CardListProps {
    cardList: CardModel[]

}

function CardList({ cardList }: CardListProps) {
    return (
        <article className="app-card-list">
            {cardList.map(card => <Card data={card} key={card.id} />)}
        </article>
    );
}

export default CardList;