import React from 'react';

export default function LoadingBar({ isLoading }) {
  return (
    <div className='fixed top-0 left-0 w-full h-1'>
      <div
        className={`h-full bg-brand ${isLoading ? 'animate-progress' : ''}`}
      ></div>
    </div>
  );
}
