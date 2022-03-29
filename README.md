### alejandroc-product-card

# Alejandro Cárdenas

# Ejemplos
```
import { ProductButtons,ProductImage,ProductTitle,ProductCard } from 'alejandroc-product-card';
```

```
<ProductCard 
    product={producto} 
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
```