// Libs
import { useState, useEffect } from 'react';

// Components
import CardList from './CardList';
import CardPager from './CardPager';

// Services
import { CardService } from '../services/CardService';

// Models
import { CardModel } from '../models/CardModel';

// Styles
import './App.scss';

function App() {
    const [pageNum, setPageNum] = useState<number>(0),
        [cardList, setCardList] = useState<CardModel[]>([]),
        [isReady, setIsReady] = useState<boolean>(false),
        [isLoading, setIsLoading]= useState<boolean>(false);

    useEffect(() => {

        setIsLoading(true);

        const getDoggoData: any = async () => {
            const doggoData = await CardService.get({ limit: 10, page: pageNum });

            setCardList(doggoData);

            !isReady && setIsReady(true);

            setIsLoading(false);
        };

        try {
            getDoggoData();
        } catch (err) {
            console.error(err);
        }


    }, [isReady, pageNum]);

    const handlePagerUpdate = (pageNum: number) => {
        setPageNum(pageNum);
    };

    const numPages = 10;

    return isReady ? (
        <>
            <header>
                <h2>The Doggo Gallery</h2>
            </header>
            <nav className="top-nav">
                <CardPager onUpdate={handlePagerUpdate} activeIndex={pageNum} numPages={numPages} isDisabled={isLoading} />
            </nav>
            <main>
                <CardList cardList={cardList}/>
            </main>
            <nav className="bottom-nav">
                <CardPager onUpdate={handlePagerUpdate} activeIndex={pageNum} numPages={numPages} isDisabled={isLoading} />
            </nav>
        </>
    ) : <header><h2>Loading...</h2></header>;
}

export default App;
