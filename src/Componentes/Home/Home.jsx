import { useEffect, useState } from "react";
import Nav from "../NavBar/Nav";
import { FaArrowRight } from "react-icons/fa6";
import HomeCard from "./HomeCard";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
    const [TLocations, setTLocations] = useState([])

    const [selectedItem, setSelectedItem] = useState({})
    const [selectedCard_id, setSelectedCard_id] = useState("coxsbazar123")
    useEffect(() => {
        fetch('/tourist_pace.json')
            .then(res => res.json())
            .then(data => {
                setTLocations(data)


            })

    }, [])

    useEffect(() => {
        if (TLocations.length > 0) {
            setSelectedItem(TLocations[0]);
        }
    }, [TLocations]);

    console.log(selectedItem);


    const clickCard = (id) => {
        console.log(id);
        const clickItem = TLocations.find((location) => location.loc_id == id);
        setSelectedItem(clickItem)
        setSelectedCard_id(id)
    }
    return (

        <div className="min-h-screen relative">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${selectedItem?.cover_image_url}`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    zIndex: -1, // Ensure the background stays behind other elements
                }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-55"></div>
            <Nav style={{ zIndex: 1 }}></Nav>
            <div className="mt-20 lg:max-w-7xl mx-auto relative lg:flex gap-2">
                <div className="text-center p-5 lg:text-start lg:p-0">
                    <h1 className="font-bebas_neue text-white text-8xl">{selectedItem?.name}</h1>
                    <p className="lg:w-[455px] font-montserrat text-white leading-6 text-ellipsis overflow-hidden">{selectedItem?.loc_des}</p>
                    <Link to={`/booking/${selectedCard_id}`}>
                        <button className="mx-auto font-medium bg-[#F9A51A] px-7 py-3 flex items-center rounded-md mt-7">
                            Booking <FaArrowRight className="ml-2 mt-0.5" />
                        </button>
                    </Link>

                </div>
                <div className="flex justify-center">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            TLocations.map((location) => (
                                <HomeCard
                                    key={location.loc_id}
                                    location={location}
                                    clickCard={clickCard}
                                    selectedCard_id={selectedCard_id}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="relative flex justify-center mt-10 pb-10 gap-3 ">
                <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center text-2xl cursor-pointer"> <MdKeyboardArrowLeft />  </div>
                <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center text-2xl cursor-pointer"> <MdKeyboardArrowRight /> </div>
            </div>
        </div>

    );
};

export default Home;