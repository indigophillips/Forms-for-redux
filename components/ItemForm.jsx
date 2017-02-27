import React from 'react'
import { connect } from 'react-redux'
import { actions, Control, Errors, Form } from 'react-redux-form'

import { addItem } from '../actions/items'
import ColorChooser from './ColorChooser'

const ItemForm = React.createClass({
  itemColors: [
    'aliceblue',
    'blanchedalmond',
    'burlywood',
    'cadetblue',
    'chartreuse',
    'darkgoldenrod',
    'cornflowerblue',
    'tomato',
    'gainsboro',
    'mediumaquamarine',
    'papayawhip',
    'thistle',
    'whitesmoke'
  ],

  handleSubmit (item) {
    const { dispatch } = this.props
    dispatch(addItem(item))
    dispatch(actions.reset('item'))
  },

  render () {
    return (
      <Form model="item"
        onSubmit={this.handleSubmit}>

        <label>Name:</label>
        <Control.text model=".name"
          validators={{
            isRequired: name => name && name.length
          }}
          validateOn="blur"
          className="u-full-width"
        />
        <Errors model=".name" className="error"
          messages={{
            isRequired: "Please provide a name."
          }}
          show="touched"
        />

        <label>Description:</label>
        <Control.textarea model=".description" className="u-full-width" />

        <ColorChooser colors={this.itemColors} />

        <button type="submit" className="button-primary">Add</button>
      </Form>
    )
  }
})

export default connect()(ItemForm)
