import Banner from '../Banner/Banner';
import Photos from '../Photos/Photos';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Photos></Photos>
        </div>
    );
};

export default Home;