import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';

const Plotly3DLineWidget = () => {
  const data = useSelector(state => state.data.userActivity);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-lg animate-fadeIn hover:scale-105 transition-transform duration-300">
      <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">3D User Activity</h3>
      <Plot
        data={[{
          x: data.map(d => d.date),
          y: data.map(d => d.users),
          z: Array(data.length).fill(0),
          mode: 'lines+markers',
          type: 'scatter3d',
          marker: { size: 4, color: '#3b82f6' },
          line: { width: 2, color: '#3b82f6' }
        }]}
        layout={{
          margin: { l: 0, r: 0, b: 0, t: 0 },
          showlegend: false,
          paper_bgcolor: 'transparent',
          scene: { xaxis: {title:'Day'}, yaxis:{title:'Users'}, zaxis:{visible:false} }
        }}
        style={{ width: '100%', height: '280px' }}
        config={{ displayModeBar: false }}
        useResizeHandler
      />
    </div>
  );
};
export default Plotly3DLineWidget;
