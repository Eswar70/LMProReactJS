import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';

const Plotly3DPieWidget = () => {
  const data = useSelector(state => state.data.demographics);
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-lg animate-fadeIn hover:scale-105 transition-transform duration-300">
      <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">3D Demographics</h3>
      <Plot
        data={[{
          values: data.map(d => d.percent),
          labels: data.map(d => d.group),
          type: 'pie',
          hole: .3
        }]}
        layout={{ margin:{ t:0, b:0, l:0, r:0 }, paper_bgcolor: 'transparent' }}
        style={{ width: '100%', height: '280px' }}
        config={{ displayModeBar: false }}
        useResizeHandler
      />
    </div>
  );
};
export default Plotly3DPieWidget;
