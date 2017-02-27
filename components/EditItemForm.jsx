import React from 'react'
import { connect } from 'react-redux'
import { Control, Errors, Form, track } from 'react-redux-form'

import ColorChooser from './ColorChooser'
import { getItems, saveItem, stopEditing } from '../actions/items'

const EditItemForm = React.createClass({
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
    dispatch(saveItem(item))
    dispatch(stopEditing())
  },

  cancel (evt) {
    evt.preventDefault()

    const { dispatch } = this.props
    dispatch(getItems())
    dispatch(stopEditing())
  },

  render () {
    return (
      <Form model={track('items[]', { isEditing: true })}
        onSubmit={this.handleSubmit}>

        <label>Name:</label>
        <Control.text model=".name"
          validators={{
            isRequired: name => name && name.length
          }}
          className="u-full-width"
        />
        <Errors model=".name" className="error"
          messages={{
            isRequired: "Please provide a name."
          }}
        />

        <label>Description:</label>
        <Control.textarea model=".description" className="u-full-width" />

        <ColorChooser colors={this.itemColors} />

        <button type="submit" className="button-primary">Save</button>
        <button onClick={evt => this.cancel(evt)}>Cancel</button>
      </Form>
    )
  }
})

export default connect()(EditItemForm)
