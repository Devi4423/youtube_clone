import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./reduxStore/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Search from "./components/Search";
import ChannelPage from "./components/ChannelPage";
import Demo1 from "./components/Demo1";
import ChannelHome from "./subcomponents/ChannelHome";
import ChannelVideo from "./subcomponents/ChannelVideo";
import ChannelLive from "./subcomponents/ChannelLive";
import ChannelPlayList from "./subcomponents/ChannelPlayList";
import ErrorComponent from "../src/components/ErrorComponent";
import PlayListVideos from "./channelPlayListComponents/PlayListVideo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: <Search />,
      },
      {
        path: "/channel/:id",
        element: <ChannelPage />,
        children: [
          {
            path: "/channel/:id",
            element: <ChannelHome />,
          },
          {
            path: "Channel/:id/videos",
            element: <ChannelVideo />,
          },
          {
            path: "/channel/:id/Live",
            element: <ChannelLive />,
          },
          {
            path: "/channel/:id/playlist",
            element: <ChannelPlayList />,
          },
        ],
      },
      {
        path: "/channel/:id/playlist/:id",
        element: <PlayListVideos />,
      },
      {
        path: "/demo",
        element: <Demo1 />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
