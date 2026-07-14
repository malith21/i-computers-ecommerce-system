const SampleProducts = [
  {
    productId: "P001",
    name: "Apple MacBook Air M3 13-inch",
    altname: [
      "MacBook Air M3",
      "Apple Laptop",
      "Mac Air",
      "13-inch MacBook"
    ],
    price: 429999,
    labelledPrice: 449999,
    description:
      "Apple MacBook Air powered by the M3 chip with 16GB RAM and 512GB SSD. Lightweight, powerful, and perfect for students and professionals.",
    images: [
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    ],
    brand: "Apple",
    model: "MacBook Air M3",
    category: "Laptop",
    isAvailable: true,
    stock: 15
  },

  {
    productId: "P002",
    name: "Dell XPS 15",
    altname: [
      "Dell Laptop",
      "XPS 15",
      "Dell XPS",
      "Dell Notebook"
    ],
    price: 539999,
    labelledPrice: 569999,
    description:
      "Dell XPS 15 with Intel Core i7, 16GB RAM, 1TB SSD and NVIDIA RTX graphics for creators and developers.",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1518770660439-4636190af475"
    ],
    brand: "Dell",
    model: "XPS 15",
    category: "Laptop",
    isAvailable: true,
    stock: 10
  },

  {
    productId: "P003",
    name: "Logitech G Pro X Gaming Headset",
    altname: [
      "Gaming Headset",
      "Logitech Headphones",
      "G Pro X",
      "Headset"
    ],
    price: 38999,
    labelledPrice: 42999,
    description:
      "Professional gaming headset with Blue VO!CE microphone, DTS surround sound and premium comfort.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944"
    ],
    brand: "Logitech",
    model: "G Pro X",
    category: "Headphones",
    isAvailable: true,
    stock: 30
  },

  {
    productId: "P004",
    name: "ASUS ROG Strix RTX 4070 Graphics Card",
    altname: [
      "RTX 4070",
      "Graphics Card",
      "GPU",
      "ASUS ROG GPU"
    ],
    price: 269999,
    labelledPrice: 289999,
    description:
      "ASUS ROG Strix NVIDIA GeForce RTX 4070 12GB GDDR6X graphics card for high-performance gaming and content creation.",
    images: [
      "https://images.unsplash.com/photo-1591488320449-011701bb6704",
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
    ],
    brand: "ASUS",
    model: "ROG Strix RTX 4070",
    category: "Graphics Card",
    isAvailable: true,
    stock: 8
  },

  {
    productId: "P005",
    name: "Samsung Odyssey G5 27-inch Gaming Monitor",
    altname: [
      "Samsung Monitor",
      "Gaming Monitor",
      "Odyssey G5",
      "27-inch Monitor"
    ],
    price: 99999,
    labelledPrice: 109999,
    description:
      "27-inch QHD gaming monitor with 165Hz refresh rate, 1ms response time and HDR support.",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6"
    ],
    brand: "Samsung",
    model: "Odyssey G5",
    category: "Monitor",
    isAvailable: true,
    stock: 20
  }
];




import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";



export default function AdminProductsPage(){
    const [products , setProducts] = useState(SampleProducts)


    return (
        
            <div className="w-full h-full">

                {
                    products.map(
                        (item)=>{
                            console.log(item)
                            return <p key={item.productId}>
                                {item.productId}
                            </p>
                            
                        }
                    )
                }

                <table>
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>stock</th>   
                        </tr>
                    </thead>


                    <tbody>
                        <tr>
                            <td>PR001</td>
                            <td>DELL Inspiration 15 3520 Laptop</td>
                            <td>185,000</td>
                            <td>4</td>
                        </tr>

                        <tr>
                            <td>PR002</td>
                            <td>Logitech Light Sync Gaming Mouse</td>
                            <td>8,500</td>
                            <td>20 </td>
                        </tr>
    

                    </tbody>

                </table>






                 <Link to="/admin/add-product" 
                        className= "fixed bottom-8 right-8 w-[60px] h-[60px] bg-accent flex justify-center items-center text-white text-3xl rounded-full shadow-lg hover:bg-black">
                     <FaPlus />
                 </Link>
            </div>
        
    )
} 