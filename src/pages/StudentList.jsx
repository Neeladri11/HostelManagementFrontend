import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const StudentList = () => {
  //Student(id, fullName, roll, age, class, hall, status)
  const [students, setStudent] = useState([]);
  const [count, setCount] = useState(0);
  const [stdId, setStdID] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState(0);
  const [guardianName, setGuardianName] = useState("");
  const [gurandianPhoneNo, setGuardianPhoneNo] = useState(0);
  const [mealServices, setMealServices] = useState("");
  const [laundryServices, setLaundryServices] = useState("");
  const [RoomId, setRoomId] = useState("");
  const [edit, setEdit] = useState(false);
  const [editStudent, setEditStudent] = useState();
  const [filterId, setfilterId] = useState(0);

  const [loading, setLoading] = useState("");

  const fetchStudent = async () => {
    try {
      const res = await axios.get(
        `https://localhost:44357/api/Student` /*{
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },
      }*/
      );
      setStudent(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(students);
  useEffect(() => {
    fetchStudent();
  }, [edit, count]);

  //edit handler
  const editHandler = (student) => {
    setEdit(true);
    setEditStudent(student);
  };
  //edit student

  const data = {
    id: stdId,
    studentName: name,
    gender: gender,
    dob: dob,
    address: address,
    phoneNo: phoneNo,
    guardianName: guardianName,
    guardianPhno: gurandianPhoneNo,
    mealServices: mealServices,
    laundryServices: laundryServices,
    roomId: RoomId,
  };
  const EditStudent = async () => {
    setLoading(true);
    try {
      const res = await axios({
        method: "put",
        url: `https://localhost:44357/api/Student/${editStudent.id}`,
        data: data,
        /*
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },*/
      });
      if (res) {
        setLoading(false);
        setEdit(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };

  // const [students, setStudents] = useState({
  // const students = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     gender: "Male",
  //     dob: "1998-05-10",
  //     address: "123 Main Street",
  //     phoneNo: "555-1234",
  //     guardianName: "Jane Doe",
  //     guardianPhoneNo: "555-5678",
  //     mealServices: true,
  //     laundryServices: false,
  //     roomId: "A101",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     gender: "Female",
  //     dob: "1999-03-15",
  //     address: "456 Elm Street",
  //     phoneNo: "555-4321",
  //     guardianName: "John Smith",
  //     guardianPhoneNo: "555-8765",
  //     mealServices: false,
  //     laundryServices: true,
  //     roomId: "B202",
  //   },
  //   {
  //     id: 3,
  //     name: "Mike Johnson",
  //     gender: "Male",
  //     dob: "1997-11-20",
  //     address: "789 Oak Street",
  //     phoneNo: "555-9876",
  //     guardianName: "Mary Johnson",
  //     guardianPhoneNo: "555-6543",
  //     mealServices: true,
  //     laundryServices: true,
  //     roomId: "C303",
  //   },
  // ];
  // });
  const deleteHandler = async (student) => {
    await axios
      .delete(`https://localhost:44357/api/Student/${student.id}`)
      .then(() => {
        setCount(count + 1);
      })
      .catch((err) => {});
  };

  const getHandler = async (e) => {
    e.preventDefault();
    await axios
      .get(`https://localhost:44357/api/Student/${filterId}`)
      .then((res) => {
        const filterStd = res.data;
        setStudent(students.filter((std) => std.id === filterStd.id));
      })
      .catch((err) => {});
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-100">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="py-8">
            <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
              <h2 className="text-xl font-bold">Student List</h2>
              <div className="text-end">
                <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                  <div className="relative">
                    <input
                      type="number"
                      className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Student ID"
                      onChange={(e) => setfilterId(e.target.value)}
                    />
                  </div>
                  <button
                    className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-green-600 shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200"
                    type="submit"
                    onClick={(e) => getHandler(e)}
                  >
                    Search by ID
                  </button>
                </form>
              </div>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        Gender
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        DOB
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        Phone No
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        Guardian Name
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        Guardian Phone No
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        Meal Services
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        Laundry Services
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        Room ID
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {students?.map((student) => (
                      <tr key={student.id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {student.id}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {student.studentName}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {student.gender === "M" ? "Male" : "Female"}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {student.dob}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {student.address}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {student.phoneNo}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {student.guardianName}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {student.guardianPhno}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {student.mealServices ? "Yes" : "No"}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {student.laundryServices ? "Yes" : "No"}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {student.roomId}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <button
                            onClick={() => editHandler(student)}
                            className="px-5 py-5 text-green-600 hover:text-green-900"
                          >
                            Edit
                          </button>

                          <button
                            className="px-5 py-5 text-red-600 hover:text-red-900"
                            onClick={() => deleteHandler(student)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* edit student */}

          {edit && (
            <div className="my-10 top-16 w-3/6 left-90 bg-white shadow-lg py-10 px-20 absolute">
              <div className="text-right">
                <button className="ml-auto" onClick={() => setEdit(false)}>
                  <IoMdClose className="text-right text-xl" />
                </button>
              </div>
              <div className="flex flex-wrap items-center justify-between">
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="name"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Student ID:
                  </label>
                  <input
                    onChange={(e) => setStdID(e.target.value)}
                    type="text"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={stdId}
                    placeholder="student id"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="name"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Full Name:
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={name}
                    placeholder="student full name"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="gender"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Gender:
                  </label>
                  <input
                    onChange={(e) => setGender(e.target.value)}
                    type="text"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={gender}
                    placeholder="gender"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="dob"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Date of Birth:
                  </label>
                  <input
                    onChange={(e) => setDob(e.target.value)}
                    type="date"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={dob}
                    placeholder="date of birth"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="address"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Address:
                  </label>
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={address}
                    placeholder="address"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="phoneNo"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Phone No:
                  </label>
                  <input
                    onChange={(e) => setPhoneNo(e.target.value)}
                    type="number"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={phoneNo}
                    placeholder="phone number"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="guardianName"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Guardian Name:
                  </label>
                  <input
                    onChange={(e) => setGuardianName(e.target.value)}
                    type="text"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={guardianName}
                    placeholder="guardian name"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="guardianPhoneNo"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Guardian Phone No:
                  </label>
                  <input
                    onChange={(e) => setGuardianPhoneNo(e.target.value)}
                    type="number"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={gurandianPhoneNo}
                    placeholder="guardian phone number"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="mealServices"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Meal Services:
                  </label>
                  <input
                    onChange={(e) => setMealServices(e.target.value)}
                    type="text"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={mealServices}
                    placeholder="meal services"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="laundryServices"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Laundry Services:
                  </label>
                  <input
                    onChange={(e) => setLaundryServices(e.target.value)}
                    type="text"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={laundryServices}
                    placeholder="laundry services"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="roomId"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Room ID:
                  </label>
                  <input
                    onChange={(e) => setRoomId(e.target.value)}
                    type="text"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={RoomId}
                    placeholder="room id"
                  />
                </div>
              </div>

              <button
                onClick={() => EditStudent()}
                type="button"
                className="my-4 mx-2 py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                {loading ? "Loading..." : "Save"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentList;
