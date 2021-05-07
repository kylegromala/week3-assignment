import React from 'react';
import {
    ProductsContainer,
    ProductsWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductElements';

const Products = ({ heading, data }) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductsWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.image} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.houseType}</ProductTitle>
                                <ProductDesc>{product.title}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default Products;