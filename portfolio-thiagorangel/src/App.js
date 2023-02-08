import Button from './components/Button';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header-container">
        <div className="profile-picture"></div>
        <div className="titles-container">
          <h1 className="title">Thiago Rangel</h1>
          <h2 className="subtitle">Development Frontend</h2>
        </div>
      </header>

      <main className="button-container">
        <Button
          icon={<FaLinkedin className="icon" />}          
          link="https://www.linkedin.com/in/thiagodrangel/"
          className="link-button"
          id="LinkedIn"
        />
        <Button
          icon={<FaGithub className="icon" />}
          link="https://github.com/ThiagoDRangel"
          className="link-button"
          id="GitHub"
        />
        <Button
          icon={<FiMail className="icon" />}
          link="mailto:info.tec.campos@gmail.com"
          className="link-button"
          id="Email"
        />
      </main>
      <footer>
        <span
          className="span-footer"
        >
          Developed by
        <a
          href="https://github.com/ThiagoDRangel"
        >
          ThiagoDRangel
        </a>
        </span>
      </footer>
    </div>
  );
}

export default App;