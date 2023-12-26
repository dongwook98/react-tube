import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import LoadingBar from './LoadingBar';
import VideoCard from './VideoCard';

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    ['related', id],
    () => {
      return youtube.relatedVideos(id);
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  return (
    <>
      {isLoading && <LoadingBar isLoading={isLoading} />}
      {error && <p>Something is wrong 😞</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type='list' />
          ))}
        </ul>
      )}
    </>
  );
}
