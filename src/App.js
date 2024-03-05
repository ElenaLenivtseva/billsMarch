import "./App.css";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
import Partners from "./components/partners/Partners";
import Table from "./components/table/Table";
import TableDescr from "./components/tableDescr/TableDescr";
import { useState } from "react";

const initialChecks = [
  {
    id: "1",
    total: "800",
    payer: "Партнер 1",
    spendingFirst: "200, 60, 30",
    spendingSecond: "300",
    others: '0',
  },
  {
    id: "2",
    total: "600",
    payer: "Партнер 1",
    spendingFirst: "100, 50, 20",
    spendingSecond: "200",
    others: '0',
  },
  {
    id: "3",
    total: "500",
    payer: "Партнер 1",
    spendingFirst: "200, 10",
    spendingSecond: "0",
    others: '0',
  },
  {
    id: "4",
    total: "1000",
    payer: "Партнер 1",
    spendingFirst: "300, 200, 100",
    spendingSecond: "0",
    others: '0',
  },
  {
    id: "5",
    total: "900",
    payer: "Партнер 1",
    spendingFirst: "100, 10",
    spendingSecond: "0",
    // debtFirst: "не должен",
    // debtSecond: "280",
    others: '0',
  },
];

function App() {
  const [partners, setPartners] = useState({
    partner1: "Партнер 1",
    partner2: "Партнер 2",
  });
  const [isFormOpened, setIsFormOpened] = useState(false);
  const [checks, setChecks] = useState(initialChecks);
  return (
    <div className="App">
      <Header />
      <Partners partners={partners} setPartners={setPartners} />
      <TableDescr
        isFormOpened={isFormOpened}
        setIsFormOpened={setIsFormOpened}
      />
      <Table partners={partners} checks={checks} setChecks={setChecks} />
      {isFormOpened && (
        <Modal
          isFormOpened={isFormOpened}
          setIsFormOpened={setIsFormOpened}
          partners={partners}
          checks={checks}
          setChecks={setChecks}
        />
      )}
    </div>
  );
}

export default App;
