import { useSelector } from 'react-redux';
import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ComposedChartWidget = () => {
  const data = useSelector((state) => state.data.userActivity.map((d, i) => ({
    ...d,
    sales: Math.floor(Math.random() * 300) + 50
  })));

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-lg hover:shadow-neon transition-shadow group">
      <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">Activity & Sales</h3>
      <div className="animate-fadeIn transform hover:scale-105 transition-transform duration-300">
      <ResponsiveContainer width="100%" height={200}>
        <ComposedChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" barSize={20} fill="#82ca9d" animationDuration={800}/>
          <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} dot animationDuration={800} />
        </ComposedChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};
export default ComposedChartWidget;
