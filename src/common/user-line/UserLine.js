import React from 'react';
import PropTypes from 'prop-types';
import './UserLine.scss'

const UserLine = ({user}) => (
  <div className="user-line" >
    <div className='user-avatar' style={{backgroundImage: `url('${user.image}'`}}/>
    <span className='user-name'><a>{user.name}</a></span>
    <span className='user-projects'>{` - ${user.projects.length} проекта`}</span>
  </div>
);

UserLine.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserLine;
