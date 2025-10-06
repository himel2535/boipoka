import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../utility/addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const parsedId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === parsedId);
  // console.log(singleBook)
  const { bookName, image } = singleBook;

  const handleMarkAsRead = (id) => {
    MySwal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});

    addToStoreDB(id);
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto my-10">
      <img className="w-[200px] h-[300px]" src={image} alt="" />
      <h1>{bookName}</h1>
      <div>
        <button
          onClick={() => handleMarkAsRead(id)}
          className="btn btn-accent m-2"
        >
          Mark as List
        </button>
        <button className="btn btn-info m-2">Add to WishList</button>
      </div>
    </div>
  );
};

export default BookDetails;
