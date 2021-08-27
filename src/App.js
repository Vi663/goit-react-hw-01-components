import './App.css';
import user from './user.json';
// import statisticalData from './statistical-data';
import { Profile } from './components/Profile';
import { ProfileStatsList } from './components/ProfileStatsList';
// import { statisticalData } from './components/statisticalData';

function App() {
  return (
    <div className="profile">
      <Profile
        // key={tag}
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <ProfileStatsList
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
    // <statisticalData
    //   id={statisticalData.id}
    //   label={statisticalData.label}
    //   percentage={statisticalData.percentage}
    // />
  )
}

export { App };
