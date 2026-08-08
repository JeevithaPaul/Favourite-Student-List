
import { useContext } from "react";
import { StudentContext } from "../Context/StudentContext";

function FavouriteStudents() {

  const { favourites, removeFromFavourite } = useContext(StudentContext);

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Favourite Students
      </h1>

      {
        favourites.length === 0 ? (

          <p className="text-gray-600">
            No favourite students added yet
          </p>

        ) : (

          <div className="grid gap-4">

            {
              favourites.map(function(student) {

                return (
                  <div
                    key={student.id}
                    className="border p-4 rounded-lg flex justify-between items-center"
                  >

                    <div>
                      <h2 className="text-xl font-semibold">
                        {student.name}
                      </h2>

                      <p>
                        Roll No: {student.rollNo}
                      </p>
                    </div>

                    <button
                      onClick={function() {
                        removeFromFavourite(student.id);
                      }}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Remove
                    </button>

                  </div>
                );

              })
            }

          </div>

        )
      }

    </div>
  );
}

export default FavouriteStudents;