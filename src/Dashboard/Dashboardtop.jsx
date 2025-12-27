import './Dashboard.css';
import {Etudiants ,Timetables} from "../Data/data.jsx"
export default function Dashboard() {

const totalExams = Timetables.length;
const examsPerType= Timetables.reduce((acc, exam) => {
  acc[exam.Type] = (acc[exam.Type] || 0) + 1;
  return acc;
}, {});
const examsDone = 2; // example: 2 exams completed
  const examsLeft = totalExams - examsDone;

  const radius = 60;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  // Fraction left
  const progress = examsLeft / totalExams;
  const strokeDashoffset = circumference - progress * circumference;

  // Calculate percentage
  const percentageLeft = Math.round(progress * 100);

  // Color based on remaining percentage
  let color = "#0D47A1"; // green
  

  return (
    <div className=" dashboard">
       <div className='welcome'>
        <div className='Rightwelcom'>
            <h1>Hello {Etudiants[0].Name}!</h1>
            <p>Good to see you back!</p>
        </div>
        <div className='type' >
            <div style={{ display: "flex", gap: "20px" }}>
 {Object.entries(examsPerType).map(([type, count]) => (
            <div key={type} className="stat-card">
              <h5>{type} </h5>
              <span>{count}</span>
          
            </div>
          ))}
</div>

        </div>
        <dir className='circle'>  <svg height={radius * 2} width={radius * 2}>
      {/* Background circle */}
      <circle
        stroke="#eee"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      {/* Progress circle */}
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset, transition: "stroke-dashoffset 0.5s" }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        transform={`rotate(-90 ${radius} ${radius})`}
      />
      {/* Text inside */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="16"
        fontWeight="bold"
      >
        {percentageLeft}%
      </text>
    </svg>
  </dir>
       </div>
      
    </div>)}