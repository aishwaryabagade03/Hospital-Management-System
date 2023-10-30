import React,{useEffect} from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import SpinnerLoadComp from "../Spinner/SpinnerComp";
import { getNurses, deleteNurse } from "../../redux/Nurses/Action";
import { useDispatch, useSelector } from "react-redux";

const Nurse = ({isLoading}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNurses());
  }, [dispatch]);

  const data = useSelector((state) => state.nurse.nurses);
  
  if (isLoading) {
    return <SpinnerLoadComp />;
  }

  const onDeleteHandler = (nurseid) => {
    dispatch(deleteNurse(nurseid))
    dispatch(getNurses())
  };
  return (
    <>   
        <Container>
          <span>
            <h1 className="text-start mb-3">Nurses:</h1>
            <div className="text-start">
            <button className="bg-dark border-white border px-4 py-2 mb-3">
              <Link
                className="text-decoration-none text-white"
                to={"/add-nurse"}
              >
                Add Nurse
              </Link>
            </button>
            </div>
          </span>
          <table className="table table-bordered border-black">
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Name</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Qualification</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data)?(
                data.map((nurse, ind)=>(
                  <tr key={ind}>
                  <td>{++ind}</td>
                  <td>{nurse?.Name} </td>
                  <td>{nurse?.Gender} </td>
                  <td>{new Date(nurse?.DOB).toLocaleDateString()}</td>
                  <td>{nurse?.Contact}</td>
                  <td>{nurse?.Email}</td>
                  <td>{nurse?.Qualification}</td>
                  <td>{nurse?.Department}</td>
                  <td>
                    <button className="bg-dark me-1 ">
                      <Link
                        className="text-decoration-none text-white"
                        to={"/edit-nurse/" + nurse?._id}
                      >
                        Update
                      </Link>
                    </button>
                    <button onClick={() => onDeleteHandler(nurse._id)} className="bg-dark text-white">
                      Delete
                    </button>
                  </td>
                </tr>
                ))):(
                  <tr>
                  <td colSpan="9">Data is not in the expected format.</td>
                </tr>
                )}
              
            </tbody>
          </table>
        </Container>   
    </>
  );
};

export default Nurse;