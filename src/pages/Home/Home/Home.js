import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Photos from '../Photos/Photos';
import Services from '../Services/Services';

const Home = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('photos.json')
            .then(res => res.json())
            .then(data => setPhotos(data));
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div id='photos' className='photo-container'>
                <h3>Photos</h3>
                {
                    photos.map(photo => <Photos
                        key={photo.id}
                        photo={photo}

                    >

                    </Photos>
                    )
                }
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;