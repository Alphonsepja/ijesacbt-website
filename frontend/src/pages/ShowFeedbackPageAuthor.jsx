import React, { useState, useEffect } from "react";
//import "../style/addreviewer.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import ReviewCard from "../component/ReviewCard";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const ShowFeedbackPageAuthor = () => {
    const [data, setData] = useState(null);
  let { id } = useParams();

  const getCompleteJournalDetails = async () => {
    try {
      const headers = {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      };

      const response = await axios.get(
        `${baseURL}/api/v1/author/getFeedBack/${id}`,
        { headers }
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
      {data && data.map((item, index) => (
        <ReviewCard key={index} data={item} />
      ))}
    </div>
  );
}

export default ShowFeedbackPageAuthor;
