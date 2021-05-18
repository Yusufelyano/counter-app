import footer__logo from "./Images/FooterLogo.svg"
function Footer(){
   return<footer>
      <FooterLogo />
      <FooterMenu />
      <Copyright />
   </footer>
}
function FooterLogo(){
   return<div className="footer__logo">
      <img src={footer__logo} alt='Footer Logo' />
   </div>
}
function FooterMenu(){
   return<div className="footer__menu">
      <ul>
         <li><a href="#">Партнерам</a></li>
         <li><a href="#">Разработчикам</a></li>
         <li><a href="#">Вакансии</a></li>
      </ul>
   </div>
}
function Copyright(){
   return <div className="copyright">
      ООО"интукод",2020г.
   </div>
}
export default Footer