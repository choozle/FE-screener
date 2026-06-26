import { useAppDispatch } from "./store/hooks";
import "./App.css";

export function App() {
  const dispatch = useAppDispatch();

  return (
    <div className="screener">
      <header className="screener__header">
        <h1>FE Coding Screener</h1>
      </header>

      <main className="screener__body"></main>
    </div>
  );
}

export default App;
