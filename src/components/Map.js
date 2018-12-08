import React from 'react';
import {Button,ButtonGroup,Row,Col,Container} from 'reactstrap';


export class ButtonNum extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value:""
    };
  }

handleChange = (e) => {
  console.log(e.target.value);
  this.setState({
    value:this.state.value.concat(e.target.value)
  });

}
handleSubmit = (e) =>{
  this.props.callbackFromParent(this.state.value);
  this.setState({
    value:""
  });
}

  render(){
    return(
      <div>
        <Container className="pb-md-5 ">
          <Row >
            <Col md={{size:5}} >
              <ButtonGroup className="ml-md-5 pb-md-3 pt-md-3">
                <input value={this.state.value} className="text-center pl-md-5 pr-md-5 " readOnly/>
              </ButtonGroup>
              <ButtonGroup>
                <Button className="pl-md-5 pr-md-5" onClick={this.handleChange} value="7">7</Button>
                <Button className="pl-md-5 pr-md-5" onClick={this.handleChange} value="8">8</Button>
                <Button className="pl-md-5 pr-md-5" onClick={this.handleChange} value="9">9</Button>
                <Button className="pl-md-5 pr-md-5" onClick={this.handleChange} value="*">*</Button>
              </ButtonGroup>
            </Col>
          </Row>
          <Row>
            <Col md={{size:5}} >
              <ButtonGroup>
                <Button className="pl-md-5 pr-md-5" onClick={this.handleChange} value="4">4</Button>
                <Button className="pl-md-5 pr-md-5" onClick={this.handleChange} value="5">5</Button>
                <Button className="pl-md-5 pr-md-5" onClick={this.handleChange} value="6">6</Button>
                <Button className="pl-md-5 pr-md-5" onClick={this.handleChange} value="-">-</Button>
              </ButtonGroup>
            </Col>
          </Row>
          <Row>
            <Col md={{size:5}}>
              <ButtonGroup>
                <Button className="pl-md-5 pr-md-5" onClick={this.handleChange} value="1">1</Button>
                <Button className="pl-md-5 pr-md-5" onClick={this.handleChange} value="2">2</Button>
                <Button className="pl-md-5 pr-md-5" onClick={this.handleChange} value="3">3</Button>
                <Button className=" pl-md-5 pr-md-5" onClick={this.handleChange} value="/">/</Button>
              </ButtonGroup>
            </Col>
          </Row>
          <Row>
            <Col md={{size:5}} >
              <ButtonGroup>
                <Button className="pl-md-5 pr-md-5" onClick={this.handleChange} value="0">0</Button>
                <Button className="pl-md-5 pr-md-5" onClick={this.handleChange} value=".">.</Button>
                <Button className="pl-md-5 pr-md-5" onClick={this.handleChange} value="+">+</Button>
                <Button className="pl-md-5 pr-md-5" onClick={this.handleSubmit} value="=">=</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ButtonNum;
