import React from 'react'
import Card from './component/card'

const jobData = [
  {
    "id": 1,
    "logo": "https://i.pinimg.com/736x/e2/f7/cd/e2f7cd5bdabda71797d133f41ecdb6e1.jpg",
    "company": "PixelCraft Studio",
    "posted": "2 days ago",
    "role": "Graphic Designer",
    "workTime": "Part Time",
    "experience": "Senior",
    "salaryPerHour": 800
  },
  {
    "id": 2,
    "logo": "https://i.pinimg.com/736x/1a/2b/3c/1a2b3c4d5e6f7g8h9i0.jpg",
    "company": "CodeWave Labs",
    "posted": "5 days ago",
    "role": "Software Developer",
    "workTime": "Full Time",
    "experience": "Junior",
    "salaryPerHour": 600
  },
  {
    "id": 3,
    "logo": "https://i.pinimg.com/736x/9f/8e/7d/9f8e7d6c5b4a3a2a1.jpg",
    "company": "UXHive",
    "posted": "1 day ago",
    "role": "UI/UX Designer",
    "workTime": "Remote",
    "experience": "Mid Level",
    "salaryPerHour": 750
  },
  {
    "id": 4,
    "logo": "https://i.pinimg.com/736x/aa/bb/cc/aabbccddeeff00112233.jpg",
    "company": "DataNest",
    "posted": "7 days ago",
    "role": "Data Analyst",
    "workTime": "Contract",
    "experience": "Senior",
    "salaryPerHour": 900
  },
  {
    "id": 5,
    "logo": "https://i.pinimg.com/736x/44/55/66/44556677889900.jpg",
    "company": "WebForge",
    "posted": "3 days ago",
    "role": "Frontend Developer",
    "workTime": "Internship",
    "experience": "Fresher",
    "salaryPerHour": 400
  },
  {
    "id": 6,
    "logo": "https://i.pinimg.com/736x/77/88/99/778899aabbccdd.jpg",
    "company": "CloudCore",
    "posted": "6 days ago",
    "role": "Backend Developer",
    "workTime": "Full Time",
    "experience": "Mid Level",
    "salaryPerHour": 850
  },
  {
    "id": 7,
    "logo": "https://i.pinimg.com/736x/11/22/33/112233445566.jpg",
    "company": "AI Sphere",
    "posted": "4 days ago",
    "role": "ML Engineer",
    "workTime": "Remote",
    "experience": "Senior",
    "salaryPerHour": 1200
  },
  {
    "id": 8,
    "logo": "https://i.pinimg.com/736x/ab/cd/ef/abcdef123456.jpg",
    "company": "DesignMint",
    "posted": "8 days ago",
    "role": "Motion Designer",
    "workTime": "Part Time",
    "experience": "Mid Level",
    "salaryPerHour": 700
  },
  {
    "id": 9,
    "logo": "https://i.pinimg.com/736x/98/76/54/9876543210.jpg",
    "company": "CyberSafe",
    "posted": "10 days ago",
    "role": "Cyber Security Analyst",
    "workTime": "Full Time",
    "experience": "Junior",
    "salaryPerHour": 650
  },
  {
    "id": 10,
    "logo": "https://i.pinimg.com/736x/55/aa/99/55aa99bbccdd.jpg",
    "company": "AppVibe",
    "posted": "Today",
    "role": "Android Developer",
    "workTime": "Remote",
    "experience": "Mid Level",
    "salaryPerHour": 780
  }
]

const App = () => {
  return (
    <>
    <div className="container">
      {jobData.map( function(jobData, index) 
      {
        return <div key={index}><Card logo={jobData.logo} company={jobData.company} posted={jobData.posted} role={jobData.role} workTime={jobData.workTime} experience={jobData.experience} salaryPerHour={jobData.salaryPerHour} /></div>
      })}
    </div>
    </>
  )
  }

export default App