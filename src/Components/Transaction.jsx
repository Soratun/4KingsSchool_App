import Item from './Item';

const Transaction = (props) => {   
    const {items} = props;

    const itemListStyle = {
        listStyleType: 'none',
        padding: 0,
        marginBottom: '50px',
    };
    return (
        <div>
            <ul style={itemListStyle}>
            {items.map((element)=>{
                // return <Item {...element} key={element.id}/>
                return <Item name={element.name} school={element.school} key={element.id}/>
            })}
        </ul>
        </div>
    )
}
export default Transaction;