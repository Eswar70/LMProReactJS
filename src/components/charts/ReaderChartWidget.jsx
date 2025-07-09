//import { useSelector } from 'react-redux';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, PolarRadiusAxis, Tooltip } from 'recharts';

const radarData = [
  { metric: 'Quality', score: 85 },
  { metric: 'Speed', score: 90 },
  { metric: 'Support', score: 75 },
  { metric: 'Reliability', score: 80 },
];

const RadarChartWidget = () => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-lg hover:shadow-neon transition-shadow group">
    <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">Performance Radar</h3>
    <div className="animate-fadeIn transform hover:scale-105 transition-transform duration-300">
    <ResponsiveContainer width="100%" height={200}>
      <RadarChart data={radarData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="metric" />
        <PolarRadiusAxis angle={30} domain={[0,100]} />
        <Radar name="Score" dataKey="score" stroke="#f50057" fill="#f50057" fillOpacity={0.4} />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
    </div>
  </div>
);

export default RadarChartWidget;
