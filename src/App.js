
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import StudentList from "./Pages/StudentList";
import FavouriteStudents from "./Pages/FavouriteStudents";

function App() {
    return (
        <BrowserRouter>

            <nav className="bg-green-700 text-white px-8 py-5 flex justify-between items-center">

                <h1 className="text-3xl font-bold font-serif">
                    Student Portal
                </h1>

                <div className="flex gap-8">

                    <Link
                        to="/"
                        className= "hover:text-yellow-300 transition font-sans hover:underline">
                        Student List
                    </Link>
 
                     <Link
                        to="/favourites"
                        className="hover:text-yellow-300 transition font-sans hover:underline">
                        Favourite Students
                    </Link>

                </div>

            </nav>

            <Routes>

                <Route path="/" element={<StudentList />} />

                <Route
                    path="/favourites"
                    element={<FavouriteStudents />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;