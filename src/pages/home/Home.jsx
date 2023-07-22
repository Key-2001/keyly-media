import React from "react";
import "./Home.scss";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import PostSide from "../../components/PostSide/PostSide";

const Home = () => {
  return (
    <div className="home-section">
      <ProfileSide />
      <PostSide />
      <div className="right-side">Rightside</div>
    </div>
  );
};

export default Home;
