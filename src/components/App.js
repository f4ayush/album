import Album from "./Album";
import ButtonAppBar from "../utils/Navbar"
import { useState } from "react";
import BasicModal from "../utils/BasicModal";


function App() {
  const [showModal, setshowModal] = useState(false);

  return (
    <div>
      <ButtonAppBar setshowModal={setshowModal}/>
      <Album/>
      {
        showModal && <BasicModal showModal={showModal} setshowModal={setshowModal}/>
      }
    </div>
  );
}

export default App;
