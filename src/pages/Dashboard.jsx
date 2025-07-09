import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardData } from '../redux/reducers/dataSlice';
import Layout from '../components/layout/Layout';
import Plotly3DLineWidget from '../components/charts/Plotly3DLineWidget';
import Plotly3DBarWidget from '../components/charts/Plotly3DBarWidget';
import Plotly3DPieWidget from '../components/charts/Plotly3DPieWidget';
import Plotly3DSurfaceWidget from '../components/charts/Plotly3DSurfaceWidget';
import ReaderChartWidget from '../components/charts/ReaderChartWidget';
import ComposedChartWidget from '../components/charts/ComposedChartWidget';
import ActivityFeed from '../components/widgets/ActivityFeed';
import UserInfo from '../components/widgets/userInfo';
import SquidGameLoader from '../components/loader/SquidGameLoader';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  return (
    <Layout>
      {loading ? (
        <div className="flex justify-center mt-10">
          <SquidGameLoader />
        </div>
      ) : (
        <>
        <div className="mb-6">
          <UserInfo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Plotly3DLineWidget />
          <Plotly3DBarWidget />
          <Plotly3DPieWidget />
          <Plotly3DSurfaceWidget />
          <ReaderChartWidget />
          <ComposedChartWidget />
          <ActivityFeed />
        </div>
        </>
      )}
    </Layout>
  );
};

export default Dashboard;
