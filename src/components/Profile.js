import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";

const Profile = ({
  name,
  tag,
  location,
  avatar,
}) => {
  return (
    <div className="description">
      <img
        src={avatar}
        alt="user avatar"
        className="avatar"
      />
      <p className="name"><FaUserAlt /> {name}</p>
      <p className="tag">{tag}</p>
      <p className="location"><FaMapMarkerAlt /> {location}</p>
    </div>
  )
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.node,
}

export {Profile}