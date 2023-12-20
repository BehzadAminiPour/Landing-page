import Course from "./Course";
import "./Features.css";
import { data } from "./data";
export default function Features() {
  return (
    <section id="features" className="container features">
      <div className="features-title">
        <h2>دوره های آموزشی</h2>
        <hr />
      </div>
      <div className="features-course">
        {data.map((item) => (
          <Course key={item.id} item={item}/>
        ))}
      </div>
    </section>
  );
}
