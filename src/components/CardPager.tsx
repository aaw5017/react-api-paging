import './CardPager.scss';

interface CardPagerProps {
    numPages: number;
    activeIndex: number;
    isDisabled: boolean;
    onUpdate: (pageNumber: number) => void
}

function CardPager(props: CardPagerProps) {
    const { numPages, activeIndex, isDisabled, onUpdate } = props;

    const buttonArr = Array.from({ length: numPages }, (x, i) => i);

    return (
        <article className="app-pager">
            {buttonArr.map(i => (
                <button disabled={isDisabled}
                    className={i === activeIndex ? 'is-selected' : undefined}
                    type="button" onClick={() => onUpdate(i) } key={i}>{i + 1}</button>
            ) )}
        </article>
    );
}

export default CardPager;