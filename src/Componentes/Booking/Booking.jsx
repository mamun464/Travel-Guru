import { Link, useParams } from "react-router-dom";
import Nav from "../NavBar/Nav";
import { useEffect, useState } from "react";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Booking = () => {
    const { id } = useParams();
    const [TLocations, setTLocations] = useState([])
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        fetch('/tourist_pace.json')
            .then(res => res.json())
            .then(data => {
                setTLocations(data)
            })

    }, [])
    const selectedItem = TLocations.find(item => item.loc_id == id)

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
            <div className="mt-5 p-5 lg:p-0 lg:mt-28 max-w-7xl mx-auto relative lg:flex lg:justify-between gap-2">
                <div className="">
                    <h1 className="text-center lg:text-start font-bebas_neue text-white text-8xl">{selectedItem?.name}</h1>
                    <p className="text-center lg:text-start lg:w-[455px] font-montserrat text-white leading-6 text-ellipsis overflow-hidden">{selectedItem?.loc_des}</p>


                </div>
                <div className="lg:w-[470px] mt-10 lg:mt-0 bg-white p-7 font-montserrat rounded-md">
                    <div className="">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="text-[#818181] font-medium">Origin</span>
                            </div>
                            <input
                                type="text"
                                value={"Dhaka"}
                                placeholder="Start Journey"
                                className="w-full p-4 rounded-md text-[#000] font-bold"
                                style={{ backgroundColor: '#f2f2f2' }}
                            />


                        </label>
                    </div>
                    <div className="">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="text-[#818181] font-medium">Destination</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Start Journey"
                                value={selectedItem?.name}
                                className="w-full p-4 rounded-md text-[#000] font-bold"
                                style={{ backgroundColor: '#f2f2f2' }}
                            />


                        </label>
                    </div>

                    <div className="flex justify-between gap-4">
                        <div className="">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="text-[#818181] font-medium">From</span>
                                </div>
                                <div className="relative">
                                    <DatePicker
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                        placeholderText="Start Date"
                                        className="w-full p-4 rounded-md text-[#000] font-bold bg-[#f2f2f2] cursor-pointer"
                                    />
                                    <img className="absolute top-1/3 right-3 w-[18px] h-5" src="/calender_icon.png" alt="Calender" />
                                </div>
                            </label>
                        </div>
                        <div className="">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="text-[#818181] font-medium">To</span>
                                </div>
                                <div className="relative">
                                    <DatePicker
                                        selected={endDate}
                                        onChange={date => setEndDate(date)}
                                        placeholderText="End Date"
                                        className="w-full p-4 rounded-md text-[#000] font-bold bg-[#f2f2f2] cursor-pointer"
                                    />
                                    <img className="absolute top-1/3 right-3 w-[18px] h-5" src="/calender_icon.png" alt="Calender" />
                                </div>
                            </label>
                        </div>
                    </div>

                    <Link to={`/booking-room/${selectedItem?.loc_id}`}>
                        <button className="font-montserrat font-medium text-black bg-[#F9A51A] py-5 w-full rounded-md mt-5">Start Booking</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Booking;