import './Style.css'


function Card(props) {
  return(
    <div className='Card'>
        <div className='Title'>
          <h3>{props.name}</h3>
        </div>
        
        <div className='Content'>
          <p>{props.language}</p>
          <p>{props.type}</p>
        </div> 
    </div>
  );
}

export default Card;