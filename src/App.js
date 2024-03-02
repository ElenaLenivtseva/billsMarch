import './App.css';
import Header from './components/header/Header';
import Modal from './components/modal/Modal';
import Partners from './components/partners/Partners';
import Table from './components/table/Table';
import TableDescr from './components/tableDescr/TableDescr';


function App() {
  return (
    <div className="App">
      <Header/>
      <Partners/>
      <TableDescr/>
      <Table/>
      <Modal/>
      {/* <Header/>
      <Partners/>
      <TableDescr/>
      <Table/>
      <Modal/> */}
    </div>
  );
}

export default App;
