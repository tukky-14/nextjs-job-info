import React from 'react';

type Props = {
    title: string;
};

const Header = (props: Props) => {
    const { title } = props;

    return (
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
            {title}
        </h2>
    );
};

export default Header;
