import { useSelector } from 'react-redux';

const UserInfo = () => {
  const { name, email, sales, region } = useSelector((state) => state.user);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-lg mb-4 flex justify-between items-center animate-fadeIn">
      <div>
        <p className="text-lg font-semibold">{name || 'Guest User'}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{email || 'No email set'}</p>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-500 dark:text-gray-400">Sales</p>
        <p className="text-xl font-bold">₹{sales}</p>
        <p className="text-sm">{region}</p>
      </div>
    </div>
  );
};
export default UserInfo;