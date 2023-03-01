import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import styles from './FeedPhotos.module.css';
import { useSelector } from 'react-redux';

const FeedPhotos = ({ setModalPhoto }) => {
  const { list } = useSelector((state) => state.feed);
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {list.map((photo, index) => (
        <FeedPhotosItem
          key={`${list.id} ${index}`}
          photo={photo}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </ul>
  );
};

export default FeedPhotos;