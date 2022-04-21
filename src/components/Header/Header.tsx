import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../../store/services/slice/appSlice';

const Header = (): JSX.Element => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state: IApp) => state.app.darkMode);
  return (
    <header>
    {/* <Link to="/"> */}
      <div className="logo">
        <p>Where in the world?</p>
      </div>
    {/* </Link> */}
    <div className="dark-switch" onClick={()=>dispatch(setDarkMode(!darkMode))}>
      <i className={ darkMode ? 'far fa-sun' : 'far fa-moon'}></i>
      <p>Dark mode</p>
    </div>
  </header>
  )
}

export default Header