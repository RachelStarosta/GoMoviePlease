import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Alert from './Components/Alert';

/**
 * a little changement to see if merge works 
 * 
 */

function App() {

  const [jwtToken, setJwtToken] = useState("");  //we will have access to this token with the outlet context functionality

  /**
   * Setting up a stateful variable to store the information for Alert props:
   */
  const [alertMessage, setAlertMessage] = useState("");
  const [alertClassName, setAlertClassName] = useState("d-none");
  
  const navigate = useNavigate()

  const logOut = () =>{
    setJwtToken("");
    navigate("/login");
  }

  
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-3"> Go Watch A Movie</h1>
        </div>
        <div className="col text-end">
          {jwtToken === ""  //change this to see the logout button
            ? <Link to="/login"><span className="badge bg-success"> Login </span></Link>
            : <a href="#!" onClick = {logOut}><span className="badge bg-danger"> Logout </span></a>
          }
        </div>
        <hr className="mb-3"></hr>   {/**This cannot have a space between*/}
      </div>
      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">Home</Link>
              <Link to="/movies" className="list-group-item list-group-item-action">Movies</Link>
              <Link to="/genres" className="list-group-item list-group-item-action">Genres</Link>
              {jwtToken !== "" &&   //this is checking if the user is logged in
                <>
                  <Link to="/admin/movie/0" className="list-group-item list-group-item-action">Add Movie</Link>
                  <Link to="/manage-catalogue" className="list-group-item list-group-item-action">Manage Catalogue</Link>
                  <Link to="/graphql" className="list-group-item list-group-item-action">GraphQL</Link>
                </>
              }
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Alert message={alertMessage} className={alertClassName} />
          <Outlet context={{
             jwtToken,
             setJwtToken, 
             setAlertClassName,
             setAlertMessage,
          }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
