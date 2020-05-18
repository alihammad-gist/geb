import * as React from 'react';
import { Primary } from '../menu';
import { Footer } from '../footer';
import * as styles from './styles.module.scss';


export default ({ children = null, ...props }: React.HTMLProps<any>) => {
  return (
    <div {...props}>
      <Primary />
      <div className={`${styles.bodyContent} d-flex flex-column`}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
