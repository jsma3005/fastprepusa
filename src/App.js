import Layout from "./components/Layout"
import { Switch, Route } from 'react-router-dom'
import Main from "./pages/Main"

const App = () => {
    return(
        <Layout> 
            <Switch>
                <Route path='/' exact component={Main} />
            </Switch>
        </Layout>
    )
}

export default App