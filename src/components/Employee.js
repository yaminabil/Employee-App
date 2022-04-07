import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Employee({ singleData }) {
  return (
    <Fragment>
      <Link to={`/${singleData._id}`}>
        <div className="total">
          <div className="part-one">
            <img src={`${singleData.image}`} alt="hello" />
          </div>
          <div className="part-two">
            <h2>{singleData.name}</h2>
            <h4 className="title">{singleData.title}</h4>
          </div>
        </div>
      </Link>
    </Fragment>
  );
}
