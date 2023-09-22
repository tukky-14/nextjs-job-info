import React from 'react';

type Props = {
    title: string;
};

const Header = (props: Props) => {
    const { title } = props;

    return (
        <h2 className="mb-10 text-center text-xl font-bold text-gray-600 lg:text-2xl">{title}</h2>
    );
};

export default Header;
