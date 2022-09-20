import Logo from 'img/LOGO.png'
const Header = (props) => {
  return (
    <div>
      <h1> {props.course} </h1>
      <img src={Logo} alt='Logo HE Vinci'></img>
    </div>
  );
};

export default Header;
