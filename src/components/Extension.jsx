import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState, useContext } from 'react';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import useColor from '../customHook/useColor';
import DarkModeContext from '../context/DarkModeContext';

const Extension = () => {
    const [data, setData] = useState([]);
    const [activeBtn, setActiveBtn] = useState("all");
    const [loading, setLoading] = useState(true);
    const [fileredData, setFilteredData] = useState([]);
    const { bgColor, textColor } = useColor();
    const { darkMode } = useContext(DarkModeContext);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('/data.json');
                const jsonData = await response.json();
                setData(jsonData);
                setFilteredData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleFilter = () => {
        setActiveBtn("active");
        const filtered = data.filter(item => item.isActive === true);
        setFilteredData(filtered);
    };

    const handleFilter2 = () => {
        setActiveBtn("inactive");
        const filtered = data.filter(item => item.isActive === false);
        setFilteredData(filtered);
    };

    const allData = () => {
        setActiveBtn("all");
        setFilteredData(data);
    };

    return (
        <div className="flex flex-col items-center md:h-full mb-10 h-[783px]  px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mt-10 w-[80%] gap-4">
                <h1 className={`text-xl font-bold ${textColor.primary}`}>Extension List</h1>
                <div className="flex flex-wrap gap-2 justify-center">
                    {["all", "active", "inactive"].map((btn, idx) => (
                        <button
                            key={btn}
                            className={`${activeBtn === btn ? 'bg-[tomato]' : 'bg-gray-400'} ${textColor.primary} px-4 py-2 rounded-full focus:outline-none focus:border-2 focus:border-red-500 hover:cursor-pointer`}
                            onClick={() => {
                                if (btn === "all") allData();
                                else if (btn === "active") handleFilter();
                                else handleFilter2();
                            }}
                        >
                            {btn.charAt(0).toUpperCase() + btn.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="loader"></div>
                </div>
            ) : (
                <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-4 border-2 rounded-md ${darkMode ? "border-blue-500" : "border-[#ebecf7]"} mt-8 h-[550px] ${bgColor.lightGray2} overflow-y-scroll w-[80%] `}>
                    {fileredData.map((item, index) => (
                        <div key={index} className={`flex flex-col gap-2 w-[90%] h-[180px] ${bgColor.black} p-4 m-4 rounded-lg shadow-md`}>
                            <div className="flex justify-between gap-4">
                                <img src={item.logo} alt={item.title} className="w-12 h-12 object-cover rounded-md mb-2" />
                                <div className="flex flex-col justify-center">
                                    <h2 className={`text-md font-bold ${textColor.primary}`}>{item.name}</h2>
                                    <p className={` text-[12px] md:text-sm ${textColor.secondary}`}>{item.description}</p>
                                </div>
                            </div>
                            <div className="flex justify-between mt-0 lg:mt-4">
                                <button className="bg-gray-400 text-white px-2 rounded-full w-[50px]  text-[10px] md:text-sm md:w-auto focus:outline-none focus:border-2 focus:border-red-500 hover:cursor-pointer hover:bg-red-500">
                                    Remove
                                </button>
                                <span className='hover:cursor-pointer'>
                                    {item.isActive ? (
                                        <FontAwesomeIcon icon={faToggleOn} style={{ width: '70px', height: '30px', color: "red" }} />
                                    ) : (
                                        <FontAwesomeIcon icon={faToggleOff} style={{ width: '70px', height: '30px' }} />
                                    )}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Extension;
