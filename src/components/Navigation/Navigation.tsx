import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectUser, signOutUserAction } from "../../store/slices/userSlice";
import "./navigation.scss";
// eslint-disable-next-line import/order
import * as Scroll from "react-scroll";
import { signOutService } from "../../services/auth.service";
import { useAppDispatch } from "../../store/hooks";

export const Navigation = () => {
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await signOutService();
      dispatch(signOutUserAction({ id: "", email: "" }));
      navigate("/logout");
    } catch (err) {
      console.log(err);
    }
  };

  const onClickScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    Scroll.scroller.scrollTo(`${e.currentTarget.id}`, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: e.currentTarget.id === "elementAboutUs" ? -30 : 0,
    });
  };

  const handleClickToDonateThing = () => {
    navigate("/donateThings");
  };

  return (
    <nav className="container">
      <div className="container__auth">
        {!user.id.length ? (
          <>
            <Link className="auth__button--nav" to="/signin">
              Signin
            </Link>
            <Link className="auth__button--nav" to="/signup">
              Signup
            </Link>
          </>
        ) : (
          <>
            <div className="hi__user">Howdy! {user.email}</div>
            <button
              onClick={handleClickToDonateThing}
              type="button"
              className="auth__button--nav"
            >
              Give Things Back
            </button>
            <button
              onClick={handleSignOut}
              className="auth__button--nav"
              type="button"
            >
              Wyloguj
            </button>
          </>
        )}
      </div>
      <div className="container--nav">
        <button
          className="button__nav"
          type="button"
          id="elementStart"
          onClick={onClickScroll}
        >
          Start
        </button>
        <button
          type="button"
          className="button__nav"
          id="elementFourSteps"
          onClick={onClickScroll}
        >
          Whats the issue?
        </button>
        <button
          className="button__nav"
          type="button"
          id="elementAboutUs"
          onClick={onClickScroll}
        >
          About us
        </button>
        <button
          className="button__nav"
          type="button"
          id="whatWeHelp"
          onClick={onClickScroll}
        >
          Fundation and Organizations
        </button>
        <button
          className="button__nav"
          type="button"
          id="elementContact"
          onClick={onClickScroll}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};
