import React from "react";
import bookImage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 py-15">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src={bookImage}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-3xl font-semibold mb-5">Books to freshen up <br /> your bookshelf</h1>
          <button className="btn btn-primary">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
