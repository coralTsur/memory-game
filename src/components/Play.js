import Cards from "./Cards"
import {useState} from "react";
function Play({settingsFilter, playerData, updatePlayerData}) {
    const imageList = ['/images/0.jpg', '/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg',
        '/images/5.jpg','/images/6.jpg', '/images/7.jpg', '/images/8.jpg', '/images/9.jpg', '/images/10.jpg',
        '/images/11.jpg','/images/12.jpg', '/images/13.jpg', '/images/14.jpg', '/images/15.jpg']


    const [steps, setSteps] = useState(1);
    const [isOpenCards, setIsOpenCards] = useState({ first : false, second : false });

    const handleScoreUpdate = () => {
        const result = steps * settingsFilter.delay * settingsFilter.col * settingsFilter.row ;
        updatePlayerData(prevPlayerData => ({
            ...prevPlayerData,
            score: result
        }));
    };

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        console.log("in shuffle!! ");
        return array;
    }
    const numOfSources =  (settingsFilter.col* settingsFilter.row)/2;

        const duplicatedSources = imageList.slice(0,numOfSources).concat(imageList.slice(0, numOfSources));

    const shuffledSources = shuffleArray(duplicatedSources);

    const cardList = shuffledSources.map((src, index) => (
        <div key={index} className="col-3">
            <Cards srcImage={src} delay = {settingsFilter.delay} isOpenCards = {isOpenCards} setIsOpenCards ={setIsOpenCards}/>
        </div>
    ));

    return(
        <>
            <div className="row">
                {cardList}
            </div>
            <br/>
            <div>
                <button onClick={handleScoreUpdate}>Update Score</button>
            </div>
        </>
    );
}

export default Play;