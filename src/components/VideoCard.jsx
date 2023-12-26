import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/date';

export default function VideoCard({ video, type }) {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const isList = type === 'list';
  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };

  return (
    <li className={`${isList ? 'flex gap-1 m-2 mt-0' : ''}`}>
      <img
        className={`rounded-md cursor-pointer ${
          isList ? 'w-60 mr-2' : 'w-full'
        }`}
        src={thumbnails.medium.url}
        alt={title}
        onClick={handleClick}
      />
      <div>
        <p
          className='font-semibold my-2 mt-0 line-clamp-2 cursor-pointer  hover:underline underline-offset-2'
          onClick={handleClick}
        >
          {title}
        </p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
