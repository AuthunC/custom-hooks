import './App.css';
import Auth from './Auth';
import Posts from './posts';
import SignupForm from './SignUpForm';
import WindowSizeDisplay from './WindowSizeDisplay';


function App() {
  return (
    <div className="App">
      <Posts />
      <SignupForm />
      <WindowSizeDisplay />
      <Auth />
    </div>
  );
}

export default App;
