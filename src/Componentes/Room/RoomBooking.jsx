import { useParams } from "react-router-dom";
import Nav_2 from "../NavBar/Nav_2";
import { useEffect, useState } from "react";
import RoomDetails from "./RoomDetails";


const RoomBooking = () => {
    const { id } = useParams();
    const [TLocations, setTLocations] = useState([])
    // const [selectedItemRooms, setSelectedItemRooms] = useState([])
    const [selectedItem, setSelectedItem] = useState({})
    useEffect(() => {
        fetch('/tourist_pace.json')
            .then(res => res.json())
            .then(data => {
                setTLocations(data)
            })

    }, [])



    useEffect(() => {
        const findData = TLocations.find(item => item.loc_id == id)
        setSelectedItem(findData)
        // setSelectedItemRooms(selectedItem.rooms)
    }, [TLocations, id])

    console.log("------>", selectedItem);
    // console.log("+++++++>", selectedItemRooms);

    return (
        <div className="max-w-7xl mx-auto">
            <Nav_2></Nav_2>
            <div className="mt-4">
                <p className="text-[#2B2B2B]">252 stays <span>Apr 13-17 3</span> guests</p>
                <h1 className="text-2xl font-bold mb-6">Stay in {selectedItem?.name}</h1>

                <div className="flex">
                    <div className="flex-1">
                        {selectedItem && selectedItem.rooms && selectedItem.rooms.length > 0 ? (
                            selectedItem.rooms.map(room => (
                                <RoomDetails
                                    key={room.id}
                                    room={room}
                                />
                            ))
                        ) : (
                            <p>No rooms available</p>
                        )}
                    </div>

                    <div>
                        <img src="/map.png" alt="map" />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default RoomBooking;