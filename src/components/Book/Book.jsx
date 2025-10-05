import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({ singleBook }) => {
  //   console.log(singleBook);
  const { bookName, author, image, publisher, rating, category } = singleBook;

  return (
    <div className="card bg-base-100 w-96 shadow-sm border">
      <figure className="bg-gray-100 w-10/11  mx-auto my-3">
        <img className="h-[166px] p-3 rounded-2xl" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">
            {rating}
            <FaStarHalfAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
