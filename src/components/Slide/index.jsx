import vectorBas from '../../assets/icones/VectorBas.png'
import vectorHaut from '../../assets/icones/VectorHaut.png'

function Slide(props) {

  function ToggleText(visible, setVisible){
    setVisible(!visible)
  };

  return (
    <div className='slide'>
            <h2 className='slide-titre'>
              {props.titre}
              <button onClick={() => ToggleText(props.visible, props.setVisible)}>
                {!props.visible ?
                  <img className='slide-icone' alt="slide-icone" src={vectorBas}></img>
                  :
                  <img className='slide-icone' alt="slide-icone" src={vectorHaut}></img>
                }
              </button>
            </h2>
            {props.visible && <p className='slide-text'>
              {props.text}
            </p>}
          </div>
  );
}

export default Slide;
