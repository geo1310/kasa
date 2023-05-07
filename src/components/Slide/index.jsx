import '../../styles/Slide.css';

function Slide(props) {

  return (
    <div className='slide'>
            <h2 className='slide-titre'>
              {props.titre}
              <button onClick={ToggleText}><img className='slide-icone' alt="slide-icone" src={vectorBas}></img></button>
            </h2>
            {props.visible && <p className='slide-text'>
              {props.titre}
            </p>}
          </div>
  );
}

export default Slide;
