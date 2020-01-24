import * as React from 'react';
import { Primary } from '../menu';
import { Footer } from '../footer';

import './Layout.scss';

export default ({ children = null, ...props }: React.HTMLProps<any>) => {
  return (
    <div {...props}>
      <Primary />
			<div className="body-content">
				{ children }
			</div>	
			<Footer />
    </div>
  );
}
