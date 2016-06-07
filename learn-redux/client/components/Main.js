import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'Main';
    }
    render() {
      return (
      	<div>
      		<h1>
      			<Link to='/'>Reduckstagram</Link>
      		</h1>
          {React.cloneElement(this.props.children, this.props)}
      	</div>
    	)
    }
}

export default Main;
