import { registerRootComponent } from 'expo';

import App from './App';
import SignIn from './src/pages/sign-in/';
import SignUp from './src/pages/sign-up/';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(SignIn);