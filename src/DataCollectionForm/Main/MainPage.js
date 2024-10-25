import React, { useState } from 'react';
import PersonalInformation from '../Components/personalInformation';
import HotelInformation from '../Components/hotelInformation';
import SocialMediaInfo from '../Components/SocialMediaInfo';
// App Component
function MainPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <div>
            {currentPage === 1 ? <PersonalInformation /> : currentPage === 2 ? <HotelInformation /> : currentPage === 3 ? <SocialMediaInfo /> : null}
            <div className='flex items-center justify-end gap-5 mt-3'>
                <button className='border border-black px-2 rounded-sm' onClick={handlePreviousPage} disabled={currentPage === 1}>
                    {"<< Back"}
                </button>
                <button className='border border-black px-2 rounded-sm' onClick={handleNextPage} disabled={currentPage === totalPages}>
                    {"Next >>"}
                </button>
            </div>
        </div>
    );
}

export default MainPage;
