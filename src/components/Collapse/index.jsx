import vectorBas from '../../assets/icones/VectorBas.png'
import vectorHaut from '../../assets/icones/VectorHaut.png'

import '../../styles/Collapse.css'

function Collapse(props) {

  function ToggleText(visible, setVisible){
    setVisible(!visible)
  };

  return (
    <div className='collapse'>
            <h2 className='collapse-titre'>
              {props.titre}
              <button onClick={() => ToggleText(props.visible, props.setVisible)}>
                {!props.visible ?
                  <img className='collapse-icone' alt="collapse-icone" src={vectorBas}></img>
                  :
                  <img className='collapse-icone' alt="collapse-icone" src={vectorHaut}></img>
                }
              </button>
            </h2>
            {props.visible && <p className='collapse-text'>
              {props.text}
            </p>}
          </div>
  );
}

export default Collapse;
