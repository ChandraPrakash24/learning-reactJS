export default function TabButton(props) {
  // console.log('tab rendered');
  // console.log(props.currActiveClass);

  return (
    <li>
      <button
        className={props.currActiveClass ? "active" : ""}
        onClick={props.onSelect}
      >
        {props.children}
      </button>
    </li>
  );
}
