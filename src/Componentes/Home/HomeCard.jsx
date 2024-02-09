
import PropTypes from 'prop-types';


const HomeCard = ({ location, clickCard, selectedCard_id }) => {
    const { loc_id, cover_image_url, name } = location;
    const borderColor = selectedCard_id === loc_id ? '#FBBC04' : '#C7C8CC';
    return (
        <div onClick={() => { clickCard(loc_id) }} className={`w-[270px] h-[416px] rounded-[20px] shadow-2xl border-4 border-solid border-[${borderColor}] cursor-pointer`} style={{
            backgroundImage: `linear-gradient(0deg, #000 0.1%, rgba(0, 0, 0, 0.00) 69.96%), url(${cover_image_url})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',


        }}>
            <h1 className="text-white font-bebas_neue text-4xl absolute bottom-7 ml-5">{name}</h1>

        </div>



    );
};

HomeCard.propTypes = {
    location: PropTypes.object.isRequired,
    clickCard: PropTypes.func.isRequired,
    selectedCard_id: PropTypes.string.isRequired,
};

export default HomeCard;