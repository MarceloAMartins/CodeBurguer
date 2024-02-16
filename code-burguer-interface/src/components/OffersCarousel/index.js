import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Ofers from '../../assets/OFERTAS.png'
import api from '../../services/api'
import { Container, CategoryImg, Containeritems, Image, Button } from './styles'


function OffersCarousel() {
    const [Offers, setOffers] = useState([])

    useEffect(() => {
        async function loadOffers() {
            const {data} = await api.get('products')


            setOffers(data)
        }
        loadOffers()
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1300, itemsToShow: 5 }
    ]

    return (
        <Container>
            <CategoryImg src={Ofers} alt="logo dos produtos" />

            <Carousel  
            itemsToShow={5}
            style={{ width: '90%' }} 
                breakPoints={breakPoints}>
            
                {Offers &&
                      Offers.map ( product => (                     
                        <Containeritems key={ product.id } >                           
                            <Image src= {product.url} alt="foto da produto" />
                            <Button>{product.name }</Button>
                        </Containeritems>                       
                    ))}                
            </Carousel>
        </Container>
    )
}

export default OffersCarousel