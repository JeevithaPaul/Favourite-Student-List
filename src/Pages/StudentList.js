
import { useContext } from "react";
import { StudentContext } from "../Context/StudentContext";
import StudentItem from "../Components/StudentItem";

function StudentList() {

  const { favourites, addToFavourite } = useContext(StudentContext);

  const students = [
    { id: 1, name: "Arun", rollNo: "ST101" },
    { id: 2, name: "Priya", rollNo: "ST102" },
    { id: 3, name: "Rahul", rollNo: "ST103" },
    { id: 4, name: "Divya", rollNo: "ST104" },
    { id: 5, name: "Karthik", rollNo: "ST105" }
  ];

  function handleFavourite(student) {

    const alreadyFavourite = favourites.some(function(item) {
      return item.id === student.id;
    });

    if (!alreadyFavourite) {
      addToFavourite(student);
    }
  }

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6 font-serif text-center">
        Student List
      </h1>

      <div className="grid gap-4">

        {
          students.map(function(student) {

            const isFavourite = favourites.some(function(item) {
              return item.id === student.id;
            });

            return (
              <StudentItem
                key={student.id}
                student={student}
                isFavourite={isFavourite}
                onFavourite={handleFavourite}
              />
            );

          })
        }

      </div>

    </div>
  );
}

export default StudentList;