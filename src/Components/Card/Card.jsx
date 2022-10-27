import './Style.css'

import Code from '../../Assets/Code.png'
import Visibility from '../../Assets/Visibility.png'

function Card(props) {

  return(
    <div className='Card'>
        <div className='Title'>
          <h3>{props.name}</h3>
        </div>
        
        <div className='Content'>
          <div className='Lang'>
            <img src={Code} alt='Code' />
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