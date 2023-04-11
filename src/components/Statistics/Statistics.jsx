import { useLoaderData } from 'react-router-dom';
import { BarChart, Tooltip, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

// // const data

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// //
const Statistics = () => {
    const data = useLoaderData()
    return (
        <>
            <h1 className='text-3xl text-center my-8'>My Assignment get Marks show rechart</h1>
            <BarChart
                width={1000}
                height={500}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >   <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="assignmentName" />
                <YAxis />
                <Bar dataKey="assignmentMark" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart >
        </>
    );
};

export default Statistics;



// App.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';
