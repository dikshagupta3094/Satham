import { nanoid } from "nanoid"

let course = [
    {
        id:nanoid(),
        name:'Diploma course',
        courseList:['Diploma in Aviation Security'],
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGheLhioz5jvKgLJN96kt9lqMXreVBdZMmJQ&s'
    },
    {
        id:nanoid(),
        name:'Undergraduate course',
        courseList:['BBA (Aviation Management)', 'B.Com (Retail Operations)','B.Com (Logistics)','B.SC (Aviation Management)'],
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9587Y9_BehpdG0nBAPy1ftvAY2qCfkfXTtQ&s'
    },
    {
        id:nanoid(),
        name:'Certificate course',
        courseList:['Certificate in airport warehouse Coordinator'],
        image:'https://smsvaranasi.com/uploads/news/864/bba.jpg'
    }
]

export default course