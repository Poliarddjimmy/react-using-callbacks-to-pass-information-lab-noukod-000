import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  }

  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  getSelectedColor = () => (this.state.selectedColor)

  genRow = (value) => (
    value.map((val, indext) => <Cell key={indext} color={val} getSelectedColor={this.getSelectedColor} />) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map((rowValue, indext) => <div key={indext} className="row">{this.genRow(rowValue)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}