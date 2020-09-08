import React, { PropsWithChildren } from 'react';
import styles from './style.module.css';
import classNames from 'classnames';

export interface JumbotronProps {
    img?: string;
    alt?: string;
    imageStyles?: string;
    containerStyles?: string;
    darkBackground?: boolean;
}
export const Jumbotron = (props: PropsWithChildren<JumbotronProps>) => {
    const { children, img, alt, containerStyles, darkBackground, imageStyles} = props;
    return <div className={styles.jumbotron}>
        {img && <img alt={alt || ''} src={img} className={classNames(styles.image, imageStyles)}/>}
        <div className={classNames(styles.container, darkBackground && styles.dark, containerStyles)}>
            {children}
        </div>
    </div>
};