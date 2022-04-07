import { Fragment } from "react";

export default function Employee({ singleData }) {
  return (
    <Fragment>
      <div className="total">
        <div className="part-one">
          <img src={`${singleData.image}`} alt="hello" />
        </div>
        <div className="part-two">
          <h2>{singleData.name}</h2>
          <h4 className="title">{singleData.title}</h4>
        </div>
      </div>
    </Fragment>
  );
}
