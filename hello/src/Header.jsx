import React, {Component} from "react";
class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      judul : 'ini judul dari state',
      dataMakanan : this.props----.list,
    };
  }
render(){
  return(
    <div>
      <h2>Component dari class header</h2>
      <h3>{this.state.judul}</h3>
      <p>Mengakses dari app secara langsung {this.props.list}</p>
      <p>mengakses props dari State {this.state.dataMakanan}</p>
    </div>
  );
}
} export default Header;