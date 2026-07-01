import { Routes, Route } from "react-router-dom";
export default function AdminPage() {
    
    return (
        <div className="w-full h-screen flex items-center bg-accent">
                <div className="w-[300px] h-full text-white">
                    <a href="/admin" className="block p-4 hover:bg-accent-light">Orders</a>
                    <a href="/admin/products" className="block p-4 hover:bg-accent-light">Products</a>
                    <a href="/admin/users" className="block p-4 hover:bg-accent-light">Users</a>
                    <a href="/admin/reviews" className="block p-4 hover:bg-accent-light">Reviews</a>
                </div>

                <div className="w-[calc(100%-300px)] h-full bg-primary border-[10px] border-accent rounded-2xl">
                    <Routes>
                        <Route path="/*" element={<h1>Orders Dashboard</h1>} />
                        <Route path="/products/*" element={<h1>Products Dashboard</h1>} />
                        <Route path="/users/*" element={<h1>Users Dashboard</h1>} />
                        <Route path="/reviews/*" element={<h1>Reviews Dashboard</h1>} />
                    </Routes>

                </div>

        </div>
    )
}