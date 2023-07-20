import {useParams} from "react-router-dom"

const InstructorDetail = () => {

  //  let param = useParams();
  //* Linkteki parametreyi almak icin useParams Hook'u kullanilabilir.
  //* yakalanan id'ye ait güncel veriler fetch yapılabilir

  let {id} = useParams();

  return (
    <div className="p-3">
      <p>
        from useParam : I am instructors {" "}
        <span className="text-danger fw-bolder">{id}</span>
      </p>
    </div>
  );
};

export default InstructorDetail;
