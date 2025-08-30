import React from 'react';

interface HeaderProps {
    title: string,
    center?: boolean
}

const Header: React.FC<HeaderProps> = ({ title, center= true }) => {
    return (
        <header className='w-full py-4 px-2 bg-secondary text-white shadow-md h-fit'>
            <h1 className={` font-header text-2xl font-bold ${center ?  'text-center' : ''}`}>
                {title}
            </h1>
        </header>
    )
}

export default Header;