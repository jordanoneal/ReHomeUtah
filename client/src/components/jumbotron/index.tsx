import React, { PropsWithChildren, useRef, useLayoutEffect } from 'react';
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
    const root = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        const resizeListener = () => {
            if (root.current) {
                root.current.style.setProperty("--width", root.current.clientWidth + 'px')
                root.current.style.setProperty("--height", root.current.clientHeight + 'px')
            }
        }
        resizeListener();
        window.addEventListener("resize", resizeListener);
        return () => {
            window.removeEventListener("resize", resizeListener);
        }
    }, [])
    return <div ref={root} className={styles.jumbotron}>
        {img && <img alt={alt || ''} src={img} className={classNames(styles.image, imageStyles)}/>}
        <div className={classNames(styles.container, darkBackground && styles.dark, containerStyles)}>
            {children}
        </div>
    </div>
};