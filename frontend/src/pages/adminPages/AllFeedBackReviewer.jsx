import React, { useState, useEffect } from "react";
//import "../style/addreviewer.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import ReviewCard from "../../component/ReviewCard";
import FeedBAckCardAdmin from "../../component/FeedBAckCardAdmin";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const AllFeedBackReviewer = () => {
    const [data, setData] = useState(null);
  let { id,email } = useParams();
  //console.log(id,email);
  const getCompleteJournalDetails = async () => {
    try {
      const headers = {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      };

      const response = await axios.get(
        `${baseURL}/api/v1/admin/getAllFeedBackOfReviwer`,
        { headers,params:{id,email} }
      );
      //console.log(response);
      if (response.status === 200) {
        // Assuming the response.data contains the array of journals
        //console.log("Feedback", response.data.data);
        setData(response.data.data);
        toast.success("Data Fetched Successfully");
      } else {
        toast.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Some internal server error");
    }
  };

  useEffect(() => {
    getCompleteJournalDetails();
  }, []);
  return (
    <div>
    {/* <h1>Feedback</h1> */}
      {data && data.map((item, index) => (
        <FeedBAckCardAdmin key={index} data={item} />
      ))}
      {
        data?.length ===0 && <h1 style={{textAlign:"center"}}>No Feedback given by this Reviewer</h1>
      }
    </div>
  );
}

export default  AllFeedBackReviewer;
