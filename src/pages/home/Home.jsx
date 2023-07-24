import React from "react";
import "./Home.scss";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";

const Home = () => {
  return (
    <div className="home-section">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
