import './Style.css'


function Card(props) {
  return(
    <div className='Card'>
        <h2>{props.name}</h2>
        <p>{props.language}</p>
        <p>{props.type}</p>
    </div>
  );
}

export default Card;