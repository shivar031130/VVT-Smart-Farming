import React, { useState } from 'react';
import WaMSN from "../../../assets/images/icon/wap.png";

const ButtonWa = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleClick = () => {
        const number = '60143724652';
        const text = 'VVT SmartFarming';
        const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed z-10 bottom-2 right-2"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="relative">
                {isHovering && (
                    <div className="absolute px-2 py-1 text-black bg-white rounded-md shadow-lg -top-2 right-100">
                        Contact Us
                    </div>
                )}
                <img
                    src={WaMSN}
                    alt="WhatsApp VVT SmartFarming"
                    className="sm:w-20 w-20"
                />
            </div>
        </button>
    );
};

export default ButtonWa;
