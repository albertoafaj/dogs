import React from 'react'
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import styles from './PhotoDelete.module.css'

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  const token = window.localStorage.getItem('token')

  async function handleClick(event) {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    };
  }

  return (
    <div>
      {loading ? 
      <button className={styles.detele} disabled>Deletar</button> 
      :
      <button onClick={handleClick} className={styles.detele}>Deletar</button>
    }
      </div>
  )
}

export default PhotoDelete
