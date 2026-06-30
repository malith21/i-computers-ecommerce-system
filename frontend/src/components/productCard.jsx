export default function ProductCard(props) {

    return (
        <div className="w-72 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">

            {/* Product Image */}
            <div className="overflow-hidden">
                <img
                    src={props.image}
                    alt={"Picture of " + props.name}
                    className="w-full h-52 object-cover hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Product Details */}
            <div className="p-5">

                {/* Category Badge */}
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-3">
                    Trending
                </span>

                {/* Product Name */}
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {props.name}
                </h2>

                {/* Price */}
                <p className="text-2xl font-bold text-green-600 mb-4">
                    LKR {props.price}
                </p>

                {/* Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-xl hover:from-blue-600 hover:to-blue-800 transition-all duration-300">
                    Buy Now
                </button>

            </div>
        </div>
    );
}