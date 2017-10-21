import React from 'react';
import PropTypes from 'prop-types';
import UserLine from '../common/user-line/UserLine';
import Blocks from '../common/blocks/Blocks';
import './ViewProject.scss'

export default class ViewProject extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      getProject: PropTypes.func.isRequired,
    }).isRequired,
    projectId: PropTypes.string
  };

  componentWillMount() {
    const projectId = this.props.projectId7;
    this.props.actions.getProject(projectId);
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        project: this.props.project
      })
    })
  }

  render() {
    if (this.props.isLoading) {
      return false;
    }
    const project = this.props.project;
    return (
      <div id='view-project'>
        <div className="header">
          <UserLine user={project.createdBy}/>
          <p className="title">
            {project.title}
          </p>
          <div className="target">
            {project.target}
          </div>
        </div>
        <div className="content">
          <div className="blocks-container">
            <Blocks blocks={project.blocks}/>
          </div>
          <div className="info-container">
            {this.renderChildren()}
          </div>
        </div>
      </div>
    );
  }
}
