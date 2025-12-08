import "./index.css";
import Accordian from "./Accordian";
import Card from "./card";
import userData from "./data/UserData";

function App() {
  return (
    <>
    <div className="flex gap-4 p-4 wrap">
      {userData.map((user)=>(
        <Card 
       key={user.id}
       name={user.name}
       age={user.age}
       email={user.email}
       interest={user.interests}
       isActive={user.isActive}
        />
      ))}
    </div>
      {/* <Accordian /> */}
    </>
  );
}

export default App;
