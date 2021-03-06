import React from 'react';
import { useCallback, useContext } from "react";
import { productContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface IProps {
    className?: string;
    style?: React.CSSProperties;
}

export const ProductButtons = ({className, style}:IProps) => {

    const {increaseBy, counter, maxCount} = useContext(productContext);

    const isMaxCountReach = useCallback(() => {
        if(maxCount){
            return (counter === maxCount) ?  true : false;
        }
        return false;
    }, [counter, maxCount])

    return (

        <div className={`${styles.buttonsContainer} ${className && className}` }
            style={style}
        >

            <button className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            >
                -
            </button>

            <div className={styles.countLabel}>{counter}</div>

            <button className={`${styles.buttonAdd} ${(isMaxCountReach() ? styles.disabled : '' )}`}
                onClick={() => increaseBy(1)}
            >
                +
            </button>

        </div>

    );

}