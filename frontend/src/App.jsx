import { NavBar } from "~/components";
import { Footer } from "./components";
import Router from "./routes";
import "./styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
	return (
		<div>
			<NavBar />
			<Router />
			<Footer />
		</div>
	);
}

export default App;
