const ItemListContainer = ({greeting="hola soy greeting"}) => {
    console.log(greeting)
    

    return (
         <>
         <div>
            <p>{greeting}</p>
         </div>
        </> 
    );
}
 
export default ItemListContainer;
