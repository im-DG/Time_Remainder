import './App.css';
import LoginForm from './Components/LoginForm';
import HomePage from './Components/HomePage';
import Logout from './Components/Logout';
import { Routes, Route } from 'react-router-dom';
import SetRemainder from './Components/SetRemainder'
import ModifyRemainder from './Components/ModifyRemainder'
import DeleteRemainder from './Components/DeleteRemainder'
import DisableRemainder from './Components/DisableRemainder'
import ViewRemainder from './Components/ViewRemainder'
import Error404 from './Components/Error404'
import Cancel from './Components/Cancel'
import Confirm from './Components/Confirm'
function App() {
  return (
    <>
      <Routes>

        <Route exact path='/' element={<LoginForm />} />
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/SetRemainder' element={<SetRemainder />} />
        <Route path='/ModifyRemainder' element={<ModifyRemainder />} />
        <Route path='/DeleteRemainder' element={<DeleteRemainder />} />
        <Route path='/DisableRemainder' element={<DisableRemainder />} />
        <Route path='/ViewRemainder' element={<ViewRemainder />} />
        <Route path='/Logout' element={<Logout />} />
        <Route path='/cancel' element={<Cancel />} />
        <Route path='/Confirm' element={<Confirm />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
    </>

  );
}

export default App;
