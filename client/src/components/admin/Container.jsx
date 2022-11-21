import React, { useContext, useEffect } from 'react';

import SingleCustomer from './SingleCustomer';
import { BookContext } from '../../contexts/BookContext';

const Container = () => {
    const {
        bookState: { isBookSuccess, listBooking },
        showBookSuccess,
        addBooking,
        getBooking,
    } = useContext(BookContext);

    useEffect(() => {
        getBooking();
    }, []);

    let body = null;

    if (listBooking.length === 0) {
        body = (
            <div className="w-full my-10 text-center text-textColor">
                CUSTOMER BOOKING LIST IS EMPTY !
            </div>
        );
    } else {
        body = (
            <div className="w-full my-2">
                {listBooking.map((item) => (
                    <div key={item.id} className="w-full">
                        <SingleCustomer item={item} />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <section className="w-full max-w-[1140px] pt-[120px] mx-4 md:mx-6 lg:mx-10 xl:mx-auto">
            <h3 className="text-2xl text-textColor uppercase font-medium">
                customer booking list
            </h3>
            <div className="w-full mt-10">
                <div className="flex items-center p-4 border-b-[1px] border-textColor">
                    <span className="w-[5%] text-textColor text-lg font-medium uppercase">
                        id
                    </span>
                    <span className="w-[20%] text-textColor text-lg font-medium uppercase">
                        customer
                    </span>
                    <span className="w-[20%] text-textColor text-lg font-medium uppercase">
                        date
                    </span>
                    <span className="w-[20%] text-textColor text-lg font-medium uppercase">
                        time
                    </span>
                    <span className="w-[20%] text-textColor text-lg font-medium uppercase">
                        service
                    </span>
                </div>
                <div className="w-full my-2">{body}</div>
            </div>
        </section>
    );
};

export default Container;
