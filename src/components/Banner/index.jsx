import '../../styles/Banner.css';
import image from '../../assets/mer-cote.webp'

function Banner() {
  return (
    <div className="banner">
        <img className='banner-img' src={image} alt='mer-cote'></img>
        <h1 className='banner-text'>Chez vous, partout et ailleurs</h1>
	</div>
  );
}

export default Banner;
