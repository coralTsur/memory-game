import Cards from "./Cards"
function Play({settingsFilter, playerData, updatePlayerData}) {
    const steps = 1;
    const handleScoreUpdate = () => {
        const result = steps * settingsFilter.delay * settingsFilter.col * settingsFilter.row ;
        updatePlayerData(prevPlayerData => ({
            ...prevPlayerData,
            score: result
        }));
    };

    console.log ("in play: ",settingsFilter.row, " score ",playerData.score);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const imageList = ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg'];
    const duplicatedSources = imageList.concat(imageList); // Duplicate the array

    const shuffledSources = shuffleArray(duplicatedSources);

    console.log(shuffledSources);

    const cardList = shuffledSources.map((src, index) => (
        <div key={index} className="col-4">
            <Cards srcImage={src} />
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