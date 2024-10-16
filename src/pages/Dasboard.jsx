import React from 'react'
import logo from '../assets/channels4_profile-removebg-preview.png';
import mars from '../assets/Без названия (1).png'

const groups = [
  { id: "F1-1779", teacher: "Mirzaaliyev Bekzod", type: "Juft", students: 6, time: "17:30", color: "bg-red-500" },
  { id: "F2-1063", teacher: "Mirzaaliyev Bekzod", type: "Juft", students: 9, time: "18:40", color: "bg-red-500" },
  { id: "F2-1703", teacher: "Mirzaaliyev Bekzod", type: "Toq", students: 6, time: "09:00", color: "bg-red-500" },
  { id: "FRONT-1010", teacher: "Mirzaaliyev Bekzod", type: "Toq", students: 12, time: "10:10", color: "bg-yellow-400" },
  { id: "FRONT-1012", teacher: "Mirzaaliyev Bekzod", type: "Toq", students: 12, time: "15:10", color: "bg-yellow-400" },
  { id: "FRONT-908", teacher: "Mirzaaliyev Bekzod", type: "Toq", students: 7, time: "16:20", color: "bg-yellow-400" },
  { id: "FRONT-926", teacher: "Mirzaaliyev Bekzod", type: "Toq", students: 7, time: "09:00", color: "bg-yellow-400" },
  { id: "FRONT-998", teacher: "Mirzaaliyev Bekzod", type: "Toq", students: 9, time: "15:10", color: "bg-yellow-400" },
  { id: "INPR-1021", teacher: "Mirzaaliyev Bekzod", type: "Juft", students: 1, time: "13:30", color: "bg-red-500" },
  { id: "INPR-1641", teacher: "Mirzaaliyev Bekzod", type: "Toq", students: 1, time: "14:00", color: "bg-red-500" },
  { id: "INPR-961", teacher: "Mirzaaliyev Bekzod", type: "Juft", students: 1, time: "12:00", color: "bg-red-500" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 border-gray-400 shadow-md shadow-gray-400  rounded-lg mt-10 ">
      <div className='flex flex-wrap gap-10 '>
   
        <h2 className='font-bold text-2xl'>Guruhlar</h2>
        <div className="w-full h-1 bg-black"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((group) => (
            <div key={group.id} className="card w-72 bg-white shadow-xl rounded-lg p-4">
              <div className={`${group.color} text-white text-center rounded-t-lg flex justify-center items-center flex-col`}>
                <img src={logo} alt="" className="w-14 mt-3" />
                <h1 className="text-xl font-bold gap-[16px]">{group.id}</h1>
                <p className="mb-3">{group.teacher} | {group.type}</p>
              </div>
              <div className="p-4 text-left">
                <div className="flex justify-between items-center">
                  <p className="text-sm">Talabalar</p>
                  <p className="text-sm font-bold">{group.students}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm">Vaqt</p>
                  <p className="text-sm font-bold">{group.time}</p>
                </div>
              </div>
              <div className="text-end p-4">
                <button className="text-white bg-success rounded-lg px-4 py-2">Tekshirish</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
