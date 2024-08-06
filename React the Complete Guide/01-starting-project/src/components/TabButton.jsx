export default function TabButton(props) {
    // console.log('tab rendered');
  return (
    <li>
      <button onClick={props.onSelect}>
        {props.children}
      </button>
    </li>
  );
}
