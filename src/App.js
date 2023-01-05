import React,{useState , useEffect , createContext} from "react";
import "./style.css";

export default function App() {
  const [number,set_number] = useState(0);
  const [name,set_name] = useState("");
  const [surname,set_surname] = useState(""); 
  const [mousePos, setMousePos] = useState({});

  // Counter
  const increment = () =>{
    return set_number(number + 1);
  }
  const decrement = () =>{
    return set_number(number - 1);
  }
  // Form
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    Name : ${name}
    Surname : ${surname}
    `);
  }
  // Cordinates
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);
  // Context
  const UserContext = createContext();
  const Component = () => {
    const [user, set_user] = useState("JsCoders");
  
    return (
      <UserContext.Provider>
        <h6>{user}</h6>
      </UserContext.Provider>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <div className="card p-4 m-4 align-items-center">
          <div className="h2">Exercice 1 - Counter</div>
          <div>
            <button className="btn btn-outline-danger" onClick={decrement}>-</button>
            <span className="mx-2">{number}</span>
            <button className="btn btn-outline-success" onClick={increment}>+</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card p-4 m-4 align-items-center">
          <div className="h2">Exercice 2 - Form</div>
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div className="input-group mb-2">
              <span className="col-4">
              <label htmlFor="name" className="form-label mx-3">Name</label>
              </span>
              <span className="col-8">
              <input type="text" name="name" onChange={(e) => set_name(e.target.value)} className="form-control" />
              </span>
            </div>
            <div className="input-group mb-2">
              <span className="col-4">
              <label htmlFor="surname" className="form-label mx-3">Surname</label>
              </span>
              <span className="col-8">
              <input type="text" name="surname"  onChange={(e) => set_surname(e.target.value)} className="form-control" />
              </span>
            </div>
            <div className="row">
              <span className="col-4"></span>
              <span className="col-2">
              <input type="submit" value="submit" className="btn btn-primary" />
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="card p-4 m-4 align-items-center">
          <div className="h2">Exercice 3 - Cordinates</div>
          <div>
            <b>
              ({mousePos.x}, {mousePos.y})
            </b>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card p-4 m-4 align-items-center">
          <div className="h2">Exercice 4 - Context</div>
          <div>
            <Component />
          </div>
        </div>
      </div>
    </div>
  );
}
