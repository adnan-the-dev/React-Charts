import './App.css';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, AreaChart, BarChart, Bar, Area, PieChart, Pie } from 'recharts';

const pdata = [
  {
    name: "python",
    student: "0",
    fee: "19",
    class: "34",
  },
  {
    name: "Javascript",
    student: "50",
    fee: "75",
    class: "33"
  },
  {
    name: "C++",
    student: "10",
    fee: "17",
    class: "10"
  },
  {
    name: "Java",
    student: "90",
    fee: "50",
    class: "67"
  },
  {
    name: "C#",
    student: "53",
    fee: "34",
    class: "28"
  },
  {
    name: "React Js",
    student: "80",
    fee: "29",
    class: "76"
  }
]
function App() {
  return (
    <>
      <h1 className='line-chart'>
        Line Chart
      </h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata} width={500} height={300} margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + " programming"} />
          <YAxis />
          <Tooltip contentStyle={{ background: "" }} />
          <Legend />
          <Line type="monotone" dataKey="student" stroke='red' activeDot={{ r: 5 }} />
          <Line type="monotone" dataKey="fee" stroke='blue' activeDot={{ r: 5 }} />
          <Line type="monotone" dataKey="class" stroke='green' activeDot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>





      <h1 className='line-chart'>
        Area Chart
      </h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart data={pdata} width={500} height={300} margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + " programming"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="student" fill='#8884d8' />
          <Area type="monotone" dataKey="fee" stroke='blue' />
          <Area type="monotone" dataKey="class" stroke='green' />
        </AreaChart>
      </ResponsiveContainer>




      <h1 className='line-chart'>
        Bar Chart
      </h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart data={pdata} width={500} height={300} margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + " programming"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar type="monotone" dataKey="student" fill='#8884d8' />
          <Bar type="monotone" dataKey="fee" fill='#82ca9d' />
          <Bar type="monotone" dataKey="class" fill='#DDE408' />
        </BarChart>
      </ResponsiveContainer>

    </>
  );
}

export default App;
