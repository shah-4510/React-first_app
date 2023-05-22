// import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";
import Button from "./components/Button";

// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

//   const handleSelectItem = (item: String) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

function App() {
  return (
    // <div>
    //   <Alert>
    //     Hello <span>World</span>
    //   </Alert>
    // </div>
    <div>
      <Button color="danger" onClick={() => console.log("Clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
