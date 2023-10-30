import React, { useEffect} from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import SpinnerLoadComp from "../Spinner/SpinnerComp";
import { getBedallotment,deleteBedallotment  } from "../../redux/Bedallotment/Action";
import { useDispatch,useSelector } from "react-redux";

const Bedallotments = ({isLoading}) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getBedallotment())
  },[dispatch])
  const data = useSelector((state)=>state.bedallotment.bedallotments);
  if (isLoading) {
    return <SpinnerLoadComp />;
  }
  const onDeleteHandler = (bedallotmentid) => {
   dispatch(deleteBedallotment(bedallotmentid))
   dispatch(getBedallotment())
  };
  return (
    <>
        <Container>
          <span>
            <h1 className="text-start mb-3">Bedallotments:</h1>
          <div className="text-start">
          <button  className="bg-dark border-white border px-4 py-2 mb-3">
              <Link
                className="text-decoration-none text-white"
                to={"/add-bedallotment"}
              >
                Add bedallotment
              </Link>
            </button>
          </div>
          </span>
          <table className="table table-bordered border-black">
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Patient</th>
                <th>PatientStatus</th>
                <th>BedType</th>
                <th>BedNumber</th>
                <th>AllotmentDate</th>
                <th>DischargeDate</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data)?(
                data.map((bedallotment,ind)=>(
                  <tr key={ind}>
                  <td>{++ind}</td>
                  <td>{bedallotment?.Patient} </td>
                  <td>{bedallotment?.PatientStatus} </td>
                  <td>{bedallotment?.BedType}</td>
                  <td>{bedallotment?.BedNumber}</td>
                  <td>{new Date(bedallotment?.AllotmentDate).toLocaleDateString()}</td>
                  <td>{new Date(bedallotment?.DischargeDate).toLocaleDateString()}</td>          
                  <td>
                    <button className="bg-dark me-1 ">
                      <Link
                        className="text-decoration-none text-white"
                        to={"/edit-bedallotment/" + bedallotment?._id}
                      >
                        Update
                      </Link>
                    </button>
                    <button onClick={() => onDeleteHandler(bedallotment._id)} className="bg-dark text-white">
                      Delete
                    </button>
                  </td>
                </tr>
                ))
              ):(
                <tr>
                <td colSpan="9">Data is not in the expected format.</td>
              </tr>
              )}
            </tbody>
          </table>
        </Container>
    </>
  );
  }

  


export default Bedallotments;