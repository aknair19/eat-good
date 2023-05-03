import React, { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const addOnClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Profile Component</h2>
      <h4>{props.name}</h4>
      {count}
      <button onClick={addOnClick}>Add</button>
    </div>
  );
};

export default Profile;
