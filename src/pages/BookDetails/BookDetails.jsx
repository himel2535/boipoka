import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const parsedId = parseInt(id);
  // console.log(id)
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === parsedId);
  // console.log(singleBook)
  const { bookName, image } = singleBook;
  return (
    <div className="flex flex-col items-center justify-center mx-auto my-10">
      <img className="w-[200px] h-[300px]" src={image} alt="" />
      <h1>{bookName}</h1>
      <div>
        <button className="btn btn-accent m-2">Accent</button>
        <button className="btn btn-info m-2">Info</button>
      </div>
    </div>
  );
};

export default BookDetails;
