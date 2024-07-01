import "antd/dist/reset.css";
import "./App.scss";
import { RouterProvider } from "react-router-dom";
import customRouter from "./modules/router/router";

const App: React.FC = () => {
  try{
    return <RouterProvider router={customRouter} />;
  }catch(e){
    console.error(e)
    throw e
  }
};

export default App;
