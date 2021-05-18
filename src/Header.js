import logo from "./Images/Logo.svg"
function Header() {
   return <header>
      <Logo />
      <Menu />
   </header>
}
function Logo() {
   return <div>
      <img src={logo} alt="Logo" />
   </div>
}
function Menu() {
   return <div className="menu">
      <ul>
         <li><a href="#">Главная</a></li>
         <li><a href="#">О нас</a></li>
         <li><a href="#">Контакты</a></li>
      </ul>
   </div>
}
export default Header