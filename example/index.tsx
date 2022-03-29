import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Card Title',
  // img: './cofee-mug-png'
}

const App = () => {
  return (
    <div>
      <ProductCard 
      
        product={product} 
        initialValues={{
            count: 4,
            maxCount: 10,
        }}
      
      >

        {
          ({count,increaseBy,isMaxCountReached,product,reset,maxCount}) => (

              <>
                  <ProductImage/>
                  <ProductTitle/>
                  <ProductButtons/>
              </>

          )
      }

      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
