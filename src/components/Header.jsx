import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useDarkMode } from '../context/DarkModeContext';

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link
        to='/'
        className='flex items-center  hover:scale-110 transition-all dark:hover:brightness-150'
      >
        <BsYoutube className='text-4xl text-brand' />
        <h1 className='font-bold ml-2 text-3xl sm: hidden'>ReactTube</h1>
      </Link>
      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input
          className='w-7/12 p-2 outline-none border border-gray-200 dark:border-zinc-600 rounded-xl rounded-r-none bg-white dark:bg-black text-grey-50'
          type='text'
          placeholder='검색'
          value={text}
          onChange={handleChange}
        />
        <button className='bg-gray-200 hover:bg-gray-300 dark:bg-zinc-600 dark:hover:bg-zinc-700 px-4 rounded-xl rounded-l-none'>
          <BsSearch />
        </button>
      </form>
      <button
        onClick={toggleDarkMode}
        className='hover:scale-125 hover:text-brand transition-all'
      >
        {darkMode ? <MdDarkMode /> : <MdLightMode />}
      </button>
    </header>
  );
}
