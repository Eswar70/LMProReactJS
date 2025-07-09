import { useSelector } from 'react-redux';

const ActivityFeed = () => {
  const feed = useSelector((state) => state.data.activityFeed);
  const user = useSelector((state) => state.user);

  const replacePlaceholders = (text) => {
    return text.replace(/{name}/g, user.name || 'Guest');
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow col-span-1 md:col-span-2">
      <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">Recent Activity</h3>
      <ul className="space-y-2">
        {feed.map((item) => (
          <li key={item.id} className="text-gray-700 dark:text-gray-300">
            • {replacePlaceholders(item.text)}
          </li>
        ))}
        {(user.name || user.email) && (
          <li className="text-gray-700 dark:text-gray-300">
            • Profile updated: {user.name} ({user.email}) from {user.region} — ₹{user.sales} sales
          </li>
        )}
      </ul>
    </div>
  );
};

export default ActivityFeed;
