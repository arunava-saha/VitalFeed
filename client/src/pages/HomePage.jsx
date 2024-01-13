import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../services/Api";
import "./Card.css";

export const HomePage = () => {
  const { loading, error, user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getFeeds = async () => {
    try {
      const { data } = await API.get("/feed/getAll");
      if (data?.feed) {
        setData(data.feed);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeeds();
  }, []);
  console.log(data);
  return (
    <Layout>
      <div className="">
        {data.map((item) => (
          <div key={item._id} className="container-one">
            <div className="images">
              <img src="/Images/feed.jpg" alt="feed" />
            </div>
            <div className="product">
              <h1>{item.title}</h1>
              <h2>{item.category}</h2>

              <p className="desc">{item.message}</p>
              <div className="buttons">
                <button className="add">Follow</button>
                <button className="like">
                  <span>♥</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
