import "./index.css";
import Accordian from "./Accordian";
import Card from "./card";
import userData from "./data/UserData";

function App() {
  return (
    <>
      <Accordian />
    <div className="grid grid-cols-6 gap-4 p-6 max-[1200px]:grid-cols-5 max-[900px]:grid-cols-4 max-[600px]:grid-cols-3 max-[300px]:grid-cols-2 ">
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
    </>
  );
}

export default App;
