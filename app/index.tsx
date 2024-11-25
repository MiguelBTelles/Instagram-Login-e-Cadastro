import { StatusBar } from 'react-native';
import { Login } from './Screens/Login/index';

export default function App() {
  return (
    <>
      <Login />
      <StatusBar
        barStyle="light-content"
        backgroundColor="#121212"
        translucent
      />
    </>
  );
}
