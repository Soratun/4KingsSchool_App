import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

const FormComponent = (props) => {
    const kings_school = ["ประชาชื่น","อินทร","กนกอาชีวะ","บูรณพล"];
    // const people = props.people;
    const [people, setPeople] = useState(0);
    const [name,setName] = useState('');
    const [fromValid,setfromValid] = useState(false);
    const [people_school, setPeople_school] = useState({
        'ประชาชื่น': 0,
        'อินทร': 0,
        'กนกอาชีวะ': 0,
        'บูรณพล': 0
    });
    const updatePeople = (name) => {
        setPeople_school(prevState => ({
            ...prevState, // คัดลอกค่าเดิมของ state ไว้ก่อน
            [name]: prevState[name] + 1 // อัพเดทค่าที่ต้องการด้วยชื่อ key ที่ถูกส่งเข้ามา
        }));
    };
    
    const InputName = (event) => {
        setName(event.target.value);
    }
    const Inputpeople = (event) => {
        if(event.target.value < 0){
            toast.error('ระบุจำนวนคนเป็นจำนวนเต็มบวกเท่านั้น');
        }
        else{
            setPeople(event.target.value);
        }
        console.log(people);
      }
    const AvgPeople = () => {
        const avg = people / kings_school.length;
        return avg;
    }
    const Random_kings = () => {
        const avgPeople_ceil = Math.ceil(AvgPeople());
        const avgPeople_floor = Math.floor(AvgPeople());
        const schoolCounts = { ...people_school };
        const availableSchools_ceil = kings_school.filter(school => schoolCounts[school] < avgPeople_ceil);
        const availableSchools_floor = kings_school.filter(school => schoolCounts[school] < avgPeople_floor);

        if (availableSchools_floor.length > 0) {
            const random = Math.floor(Math.random() * availableSchools_floor.length);
            return availableSchools_floor[random];
        } else if (availableSchools_ceil.length > 0) {
            const random = Math.floor(Math.random() * availableSchools_ceil.length);
            return availableSchools_ceil[random];
        }
        else {
            const random = Math.floor(Math.random() * kings_school.length);
            return kings_school[random];
        }
    }
    
    const SaveItem = (event) => {
        event.preventDefault();
    
        const sum = Object.values(people_school).reduce((total, num) => total + num, 0);
        if (sum >= people) {
            toast.error('จำนวนคนเต็มแล้ว');
            // console.log(people_school);
            setName('');
            return;
        }

        const school = Random_kings();
        updatePeople(school);
    
        const itemData = {
            id: uuidv4(),
            name: name,
            school: school 
        };
    
        props.onAddItem(itemData);
        setName('');
    }
    
    useEffect(() => {
        const cheakData = name.trim().length > 0;
        setfromValid(cheakData);
    },[name]);

    
    return(
        <div>
            <div>
                <label className="w-15 m-5 p-5 text-2xl font-sans font-bold text-black decoration-solid bg-white
                shadow-xl shadow-indigo-500/40"> จำนวนคน : </label>
                <input type="number" placeholder="ระบุจำนวนคน" onChange={Inputpeople} value={people}
                className="w-15 p-5 ps-5 box-border md:box-content shadow-xl shadow-indigo-500/40" min={0}/>
            </div>
            <form onSubmit={SaveItem}>
                <div className='p-5'>
                    <label className='w-15 m-5 p-5 text-2xl font-sans font-bold text-black 
                    decoration-solid bg-white  shadow-xl shadow-indigo-500/40'>ชื่อ : </label>
                    <input type="text" placeholder="ระบุชื่อ" onChange={InputName} value={name}
                    className='w-15 p-5 ps-5 box-border md:box-content shadow-xl shadow-indigo-500/40'/>
                </div>
                <div className='p-5'>
                    <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' disabled={!fromValid}>เพิ่มข้อมูล</button>
                </div>
                <ToastContainer />
            </form>
           
        </div>
    )
}

export default FormComponent;