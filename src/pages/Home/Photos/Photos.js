import React from 'react';
import { useEffect, useState } from 'react';
import Photo from '../Photo/Photo';
import './Photos.css'



const Photos = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('photos.json')
            .then(res => res.json())
            .then(data => setPhotos(data));
    }, [])
    return (
        <div id='photos' className='container' >
            <div className="row">
                <h1 className='service-header text-center mt-5 mb-4 p-0'>Photo Gallery</h1>
                <div className='photo-container' style={{ padding: "0 px" }}>
                    {
                        photos.map(photo => <Photo
                            key={photo.id}
                            photo={photo}
                        ></Photo>
                        )
                    }
                </div>

            </div>

        </div>
    );
};

export default Photos;