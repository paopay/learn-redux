import React from 'react';

class Single extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'Single';
    }
    render() {
      return (
        <div className='single-photo'>
          I'm the single
        </div>
      )
    }
}

export default Single;
