import React from 'react'

import HomeLogo from '../../assets/Home-logo.jpg'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'
import { Container, HomeImg} from './styles'


function Home () {
    return (
        <Container>
            <HomeImg src={HomeLogo} alt="logo de home" />
            <CategoryCarousel/>
            <OffersCarousel/>
        </Container>
    )
}

export default Home