import "./App.css";
import Header from "./components/header/Header";
import Partners from "./components/partners/Partners";
import Table from "./components/table/Table";
import TableDescr from "./components/tableDescr/TableDescr";
import { useState } from "react";

const initialChecks = [];

function App() {
  const [partners, setPartners] = useState({
    partner1: "Партнер 1",
    partner2: "Партнер 2",
  });
  const [isFormOpened, setIsFormOpened] = useState(false);
  const [checks, setChecks] = useState(initialChecks);
  const [checkToEdit, setCheckToEdit] = useState(null);
  const handleEditCheck = (idx) => {
    setCheckToEdit(idx);
    setIsFormOpened(true);
  };
  const handleDeleteCheck = (targetIndex) => {
    setChecks(checks.filter((_, idx) => idx !== targetIndex));
  };
  
  const handleSubmit = (newCheck, now) => {
    checkToEdit === null
      ? setChecks([...checks, { ...newCheck, id: now }])
      : setChecks(
          checks.map((currCheck, idx) => {
            if (idx !== checkToEdit) return currCheck;
            return newCheck;
          })
        );
  };
  return (
    <div className="App">
      <Header />
      <Partners partners={partners} setPartners={setPartners} />
      <TableDescr
        setIsFormOpened={setIsFormOpened}
        isFormOpened={isFormOpened}
        partners={partners}
        setCheckToEdit={setCheckToEdit}
        checks={checks}
        checkToEdit={checkToEdit}
        handleSubmit={handleSubmit}
      />
      <Table
        partners={partners}
        checks={checks}
        setChecks={setChecks}
        handleEditCheck={handleEditCheck}
        handleDeleteCheck={handleDeleteCheck}
      />
    </div>
  );
}

export default App;
