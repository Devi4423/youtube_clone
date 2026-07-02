import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './reduxStore/appStore';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Search from './components/Search';
import Demo1 from './components/Demo1';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"/watch",
        element:<WatchPage/>
      },
      {
        path:"/results",
        element:<Search />
      },
      {
        path:"/demo",
        element:<Demo1/>
      }
    ]
  },
])

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
