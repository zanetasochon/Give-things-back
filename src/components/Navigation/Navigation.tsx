import { Link } from "react-router-dom";
import "./navigation.scss";

export const Navigation = () => (
  <section className="container">
    <nav className="container__auth">
      <Link className="auth__button--nav" to="/signin">
        Signin
      </Link>
      <Link className="auth__button--nav" to="/signup">
        Signup
      </Link>
    </nav>
    <nav className="container--nav">
      <Link className="button__nav" to="/Dashboard">
        Start
      </Link>
      <Link className="button__nav" to="/Dashboard">
        Whats the issue?
      </Link>
      <Link className="button__nav" to="/Dashboard">
        About us
      </Link>
      <Link className="button__nav" to="/Dashboard">
        Fundation and Organizations
      </Link>
      <Link className="button__nav" to="/Dashboard">
        Contact
      </Link>
    </nav>
  </section>
);
