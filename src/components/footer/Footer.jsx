import { FaTelegram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import './Footer.css'
export default function Footer() {
  return (
    <section>
      <div className="footer">
        <div className="copy">
          <p> حقوق مادی و معنوی متعلق به فست لرن است</p>
        </div>
        <div className="designer">
          <p>طراحی و پیاده سازی توسط بهزاد امینی</p>
          <span>
            <FaInstagramSquare color="#fff" size={26} />
          </span>
          <span>
            <FaTelegram color="#fff" size={26} />
          </span>
        </div>
      </div>
    </section>
  );
}
