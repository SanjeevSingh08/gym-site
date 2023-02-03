import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./GalleryCorousel.scss";

const GalleryCarousel = () => {
  // Create an empty array to store the images
  const images = [];

  // Use the require.context method to dynamically import all images in the folder
  const imageContext = require.context('./photos/', true, /\.(jpeg|jpg|png)$/);

  // Get the keys for all images in the folder
  const imageKeys = imageContext.keys();

  // Loop through the image keys and push the images to the images array
  imageKeys.forEach(key => {
    images.push(imageContext(key));
  });

  return (
    <div className="photo">
      <h1 className='gallery'><span className='stroke-text'>PHOTO</span> GALLERY</h1>
      <Carousel>
        {images.map((image, index) => (
          <div className='img' key={index}>
            <img src={image} alt={`Img ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <div className="blur hero-blur"></div>
    </div>
  );
};

export default GalleryCarousel;
