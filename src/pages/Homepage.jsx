import Picture from '../components/Picture';
import { useEffect, useState } from 'react';

const Homepage = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(`https://cwbarry.pythonanywhere.com/image/`)
      .then(data => data.json())
      .then(data => setPhotos(data));
  }, []);
  const { images } = photos;
  return (
    <div>
      <h1>Image Galery</h1>
      <ul className="pictures">
        {images?.map((item, index) => {
          return <Picture key={index} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default Homepage;
