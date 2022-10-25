import './Style.css'

function Header() {
  return(
    <div className='Header'>
        <div className='Search'>
            <input type={'text'} placeholder={'Search'}/>
        </div>
    </div>
  );
}

export default Header;