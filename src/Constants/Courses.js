import { nanoid } from "nanoid"
import Certificate from '../assets/course/Certificate.jpg'
let course = [
    {
        id:nanoid(),
        name:'Diploma course',
        // courseList:['Diploma in Aviation Security'],
        // links:['#'],
        courseInfo:{
            course:['Diploma in Aviation Security'],
            link:['#']
            // content:"lorem ipsumm"
        },
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGheLhioz5jvKgLJN96kt9lqMXreVBdZMmJQ&s'
    },
    {
        id:nanoid(),
        name:'Undergraduate course',
        // courseList:['BBA (Aviation Management)', 'B.Com (Retail Operations)','B.Com (Logistics)','B.SC (Aviation Management)'],
        // links:['https://www.amecet.in/bachelor-of-business-administration-bba-in-aviation-career-scope-opportunity.php','https://www.tcsc.edu.in/page/academics-undergraduate-programs-academics-bcom-retail-operations-academics/','#'],
        courseInfo:{
            course:['BBA (Aviation Management)', 'B.Com (Retail Operations)','B.Com (Logistics)','B.SC (Aviation Management)'],
            link:['#','#'],
        },
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9587Y9_BehpdG0nBAPy1ftvAY2qCfkfXTtQ&s'
    },
    {
        id:nanoid(),
        name:'Certificate course',
        // courseList:['Certificate in airport warehouse Coordinator'],
        // links:['#'],
        courseInfo:{
            course:['Certificate in airport warehouse Coordinator'],
            link:['#']
        },
        image:Certificate
    }
]

export default course