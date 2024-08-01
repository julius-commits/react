import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <div>Some text</div>
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
