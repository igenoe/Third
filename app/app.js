import React, { Component } from 'react';
import { Route, Link ,Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import EnrollmentUpload from './enrollmentUpload/index.jsx';
import PaymentUpload from './paymentUpload/index.jsx';
import PlanSetup from './planSetup/index.jsx';
import Navbar  from './navBar';


class App extends Component {
    render() {
      return (
        <main>
            <Navbar />
            <div className="mainContent">
              <Switch>
                      <Route path="/" component={PlanSetup} exact />
                      <Route path="/enrollmentUpload" component={EnrollmentUpload} />
                      <Route path="/paymentUpload" component={PaymentUpload} />
                      <Route path="/planSetup" component={PlanSetup} />
              </Switch>
            </div>
        </main>
      );
    }
  }
  
  export default App;