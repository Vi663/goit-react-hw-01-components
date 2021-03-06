import PropTypes from 'prop-types';

const ProfileStatsList = ({
  stats,
  followers,
  views,
  likes,
}) => {
  return (
    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  )
};

ProfileStatsList.propTypes = {
  stats: PropTypes.arrayOf().isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes:PropTypes.number.isRequired,
}

export { ProfileStatsList };