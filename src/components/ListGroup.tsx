// import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;

  onSelectItem: (item: String) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook : tap into built in func
  const [selectedIndex, setSelectedIndex] = useState(-1); //data will chnage over time
  //variable selectedIndex
  //updater func => update variable and react will be notified that it is updated
  //   const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
