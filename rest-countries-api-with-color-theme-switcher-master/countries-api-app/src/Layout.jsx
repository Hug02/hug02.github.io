import useLocalStorage from 'use-local-storage';

import './Layout.css';
import Header from "./components/Header/Header";
import { Outlet } from 'react-router-dom';

function Layout() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  return (
    <div className="App" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme}/>
      <Outlet/>
    </div>
  );
}

export default Layout;