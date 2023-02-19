import { Link } from 'react-router-dom';
import useLogout from '../hooks/useLogout';

const Navbar = () => {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  return (
    <header>
      <div className='container'>
        <Link to='/'>
          <h1>Workout buddy</h1>
        </Link>
        <nav>
          <button onClick={handleClick}>Logout</button>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
