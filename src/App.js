import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div>헤더부분</div>
      <Outlet />
    </>
  );
}

export default App;
