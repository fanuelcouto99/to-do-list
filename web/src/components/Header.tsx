import Image from 'next/image';
import logo from '../assets/logo.svg';

export function Header() {
    return (
        <div className='bg-gray-700 flex items-center justify-center py-[4.5rem]'>
            <Image src={logo} alt="To-Do List" className='h-10'/>
        </div>
    );
};