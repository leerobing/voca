import "./App.css";

function App() {
  const name = " Tom";
  const naver = {
    name: "naver",
    url: "https://naver.com",
  };
  return (
    <div className="App">
      <h1
        style={{
          color: "red",
          backgroundColor: "green",
        }}
      >
        Hello react, {name}
      </h1>
      <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;
