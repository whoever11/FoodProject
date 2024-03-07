import { useState, useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Home() {
    const sliderRef = useRef(null);
    const scrollAmount = 100; 
    const [images, setImages] = useState([
        { id: 1, url: 'https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg' },
        { id: 2, url: 'https://www.foodandwine.com/thmb/fVmYbaQzXCz1Prx8VxrW9sMcjMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Braciole-FT-RECIPE1122-66acf49cef0e4390bec780945709e7f3.jpg' },
        { id: 3, url: 'https://res.cloudinary.com/general-mills/image/upload/w_800,f_auto/v1708621940/classic-meatballs_ohrjy8.jpg' },
        { id: 4, url: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/korean-bibimbap-flatlay.jpg?w=600&quality=80' },
        { id: 5, url: 'https://hips.hearstapps.com/hmg-prod/images/creamy-tuscan-chicken-index-6583ac66027fc.jpeg?crop=1xw:0.9994942196531792xh;center,top&resize=1200:*' },
        { id: 6, url: 'https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=40%2Csharpen=1%2Cwidth=956/wp-content/uploads/national-fast-food-day.jpg' },
        { id: 7, url: 'https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg' },
        { id: 8, url: 'https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg' },
    ]);

    return (
        <div className="App">
            {/* Left navigation button */}
            <button
                className="nav-btn"
                onClick={() => {
                    const container = sliderRef.current;
                    if (container) {
                        container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
                    }
                }}
            >
               <ArrowBackIosIcon />
            </button>
            {/* Image container */}
            <div className="images-container" ref={sliderRef}>
                {images.map((image) => (
                    <img
                        className="image"
                        alt="sliderImage"
                        key={image.id}
                        src={image.url}
                    />
                ))}
            </div>
            {/* Right navigation button */}
            <button
                className="nav-btn"
                onClick={() => {
                    const container = sliderRef.current;
                    if (container) {
                        container.scrollLeft += scrollAmount; // Scroll right by the specified amount
                    }
                }}
            >
                < ArrowForwardIosIcon/>
            </button>
        </div>
    );
}
