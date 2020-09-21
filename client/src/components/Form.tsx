import classNames from 'classnames';
import React from 'react';
import styles from './Form.module.less';

export const Form = (props: React.FormHTMLAttributes<HTMLFormElement>) => {
    return <form {...props} className={classNames(styles.form, props.className)}/>
}