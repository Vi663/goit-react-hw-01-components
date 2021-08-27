import './App.css';
import user from './user.json';
import statisticalData from './statistical-data';
import { Profile } from './components/Profile';
import { ProfileStatsList } from './components/ProfileStatsList';
import { Statistics } from './components/Statistics';

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
      <section className="statistics">
        <h2 className="title">Upload stats</h2>
        {statisticalData.map(data => (
          <Statistics
            id={data.id}
            label={data.label}
            percentage={data.percentage}
          />
        ))}
      </section>
    </div>
    // 
  )
}

export { App };
