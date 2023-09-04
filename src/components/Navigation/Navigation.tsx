import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectUser, signOutUserAction } from "../../store/slices/userSlice";
import styles from "./navigation.module.scss";
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
        <nav className={styles.container}>
            <div className={styles.auth}>
                {!user.id.length ? (
                    <>
                        <Link className={styles.authButton} to="/signin">
                            Signin
                        </Link>
                        <Link className={styles.authButton} to="/signup">
                            Signup
                        </Link>
                    </>
                ) : (
                    <>
                        <div className={styles.hiUser}>Howdy! {user.email}</div>
                        <button onClick={handleClickToDonateThing} type="button" className={styles.authButton}>
                            Give Things Back
                        </button>
                        <button onClick={handleSignOut} className={styles.authButton} type="button">
                            Wyloguj
                        </button>
                    </>
                )}
            </div>
            <div className={styles.nav}>
                <button className={styles.navButton} type="button" id="elementStart" onClick={onClickScroll}>
                    Start
                </button>
                <button type="button" className={styles.navButton} id="elementFourSteps" onClick={onClickScroll}>
                    Whats the issue?
                </button>
                <button className={styles.navButton} type="button" id="elementAboutUs" onClick={onClickScroll}>
                    About us
                </button>
                <button className={styles.navButton} type="button" id="whatWeHelp" onClick={onClickScroll}>
                    Fundation and Organizations
                </button>
                <button className={styles.navButton} type="button" id="elementContact" onClick={onClickScroll}>
                    Contact
                </button>
            </div>
        </nav>
    );
};
