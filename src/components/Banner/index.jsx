import '../../styles/Banner.css';

function Banner(props) {

  return (
    <div className="banner">
        <img className='banner-img' src={props.img} alt={props.img}></img>
        {props.text ? <h1 className='banner-text'>{props.text}</h1> : null}
	</div>
  );
}

export default Banner;
