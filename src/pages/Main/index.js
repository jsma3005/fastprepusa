import Feautures from '../../components/Feautures'
import Header from '../../components/Header'
import Map from '../../components/Map'
import Partners from '../../components/Partners'
import Pricing from '../../components/Pricing'
import Services from '../../components/Services'

const Main = () => {
    return (
        <div>
            <Header />
            <Feautures />
            <Services />
            <Pricing />
            <Partners />
            <Map />
        </div>
    )
}

export default Main;