// TableComponent.jsx

import React from "react";
import HomeLayout from "../../Layout/HomeLayout";

const AllCourses = () => {
  // Sample data for the table (You can modify this or pass in dynamic data)
  const tableData = [
    {
      id: 1,
      course: "BBA (Aviation Management)",
      fee: "BOYS 28880, GIRLS 28672",
      seats: 60,
      duration: "4 yrs",
      isElligibility: false,
    },
    {
      id: 2,
      course: "B.Com (Retail Operations)",
      fee: "BOYS 23380, GIRLS 23172",
      seats: 60,
      duration: "4 yrs",
      isElligibility: false,
    },
    {
      id: 3,
      course: "B.Com (Logistics)",
      fee: "BOYS 23380, GIRLS 23172",
      seats: 60,
      duration: "4 yrs",
      isElligibility: false,
    },
    {
      id: 4,
      course: "Diploma in Aviation Security",
      fee: "28880 (Total Fee)",
      seats: 40,
      duration: "1 yrs, 6 months",
      isElligibility: false,
    },
    {
      id: 5,
      course: "Certificate in Airport Warehouse Coordinator",
      fee: "13690 (Total Fee)",
      seats: 30,
      duration: "3 months",
      isElligibility: false,
    },
    {
      id: 7,
      eligibility:
        "Eligibility : 10+2 with 55% from Science & Maths stream (5% relaxation to SC/ST/OBC for M.P. candidate) from Board of Secondary Education, Madhya Pradesh or any equivalent examination from any other board recognized by the state government",
      isElligibility: true,
    },
    {
      id: 6,
      course: "B. SC. (Aviation Management)",
      fee: "BOYS 28880, GIRLS 28672",
      seats: 60,
      duration: "4 yrs",
      isElligibility: false,
    },
    {
      id: 8,
      eligibility:
        "Eligibility  : 10+2 with 55% from Science & Maths stream (5% relaxation to SC/ST/OBC for M.P. candidate) from Board of Secondary Education, Madhya Pradesh or any equivalent examination from any other board recognized by the state government",
      isElligibility: true,
    },
  ];

  return (
    <HomeLayout>
      <div className="m-10 box-shadow">
        <table
          border="1px solid black"
          cellPadding="10"
          className="border border-gray-600 rounded-lg"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th className="border text-white bg-blue-900 border-white">
                S.No.
              </th>
              <th className="border text-white bg-blue-900 border-white">
                Course
              </th>
              <th className="border text-white bg-blue-900 border-white">
                Fee Per Semester (Rs/-)
              </th>
              <th className="border text-white bg-blue-900 border-white">
                Seats
              </th>
              <th className="border text-white bg-blue-900 border-white">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={row.id}>
                {row.isElligibility ? (
                  <>
                    <td className="border text-center bg-white border-gray-600"></td>
                    <td
                      className="border text-left bg-white border-gray-600"
                      colSpan={4}
                    >
                      {" "}
                      <p> {row.eligibility} </p>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border text-center bg-white border-gray-600">
                      {row.id}
                    </td>
                    <td className="border text-left   bg-white border-gray-600 font-semibold">
                      {row.course}
                    </td>
                    <td className="border text-center bg-white border-gray-600">
                      {row.fee}
                    </td>
                    <td className="border text-center bg-white border-gray-600">
                      {row.seats}
                    </td>
                    <td className="border text-center bg-white border-gray-600">
                      {row.duration}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </HomeLayout>
  );
};

export default AllCourses;
