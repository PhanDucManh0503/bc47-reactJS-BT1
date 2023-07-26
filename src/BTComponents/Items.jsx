import React from "react";

const Items = () => {
  return (
    <div className="col-lg-6 col-xxl-3 mb-5">
      <div className="card bg-light border-0 h-100">
        <div className="card-body text-center p-4 p-lg-5 pt-0  bg-#cccccc">
          <p className="mb-0">500 X 325</p>
        </div>
        <div className="card-body text-center p-4 p-lg-5 pt-0 bg-white">
          <h2 className="fs-4 fw-bold">Card Title</h2>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            necessitatibus saepe voluptatum! Omnis, eveniet deserunt.
          </p>
        </div>
        <div className="card-body text-center p-4 p-lg-5 pt-0 bg-#f7f7f7">
          <a className="btn btn-primary btn-lg bg-#007aff" href="#!">
            Find out more!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Items;
