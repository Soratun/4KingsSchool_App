import img from "../Img/Prachachuen.jpg";
import Indra from "../Img/Indra.jpg";
import Kanok from "../Img/Kanok.jpg";
import Burana from "../Img/Burana.jpg";

const Item = (props) => {
    const {name,school} = props;
    const style = {
        position: 'absolute',
        width: '45px',
        height: '45px',
        border: '3px solid ',
        borderRadius: '50%',
        overflow: 'hidden',
        objectFit: 'cover',
        right: '135px', 
        top: '50%', 
        transform: 'translateY(-50%)', 
    }
    const itemStyle = {
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
        padding: '15px',
        color: '#333',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px 0',
        position: 'relative'
    };

    return (
        <li style={itemStyle}>{name} <div><span>สถาบัน: {school}
            <img src={school === 'ประชาชื่น' ? img : 
            school === 'อินทร' ? Indra : 
            school === 'กนกอาชีวะ' ? Kanok : Burana} 
            alt={school} style={style}/></span></div>
        </li>
        
    );
}

export default Item;