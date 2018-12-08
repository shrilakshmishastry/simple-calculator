import React from 'react';
import ButtonNum from './components/Map.js';
import {Card,Container,Row,Col} from 'reactstrap';
class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:""
    };
  }
  myCallBack = (name) =>{
    const ans= eval(name);
    this.setState({
      name:ans
    });
  }
  render(){
    return(
      <div>
        <div>
          <Container className="mt-md-5 pt-md-5">
            <Row>
              <Col md={{size:5,offset:3}} className="pr-2" >
                <Card className="bg-dark">
                  <ButtonNum callbackFromParent={this.myCallBack}  />
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="mt-5">
          <Row>
            <Col md={{size:3}} className="mr-5" >
            </Col>
            <Col md={{size:4}} >
              <Card className="pt-2 pb-2 pl-2 pr-2 shadow">
                <h5 className="font-italic text-center">answer is:</h5>
                <h6 className="text-center">{this.state.name}</h6>
              </Card>
            </Col>
            <Col md={{size:4}} >
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
