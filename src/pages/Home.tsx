// import Home from '.';

// import { HomeHeader } from '../components/Home';
import BasicCard from '../components/todo-card';
// import { useEffect } from 'react';

export function HomeView() {
  // const themeAtom = atom('light');
  // useEffect(() => {
  //   console.log(themeAtom);
  // }, []);

  // const [theme, setTheme] = useAtom(themeAtom);
  return (
    <>
      <BasicCard />
      {/* <div>
        <p>Current theme:</p>
        <button>Toggle Theme</button>
      </div> */}
      {/* <Home /> */}
    </>
  );
}
