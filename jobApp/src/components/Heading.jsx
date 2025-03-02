import React from 'react';

export default function Heading({ title, subtitle, align = "center" }) {
    return (
        <div className={`text-${align} mb-2 mt-20`}>
            <h2 className="text-4xl font-bold text-black">{title}</h2>
            {subtitle && <p className="text-xl text-gray-500 mt-2">{subtitle}</p>}
        </div>
    );
}
