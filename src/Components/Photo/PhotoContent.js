import React from 'react'
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import styles from './PhotoContent.module.css'

const PhotoContent = ({ data }) => {
    const { photo, comments } = data;
    return (
        <div className={styles.photo}>
            <div className={styles.img}>
                <img src={photo.src} alt={photo.title} />
            </div>
            <div className={styles.details}>
                <div>
                    <p className={styles.author}>
                        <Link to={`/perfi/${photo.author}`}/>@{photo.author}
                    <span className={styles.vizualizacoes}>{photo.acessos}</span>
                    </p>
                    <h1 className='title'><Link to={`/foto/${photo.id}`}>{photo.title}</Link></h1>
                    <ul className={styles.attributes}>
                        <li>{photo.peso} Kg</li>
                        <li>{photo.idade === 1 ? photo.idade+' ano': photo.idade+' anos' }</li>
                    </ul>
                </div>
            </div>
            <PhotoComments id={photo.id} comments={comments}/>
        </div>
    )
}

export default PhotoContent