import React, { useContext } from 'react';

import { BookContext } from '../../contexts/BookContext';

const SingleCustomer = ({ item }) => {
    const { id, phone_number, set_date, set_hour, service } = item;

    const {
        bookState: { isBookSuccess, listBooking },
        showBookSuccess,
        addBooking,
        getBooking,
        deleteBooking,
        showDeleteSuccess,
    } = useContext(BookContext);

    const handleDelete = async (id) => {
        await deleteBooking(id);
        showDeleteSuccess(true);
        setTimeout(() => {
            showDeleteSuccess(false);
        }, 4000);
    };

    return (
        <div className="w-full flex items-center p-5 text-textColor text-md border-b-[1px] border-textColor">
            <span className="w-[5%]">{id}</span>
            <span className="w-[20%]">{phone_number}</span>
            <span className="w-[20%]">{set_date}</span>
            <span className="w-[20%]">{set_hour}</span>
            <span className="w-[20%]">{service}</span>
            <button className="mr-3 bg-textColor text-white px-3 rounded-md hover:opacity-[0.7] transition-all duration-200 ease-in-out">
                Edit
            </button>
            <button
                onClick={() => handleDelete(id)}
                className="ml-3 bg-textColor text-white px-2 rounded-md hover:opacity-[0.7] transition-all duration-200 ease-in-out"
            >
                Delete
            </button>
        </div>
    );
};

export default SingleCustomer;
