import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Nav = () => {
  const { t } = useTranslation();

  return (
    <header className="nav" >
    <div > i18n React Demo </div>{" "} 
    <div ><Link to="/" >{t('home')} </Link> <Link to="/page2 "> {t('page2')}</Link>
    {" "} </div>{" "} 
    </header>
  );
}
                    export default Nav;

                   