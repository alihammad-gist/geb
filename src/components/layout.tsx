import * as React from 'react';
import PrimaryNav from './menu/primary';

export default (props: React.HTMLProps<any>) => {
  return (
    <div {...props}>
      <PrimaryNav />
    </div>
  );
}
