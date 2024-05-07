import { useRoutes } from "react-router";
import routes from "./routes"; // Adjusted import path

function App() {
    const element = useRoutes(routes);
    return <>{element}</>;
}

export default App;
