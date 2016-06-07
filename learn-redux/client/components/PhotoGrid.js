import React from 'react';

class PhotoGrid extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'PhotoGrid';
    }
    render() {
      return (
        <div className='photo-grid'>
          I'm the photo-grid
        </div>
    	)
    }
}

export default PhotoGrid;
