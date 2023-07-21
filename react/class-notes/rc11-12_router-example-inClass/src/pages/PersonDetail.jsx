import React, { useEffect, useState } from "react";
import { useLocation, useNavigate ,useParams} from "react-router-dom";
import axios from "axios"
import NotFound from "./NotFound";
import Spinner from "../img/Spinner.gif"

const PersonDetail = () => {
//   let { state: person } = useLocation();
  let navigate = useNavigate();
//   console.log(person);
let {id}= useParams();
console.log({id})

const [person ,setPerson] =useState({})

const [error , setError] = useState(false)

const [loading, setLoading] = useState(true)

const getPerson = () => {
    axios(`https://reqres.in/api/users/${id}`)
    .then ((res) => console.log(res.data.data))
    .catch((err) => {
        setError(true)
    })
    .finally(() => setLoading(false));
}

useEffect(() =>{
    getPerson();
}, []);

if(error) {
    return <NotFound />
}

  return (
    <div className="container text-center">
      <h3>
        {person?.first_name} {person?.last_name}
      </h3>
      <img className="rounded" src={person?.avatar} alt="" />
      <p>{person?.email}</p>
      <div>
        <button onClick={() => navigate("/")} className="btn btn-success me-2">
          Go Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PersonDetail;
