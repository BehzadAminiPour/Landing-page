/* eslint-disable react/prop-types */

import "./Course.css";
export default function Course({item}) {
  return (
    <div className="course">
      <div>
        <img src={item.img} alt="" />
      </div>
      <div className="course-body">
        <h5>{item.title}</h5>
        <p>{item.body}</p>
      </div>
      <div className="course-footer">
        <p> {item.price}  تومان</p>
        <button>ثبت نام</button>
      </div>
    </div>
  );
}
