import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductImage } from '../../src/components/ProductImage';
import { product2 } from '../data/products';

describe('ProductImage', () => {

    test('Debe de mostrar el componente correctamente con la imgen personalizada', () => {

        const wrapper = renderer.create(
            <ProductImage img={product2.img}/>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

    test('Debe de mostrar el componente con el imagen del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (

                        <ProductImage/>

                    )
                }
            </ProductCard>

        );

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

});
