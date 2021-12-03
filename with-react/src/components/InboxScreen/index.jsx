import { useSelector } from 'react-redux';
import { appSelector } from '../../lib/store/features/app/appSlice';
import PureInboxScreen from './PureInboxScreen';

export default function InboxScreen() {
  const { hasError } = useSelector(appSelector);

  return <PureInboxScreen hasError={hasError} />;
}
