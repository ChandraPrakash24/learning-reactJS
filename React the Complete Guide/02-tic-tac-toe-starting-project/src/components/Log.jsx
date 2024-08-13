export default function Log({ turns }) {
  console.log(turns);

  return (
    <ul>
      {/* {turns.map((turn, index) => (
        <li key={index}>
          {turn.length > 0 &&
            `${turn[0]?.player} move for ${turn[0]?.square?.row + 1} row and ${
              turn[0].square.col + 1
            } col`}
        </li>
      ))} */}
      {turns.length === 0 ? (
        <li>No moves available</li>
      ) : (
        turns.map((turn, index) => (
          <li key={index}>
            {turn.length > 0 &&
              `${turn[0]?.player} moved to row ${
                turn[0]?.square?.row + 1
              } and column ${turn[0]?.square?.col + 1}`}
          </li>
        ))
      )}
    </ul>
  );
}
