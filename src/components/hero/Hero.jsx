import heroImg from "../../assets/hero.svg";

import "./Hero.css";
export default function Hero() {
 
  return (
    <section id="hero">
      <div className=" hero container">
        <div
          className="hero-right"
    
        >
          <h1>ما به هر قیمتی دوره تولید نمی کنیم!</h1>
          <p>
            با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد بگیر و
            پیشرفت کن
          </p>

          <button className="btn">از اینجا شروع کن</button>
        </div>
        <div
          className="hero-left"
  
        >
          <img src={heroImg} alt="hero image" />
        </div>
      </div>
    </section>
  );
}
