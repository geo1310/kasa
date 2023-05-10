import vectorBas from '../../assets/icones/VectorBas.png'
import vectorHaut from '../../assets/icones/VectorHaut.png'

<<<<<<< HEAD:src/components/Collapse/index.jsx
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
=======
function Slide(props) {
    function ToggleText(visible, setVisible) {
        setVisible(!visible)
    }

    return (
        <div className="slide">
            <h2 className="slide-titre">
                {props.titre}
                <button
                    onClick={() => ToggleText(props.visible, props.setVisible)}
                >
                    {!props.visible ? (
                        <img
                            className="slide-icone"
                            alt="slide-icone"
                            src={vectorBas}
                        ></img>
                    ) : (
                        <img
                            className="slide-icone"
                            alt="slide-icone"
                            src={vectorHaut}
                        ></img>
                    )}
                </button>
            </h2>
            {props.visible && <p className="slide-text">{props.text}</p>}
        </div>
    )
}

export default Slide
>>>>>>> 8606e72c5202bff25acea6e5f124ae3ae5bfd521:src/components/Slide/index.jsx
