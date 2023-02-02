import "../src/App.css";
import DropFileInput from "./component/drage n drop/DropFileInput";
function App() {
  const onFileChange = (files) => {
    console.log(files);
  };
  return (
    <div className="box">
      <h2 className="header">React Drag And Drop</h2>
      <DropFileInput onFileChange={(files) => onFileChange(files)} />
    </div>
  );
}

export default App;
