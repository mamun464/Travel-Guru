
import PropTypes from 'prop-types';
const RoomDetails = ({ room }) => {
    const { title, image_url, capacity, num_reviews, rating, price_per_night } = room;
    return (
        <div className=''>
            <div className="card card-side bg-base-100  mb-11 font-montserrat">
                <figure className='w-[270px] h-[188px]'><img src={image_url} alt="Room_image" /></figure>
                <div className="ml-5 w-[310px]">
                    <h2 className="card-title text-lg">{title}</h2>
                    {/* <p>Click the button to watch on Jetflix app.</p> */}
                    <div className='text-[#6A6A6A] '>
                        <p className='mt-[14px]'>{capacity?.guests} guests    {capacity?.bedrooms} bedrooms    {capacity?.beds} beds    {capacity?.baths} baths</p>
                        <p className='mt-[14px]'>Wif Air conditioning Kitchen</p>
                        <p className='mt-[14px]'>Cancellation fexibility availiable</p>
                        <div className='mt-5 flex justify-between'>
                            <div className='flex gap-2'>
                                <img className='w-4 h-4' src="/star_1_.png" alt="star" />
                                <p className='text-black text-sm font-medium'>{rating} ({num_reviews})</p>
                            </div>
                            <div>
                                <p className='font-light'>
                                    <span className='text-black text-[18px] font-medium'>${price_per_night}/</span>night
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

RoomDetails.propTypes = {
    room: PropTypes.object.isRequired,
    // clickCard: PropTypes.func.isRequired,
    // selectedCard_id: PropTypes.string.isRequired,
};

export default RoomDetails;