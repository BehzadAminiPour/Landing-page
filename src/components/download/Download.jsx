import { FaWindows } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import './Download.css'
export default function Download() {
  return (
    <section id="download">
      <div className="container download">
       
        <h2>دانلود اپلیکیشن ما</h2>
        <hr />
        <p>برنامه های ما برای دانلود در همه فروشگاه ها موجود است.</p>
        <div className="apps">
          <div className="app-icons">
             <FaWindows size={30} /> 
          </div>
          <div className="app-icons">
            <FaAndroid size={30}/> 
          </div>
          <div className="app-icons">
            <FaApple size={30} /> 
          </div>
        </div>
      </div>
    </section>
  );
}
