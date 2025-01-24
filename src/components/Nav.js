import { useState } from 'react';
import { fetchSearch ,clearSearched} from '../actions/gameActions';
import logo from '../logo.webp'
import { useDispatch } from 'react-redux';
const Nav=()=>{
    const dispatch=useDispatch();
    const [text,setText]=useState('');
    const inputHandler=(e)=>{
        setText(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(fetchSearch(text))
        setText('')
    }
    const clearSearch=()=>{
        dispatch(clearSearched());
    }
    return(
        <>
        <div className="nav">
            <div className="logo" onClick={clearSearch}>
                <img src={logo} alt="" />
                <h1>GameHub</h1>
            </div>
            <form className="search" onSubmit={submitHandler}>
                <input type="text" placeholder="Search Game..." value={text} onChange={inputHandler} />
                <button type='submit'>search</button>
            </form>
        </div>
        </>
    )
}
export default Nav;