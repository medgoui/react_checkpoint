import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {Container,Row,Col,Button} from '../node_modules/react-bootstrap/';
function App() {
  return (
  <>
  <Container>
  <form class="text-center border border-light p-5" action="#!">
<Row>
<Col>
<p class="h4 mb-4">Sign up</p>
</Col>
</Row>
    <Row>
        <Col><input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name" required /></Col>
    </Row>
    <hr/>
    <Row>
        <Col><input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name" required /></Col>
    </Row>
<hr/>
<Row>
<Col><input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail" required /></Col>
</Row>
<hr/>
<Row>
<Col><input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" required /></Col>
</Row>
<Row>
  <Col><small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
    At least 8 characters and 1 digit
</small></Col>
</Row>
<hr/>
<Row>
<Col><input type="text" id="defaultRegisterPhonePassword" class="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" /></Col>
</Row>
<Col><small id="defaultRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
    Optional - for two step authentication
</small>
</Col>

<div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="defaultRegisterFormNewsletter" />
    <label class="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
</div>

<button id="signIN" class="btn btn-info my-4 btn-block" type="submit">Sign in</button>
<div id="thankyou"></div>
<Button as="input" variant="outline-danger" type="reset" value="RESET"/>
<hr/>
<p>or sign up with:</p>
<a href="#" class="mx-2" role="button"><i class="fa fa-facebook"></i></a>
<a href="#" class="mx-2" role="button"><i class="fa fa-twitter"></i></a>
<a href="#" class="mx-2" role="button"><i class="fa fa-linkedin"></i></a>
<a href="#" class="mx-2" role="button"><i class="fa fa-github"></i></a>

<hr/>


<p>By clicking
    <em> Sign up </em> you agree to our
    <a href="" target="_blank"> terms of service</a>
</p>
</form>
</Container>
  </>
  );
}

export default App;
