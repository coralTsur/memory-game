import Cards from "./Cards"
function Play({settingsFilter}) {

    console.log ("in play: ",settingsFilter.row);
    const imageList = ['/images/8.jpg','/images/2.jpg','/images/1.jpg'];
    const cardList = imageList.map((src, index) => (
        <Cards key={index} srcImage={src} />
    ));
    return(
        <>
            <div>
                {cardList}
            </div>
            <div className="row">
                <Cards srcImage = '/images/5.jpg'></Cards>
            </div>
        </>
    );
}
export default Play;