import React, { useEffect, useState } from "react";
import "./FollowersCard.scss";
import { Followers } from "../../Data/FollowersData";
import User from "../User/User";
import { useSelector } from "react-redux";
import { getAllUser } from "../../api/UserRequest";
import FollowersModal from "../FollowerModal/FollowersModal";

const FollowersCard = (props) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  //! Props
  const {location} = props
  //! State
  const [persons, setPersons] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);
  //! Function

  //! Effect
  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);
  //! Render
  return (
    <div className="follower-card">
      <h3>People you may know</h3>
      {persons.slice(0,5).map((person, index) => {
        if (person._id !== user._id) {
          return <User key={index} person={person} />;
        }
      })}
      {(!location && persons.length > 5) ? (
        <span onClick={() => setModalOpened(true)}>Show more</span>
      ) : (
        ""
      )}
      <FollowersModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
        data={persons.slice(5, persons.length-1)}
      />
    </div>
  );
};

export default FollowersCard;
