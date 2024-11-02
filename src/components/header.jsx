import { useEffect } from "react";

export default function Header({ handleNewGame, wins }) {
  useEffect(() => {
    document.title = `${wins} wins`;
  }, [wins]);
  return (
    <header className="header">
      <h4>{wins} wins</h4>
      <h3>Memomry Game</h3>
      <button onClick={handleNewGame}>New Game</button>
    </header>
  );
}
