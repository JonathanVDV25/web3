import Logo from 'components/img/LOGO.png'
const Header = ({ course }) => {
  return (
    <div>
      <h1> {course} </h1>
      <img src={Logo} alt='Logo HE Vinci'></img>
    </div>
  );
};

export default Header;
