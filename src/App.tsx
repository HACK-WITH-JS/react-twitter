import Layout from "components/Layout";
import Router from "components/Router";

function App() {
  return (
    <Layout>
      <Router isAuthenticated />
    </Layout>
  );
}

export default App;
