import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  //   console.log(singleBook);
  const {
    bookName,
    author,
    bookId,
    image,
    publisher,
    rating,
    category,
    tags,
    yearOfPublishing,
  } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100  shadow-sm border mx-5 md:mx-0">
        <figure className="bg-gray-100 w-10/11  mx-auto my-3">
          <img className="h-[166px] p-3 rounded-2xl" src={image} alt="Books" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-7">
            {tags.map((tag) => (
              <button>{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>By : {publisher}</p>
          <div className="border-t-1 border-dashed text-gray-400"></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating}
              <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
