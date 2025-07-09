import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';

const Plotly3DBarWidget = () => {
  const data = useSelector(state => state.data.salesData);
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-lg animate-fadeIn hover:scale-105 transition-transform duration-300">
      <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">3D Sales Data</h3>
      <Plot
        data={[{
          x: data.map(d => d.category),
          y: data.map(d => d.sales),
          z: Array(data.length).fill(0),
          type: 'bar', marker: { color: '#10b981' }
        }]}
        layout={{
          margin: { l: 0, r: 0, b: 30, t: 0 },
          paper_bgcolor: 'transparent',
          scene: { xaxis:{title:'Category'}, yaxis:{title:'Sales'}, zaxis:{visible:false} }
        }}
        style={{ width: '100%', height: '280px' }}
        config={{ displayModeBar: false }}
        useResizeHandler
      />
    </div>
  );
};
export default Plotly3DBarWidget;
