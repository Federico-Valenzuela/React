import Swal from "sweetalert2";

const CardWidget = () => {
    const notificacion = ()=>{
        Swal.fire("mostrat carrito")
    }

    
    return ( 
    <>
    <div id="divCartNotification">
    <button className="btn btn-primary" onClick={()=>notificacion()}>carrito 1 <i className="fa fa-shopping-cart"></i></button>
   
    </div>
    
    </>
    )
}
 
export default CardWidget;


  