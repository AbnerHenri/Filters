import './Style.css'

import Code from '../../Assets/Code.png'

import JS from '../../Assets/JS.png'
import TS from '../../Assets/TS.png'
import PHP from '../../Assets/PHP.png'


import Visibility from '../../Assets/Visibility.png'

function Card(props) {

  function imgTech(type){
    switch (type) {
      case 'JavaScript':
        return JS  

      case 'TypeScript':
        return TS

      case 'PHP':
        return PHP

      default:
        return Code;
    }
  }

  return(
    <div className='Card'>
        <div className='Title'>
          <h3>{props.name}</h3>
        </div>
        
        <div className='Content'>
          <div className='Lang'>
            <img src={imgTech(props.language)} alt='Code' />
            <p>{props.language}</p>
          </div>

          <div className='Visibility'>
            <img src={Visibility} alt='Eye' />
            <p>{props.type}</p>
          </div> 
        </div> 
    </div>
  );
}

export default Card;