import React from 'react'

import ProductsLogo from '../../assets/logoProducts.svg'
import { Container, ProductsImg, } from './styles'


function Products () {
    return (
        <Container>
            <ProductsImg src={ProductsLogo} alt="logo de home" />
        </Container>
    )
}

export default Products