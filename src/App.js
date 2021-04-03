import Layout from "./components/Layout"
import { Switch, Route } from 'react-router-dom'
import Main from "./pages/Main"
import About from "./pages/About"

const App = () => {
    return(
        <Layout> 
            <Switch>
                <Route path='/' exact component={Main} />
                <Route path='/about' component={About} /> 
            </Switch>
        </Layout>
    )
}

export default App