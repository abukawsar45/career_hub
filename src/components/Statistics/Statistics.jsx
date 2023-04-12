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
            <div className='relative bg-slate-100'>
                <img className='w-full h-64 ' src="https://img.freepik.com/free-vector/pastel-watercolor-with-golden-frame_23-2148796557.jpg?size=626&ext=jpg&ga=GA1.1.1626292175.1681061547&semt=ais" alt="" />
                <div className='flex  justify-around'>
                    <h1 className=' text-4xl my-auto text-center -mt-40 font-medium absolute'>My Assignment Marks show in rechart</h1>
                </div>
            </div>
            <div className='flex justify-center block md:hidden my-5'>
                <BarChart
                    width={500}
                    height={300}
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
                    <Bar dataKey="assignmentMark"   shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart >
           </div>
            <div className='flex justify-center hidden md:block my-5'>
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
                    <Bar dataKey="assignmentMark"   shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart >
           </div>
        </> 
    );
};

export default Statistics;

