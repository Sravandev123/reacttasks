import "./App.css";

import ButtonComponents from "./components/functional components/list/button/button-component1";
import OrderList from "./components/functional components/list/button/order-list/ordered-list";
import UnorderList from "./components/functional components/list/unorder-list/unorder-list";
import ImageComponents from "./components/functional components/list/image1/image-components";
import TableComponent from "./components/table/table-component";
import Profile from "./components/functional components/jsx/jsx";
import SravanTable from "./components/functional components/jsx/table-jsx";

function App() {
  return (
    <div className="App">
      <h1> Hello world</h1>
      {/* <ButtonComponents></ButtonComponents>
      <OrderList />
      <UnorderList />
      <ImageComponents></ImageComponents> */}
      {/* <TableComponent /> */}
      <SravanTable/>
      {/* <Profile/> */}
    </div>
  );
}

export default App;
