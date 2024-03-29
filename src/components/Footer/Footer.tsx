import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import arrowUp from '../../images/arrow-up.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__nav">
          <NavLink to="/home">
            <img className="logo" src={logo} alt="Logo" />
          </NavLink>
          <ul className="list">
            <li className="list__item">
              <NavLink
                className="list__link"
                target="_blank"
                rel="noreferrer"
                to="https://github.com/vitalii-fedusov?tab=repositories"
              >
                Github
              </NavLink>
            </li>
            <li className="list__item">
              <NavLink
                rel="noreferrer"
                className="list__link"
                target="_blank"
                to="https://www.linkedin.com/in/vitalii-fedusov-9a23892a2/"
              >
                Contacts
              </NavLink>
            </li>
            <li className="list__item">
              <NavLink className="list__link" to="/home">Rights</NavLink>
            </li>
          </ul>
          <div className="footer__button-up">
            <p className="footer__paragraph">Back to top</p>
            <button
              type="button"
              className="footer__link"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }}
            >
              <img className="footer__arrow-up" src={arrowUp} alt="Arrow up" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
