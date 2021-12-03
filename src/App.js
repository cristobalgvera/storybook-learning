import './App.css';
import { Provider } from 'react-redux';
import store from './lib/store';
import InboxScreen from './components/InboxScreen/InboxScreen';

export default function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}
