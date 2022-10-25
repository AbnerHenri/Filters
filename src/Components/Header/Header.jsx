import './Style.css'

function Header() {
  return(
    <div className='Header'>
        <div className='Search'>
            <h1>Logo</h1>
            <input type={'text'} placeholder={'Search'}/>
        </div>
    </div>
  );
}

export default Header;