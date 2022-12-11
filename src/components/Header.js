import {Link, Route, useHistory} from "react-router-dom";


function Header({email}) {
  const history = useHistory();

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    email = '';
    history.push('/sign-in');
  }
  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__nav">
        <Route path='/sign-up'>
          <Link to='/sign-in' className="header__link">Войти</Link>
        </Route>
        <Route path='/sign-in'>
          <Link to='/sign-up' className="header__link">Регистрация</Link>
        </Route>
        <Route exact path='/'>
          <p className="header__email">{email}</p>
          <Link to='/sign-in' className="header__link" onClick={signOut}>Выйти</Link>
        </Route>
      </div>
    </header>
  )
}
export default Header