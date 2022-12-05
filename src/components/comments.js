import { useState } from "react";
import Coment from "./coment";
const Comments = () => {
  const [Commentss, setComments] = useState([
    {
      username: "Muzammil Iqbal",
      shotdisc: "Original Audion",
    },
    {
      username: "Husnan Rasheed",
      shotdisc: "Have a good",
    },
    {
      username: "Agha Ahmed",
    },
  ]);
  return (
    <div className="timeline">
      {Commentss.map((comment) => (
        <Coment username={comment.username} shotdisc={comment.shotdisc} />
      ))}
    </div>
  );
};
export default Comments;
