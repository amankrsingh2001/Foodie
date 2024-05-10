const ItemList = ({ items }) => {

    // Check if items is defined before mapping over it
    if (!items) {
        return <div>No items to display</div>;
    }

 

    return (
        <div>
            {
                items.map((item,index) => { return  <div key={index}>
                    <div>
                        <span>{item?.card?.info?.name  }</span>
                        <p>{item?.card?.info?.description }</p>
                    </div>
                </div>})
            }
        </div>
    );
}

export default ItemList;
{/* <div key={index}>{item?.card?.info?.name}</div> */}