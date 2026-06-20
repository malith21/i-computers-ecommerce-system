export default function ProductCard(props) {


    console.log(props.name);

     return(
         <div className="product-card boarder">
            <h1>{props.name}</h1>
            <img src={props.image} alt={"picture of a " + props.name}/> 
            <p>LKR {props.price}</p> 
            <button>Buy Now</button>
          </div>
     )
}