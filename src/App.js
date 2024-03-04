import "./App.css";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
import Partners from "./components/partners/Partners";
import Table from "./components/table/Table";
import TableDescr from "./components/tableDescr/TableDescr";
import { useState } from "react";

function App() {
  const [partners, setPartners] = useState({
    partner1: "Партнер 1",
    partner2: "Партнер 2",
  });
  const [isFormOpened, setIsFormOpened] = useState(false);
  return (
    <div className="App">
      <Header />
      <Partners partners={partners} setPartners={setPartners} />
      <TableDescr
        isFormOpened={isFormOpened}
        setIsFormOpened={setIsFormOpened}
      />
      <Table partners={partners}/>
      {isFormOpened && (
        <Modal isFormOpened={isFormOpened} setIsFormOpened={setIsFormOpened} partners={partners}/>
      )}
    </div>
  );
}

export default App;
