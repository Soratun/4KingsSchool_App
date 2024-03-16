import { useContext } from "react";
import DataSchool from "../Data/DataSchool";

const ReportSchool = () => {
    const {Prachachuen,Indra,Kanok,Burana} = useContext(DataSchool);

    return(
        <div>
            <div>
                <h1 className="text-2xl font-sans font-bold text-black bg-slate-100 
                shadow-xl shadow-indigo-500/40 rounded-tl-lg rounded-tr-lg">สถาบัน</h1>
            </div>
            <div>
                <div className="grid grid-cols-2 gap-4 flexjustify-between 
                bg-white  shadow-xl shadow-indigo-500/40">
                    <div>
                        <h2>ประชาชื่น</h2>
                        <p>{Prachachuen}</p>
                    </div>
                    <div>
                        <h2>อินทร</h2>
                        <p>{Indra}</p>
                    </div>
                    <div>
                        <h2>กนกอาชีวะ</h2>
                        <p>{Kanok}</p>
                    </div>
                    <div>
                        <h2>บูรณพล</h2>
                        <p>{Burana}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportSchool;