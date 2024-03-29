import "./App.css";
import Header from "./components/header/Header";
import Partners from "./components/partners/Partners";
import TableDescr from "./components/tableDescr/TableDescr";
import Table from "./components/table/Table";
import { useState, useEffect } from "react";

function App() {
  const [partners, setPartners] = useState(() => {
    const savedPartners = localStorage.getItem("partners");
    if (savedPartners) {
      return JSON.parse(savedPartners);
    } else {
      return {
        partner1: "Партнер 1",
        partner2: "Партнер 2",
      };
    }
  });
  const [checks, setChecks] = useState(() => {
    const savedChecks = localStorage.getItem("checks");
    if (savedChecks) {
      return JSON.parse(savedChecks);
    } else {
      return [];
    }
  });
  const [isFormOpened, setIsFormOpened] = useState(false);

  useEffect(() => {
    localStorage.setItem("checks", JSON.stringify(checks));
  }, [checks]);

  useEffect(() => {
    localStorage.setItem("partners", JSON.stringify(partners));
  }, [partners]);

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
