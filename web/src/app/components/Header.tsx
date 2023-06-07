import logo from '../assets/logo.svg';

export function Header() {
    return (
        <div className='bg-gray-700 flex items-center justify-center'>
            <img src={logo} alt="" />
        </div>
    );
};