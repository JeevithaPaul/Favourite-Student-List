
import { createContext, useState } from "react";

export const StudentContext = createContext();

function StudentProvider({ children }) {

  const [favourites, setFavourites] = useState([]);

  function addToFavourite(student) {
    setFavourites([...favourites, student]);
  }

  function removeFromFavourite(id) {
    setFavourites(
      favourites.filter(function(student) {
        return student.id !== id;
      })
    );
  }

  return (
    <StudentContext.Provider
      value={{
        favourites,
        addToFavourite,
        removeFromFavourite
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;