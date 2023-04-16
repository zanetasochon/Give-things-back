import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const DashboardFooter = () => {
  return (
    <section className="footer__container">
      <div className="theme__wrapper">
        <div />
        <div className="footer__text">Copyright by Coders Lab</div>
        <div className="footer__icons">
          <FacebookIcon />
          <InstagramIcon />
        </div>
      </div>
    </section>
  );
};
