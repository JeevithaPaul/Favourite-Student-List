
function StudentItem({ student, isFavourite, onFavourite }) {

    return (
        <div className="border p-4 rounded-lg flex justify-between items-center">

            <div>
                <h2 className="text-xl font-semibold">
                    {student.name}
                </h2>

                <p>
                    Roll No: {student.rollNo}
                </p>
            </div>

            <button
                onClick={function () {
                    onFavourite(student);
                }}
                className={`${isFavourite ? "bg-gray-500" : "bg-green-600"
                    } text-white px-4 py-2 rounded`}>
                {isFavourite ? "Added" : "Add to Favourite"}
            </button>

        </div >
    );
}

export default StudentItem;