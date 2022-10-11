import Sidebar from "components/sidebar"
import Content from "components/content"
import Footer from "components/footer"
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </Router>
  );
}

export default App;