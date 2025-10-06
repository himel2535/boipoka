import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import Book from "../../components/Book/Book";

const ReadList = () => {
  const [sort, setSort] = useState("");
  const handleSort = (type) => {
    setSort(type);
    if(type==="Pages"){
      const sortedByPages=[...readList].sort((a,b)=>a.totalPages-b.totalPages)
      setReadList(sortedByPages)
    }
    if(type==="Rating"){
      const sortedByRating=[...readList].sort((a,b)=>a.rating-b.rating)
      setReadList(sortedByRating)
    }
  };

  const [readList, setReadList] = useState([]);
  const data = useLoaderData();
  // console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBook = storedBookData.map((id) => parseInt(id));
    console.log(convertedStoredBook);
    const myReadList = data.filter((book) =>
      convertedStoredBook.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  return (
    <div className="my-5">
      <div className="dropdown dropdown-start">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort By {sort?sort:""}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={() => handleSort("Pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("Rating")}>Rating</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Book List </Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>My read List books number is : {readList.length}</h2>
          {readList.map((boi) => (
            <Book key={boi.bookId} singleBook={boi}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
