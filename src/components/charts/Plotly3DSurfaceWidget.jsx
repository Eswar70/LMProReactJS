import Plot from 'react-plotly.js';

const zData = [
  [1, 20, 30, 50],
  [20, 1, 60, 80],
  [30, 60, 1, 70],
  [50, 80, 70, 1],
];

const Plotly3DSurfaceWidget = () => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-lg animate-fadeIn hover:scale-105 transition-transform duration-300">
    <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">Revenue Surface</h3>
    <Plot
      data={[{ z: zData, type: 'surface', colorscale: 'Viridis', opacity: 0.9 }]}
      layout={{ margin:{t:0, b:0, l:0, r:0}, paper_bgcolor: 'transparent' }}
      style={{ width: '100%', height: '280px' }}
      config={{ displayModeBar: false }}
      useResizeHandler
    />
  </div>
);
export default Plotly3DSurfaceWidget;
