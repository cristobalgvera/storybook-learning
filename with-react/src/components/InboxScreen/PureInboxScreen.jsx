import PropTypes from 'prop-types';
import ErrorScreen from './ui/ErrorScreen';
import TaskList from '../TaskList';

export default function PureInboxScreen({ hasError }) {
  if (hasError) return <ErrorScreen />;

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList />
    </div>
  );
}

PureInboxScreen.propTypes = {
  hasError: PropTypes.bool,
};

PureInboxScreen.defaultProps = {
  hasError: false,
};
