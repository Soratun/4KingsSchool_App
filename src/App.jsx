import './App.css'
import { useState,useEffect} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import FormComponent from './Components/FormCompoment'
import Transaction from './Components/Transaction'
import ReportSchool from './Components/ReportSchool';
import DataSchool from './Data/DataSchool'
import background from './Img/132446517_4325253367489921_4696724745942349320_n.jpg'
import img from './Img/Prachachuen.jpg'

export default function App() {
  const [items,setItems] = useState([]);
  // const [people, setPeople] = useState(0);

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
    // console.log([...items, newItem]);
  }

  const [report_Prachachuen, setReport_Prachachuen] = useState(0);
  const [report_Indra, setReport_Indra] = useState(0);
  const [report_Kanok, setReport_Kanok] = useState(0);
  const [report_Burana, setReport_Burana] = useState(0);

  useEffect(() => {
    const schools = items.map(items => items.school);

    const Prachachuen = schools.filter(school => school === 'ประชาชื่น').reduce((acc, school) => acc + 1, 0);
    const Indra = schools.filter(school => school === 'อินทร').reduce((acc, school) => acc + 1, 0);
    const Kanok = schools.filter(school => school === 'กนกอาชีวะ').reduce((acc, school) => acc + 1, 0);
    const Burana = schools.filter(school => school === 'บูรณพล').reduce((acc, school) => acc + 1, 0);
    // console.log(Prachachuen,Indra,Kanok,Burana);
    setReport_Prachachuen(Prachachuen);
    setReport_Indra(Indra);
    setReport_Kanok(Kanok);
    setReport_Burana(Burana);
  }, [items,report_Prachachuen,report_Indra,report_Kanok,report_Burana]);
  
  return (
    <DataSchool.Provider value={{Prachachuen:report_Prachachuen,Indra:report_Indra
    ,Kanok:report_Kanok,Burana:report_Burana}}>

      <div style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.55), rgba(255,255, 255, 0.59)), url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}>

        <div style={{margin:"10px 0",padding:"10px"}}>
            <h1 className="text-3xl font-bold"> 4 Kings School</h1>
        </div>

        <div className='grid grid-rows-3 grid-flow-col gap-4 m-10'>
          <div className='row-span-3'>
            <ReportSchool items = {items}/>
          </div>

          <div className='col-span-2'>
            <div>
              <FormComponent onAddItem ={onAddNewItem}/>
            </div>

            <div>
              <Transaction items = {items}/>
            </div>

          </div>
        </div>
      </div>
    </DataSchool.Provider>
  )
}
