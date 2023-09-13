import "./App.css";
import Books from "./Books";
import Todo from "./todo";

function App() {
  let books = [
    { id: 1, name: "Milk and Honey", writer: "Rupi Kaur" },
    { id: 2, name: "It starts with us", writer: "Collen Hover" },
    { id: 3, name: "Harry potter", wrtier: "JK Rowling" },
  ];
  return (
    <>
      <h1>Vite + React</h1>

      {books.map((book) => (
        <Books book={book}></Books>
      ))}

      <ObjectData name="Halima Sultana" age="22"></ObjectData>
      <ObjectData></ObjectData>
    </>
  );
}

export default App;

function ObjectData({ name = "Default", age = "Default" }) {
  let student = {
    age: age,
    address: "Aatolia, Turkey",
    sons: ["Osman Gazi", " Bayendeer Bey"],
  };
  // console.log(props);

  return (
    <div className="card">
      <h2>{name}</h2>
      <h5>Her age is {student.age}</h5>
      <h5>Address: {student.address}</h5>
      <h5>Sons Name : {student.sons}</h5>
    </div>
  );
}

function AnotherCard({ blood, color }) {
  if (blood) {
    return (
      <div className="card">
        <p>Blood is gotted</p>
      </div>
    );
  } else {
    return (
      <div className="card">
        <p>Nothing gotted</p>
      </div>
    );
  }
}
