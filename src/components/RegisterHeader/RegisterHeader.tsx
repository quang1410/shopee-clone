import React from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '../Widgets/Icons/Logo_icon';

const RegisterHeader = () => {
  return (
    <header className='py-5'>
      <div className='mx-auto max-w-7xl px-4'>
        <nav className='flex items-end'>
          <Link to='/'>
            <LogoIcon />
          </Link>
          <div className='ml-5 text-xl lg:text-2xl'>Đăng ký</div>
        </nav>
      </div>
    </header>
  );
};

export default RegisterHeader;
