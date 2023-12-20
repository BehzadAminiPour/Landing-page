import { FaTelegram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./Subscribe.css";
export default function Subscribe() {
  return (
    <section id="subscribe">
      <div className="container subscribe">
        <h2>حالا مشترک شوید!</h2>
        <form>
          <button>مشترک شدن</button>
          <input type="text" placeholder="ایمیل خود را وارد کنید" />
        </form>
        <div className="socials">
          <div className="social-icon">
            <FaTelegram color="dodgerblue" size={26} />
          </div>
          <div className="social-icon">
            <FaInstagramSquare color="red" size={26} />
          </div>
          <div className="social-icon">
            <FaWhatsappSquare color="green" size={26} />
          </div>
          <div className="social-icon">
            <FaSquareXTwitter size={26} />
          </div>
        </div>
      </div>
    </section>
  );
}
