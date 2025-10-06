import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import Book from "../../components/Book/Book";

const ReadList = () => {

  const [readList,setReadList]=useState([])
  const data = useLoaderData();
  // console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBook=storedBookData.map(id=>parseInt(id))
    console.log(convertedStoredBook)
    const myReadList=data.filter(book=>convertedStoredBook.includes(book.bookId))
    setReadList(myReadList)
  }, []);

  return (
    <div className="my-5">
      <Tabs>
        <TabList>
          <Tab>Read Book List </Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>My read List books number is : {readList.length}</h2>
          {
            readList.map(boi=> <Book key={boi.bookId} singleBook={boi}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
