import {Link} from "react-router-dom"

const Instructors = () => {
  return (
    <div className="p-3">
      <h1>Instructors</h1>
      <div className="d-flex flex-column">
        {/* <Link to = {"/instructors/1"}>Instructors-1</Link> */}
        <Link to = {"1"}>Instructors-1</Link>
        <Link to = {"2"}>Instructors-2</Link>
        <Link to = {"3"}>Instructors-3</Link>
      </div>
    </div>
  );
};

export default Instructors;
