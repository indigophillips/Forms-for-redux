# react-redux-form-demo

Form handling with react-redux-form.


## Install & run

```shell
npm install
npm start
```


## Things to look at

Notice that the `combineReducers` call in `reducers/index` now contains a call to `combineForms`, passing it a model object. It can take as many of these as you have forms.

```js
// Our users reducer, managing an array of user objects on the Redux store
import users from './users'

// An initial state object for react-redux-form
const user = {
  firstName: '',
  lastName: '',
  phone: '',
  mobile: ''
}

// Combine the two into one reducing function
export default combineReducers({
  users,
  forms: combineForms({ user }, 'forms')
})

```
The initial model object is just a bunch of empty string properties, though they can get more complex. We could move the `combineForms` call out into its own module as it became more complex.

```js
import users from './users'
import forms from './forms'

export default combineReducers({
  users,
  forms
})
```

RRF provides its own form components, and associates each with a model:

```js
import { Control, Form, actions } from 'react-redux-form'

export default React.createClass({
  handleSubmit (user) {
    const { dispatch } = this.props
    dispatch(addUser(user))
    dispatch(actions.reset('forms.user'))
  },

  render () {
    return (
      <Form model="forms.user"
        onSubmit={user => this.handleSubmit(user)}>

        <label>First name:</label>
        <Control.text model=".firstName" />

        <label>Last name:</label>
        <Control.text model=".lastName" />

        <label>Mobile:</label>
        <Control.text model=".mobile" />

        <button type="submit">Add</button>
      </Form>
    )
  }
})

```

In the function called by `onSubmit`, any number of dispatch calls can be made (including `actions.submit` which takes a model name and a promise-returning function. We can make API calls and update the form state depending on the server response (for example, rejecting an image that was too large).

```js
  dispatch(actions.submit('forms.user', api.sendUserToServer))
```


## Boilerplate

There's a _little_ extra boilerplate, but not too much. Mainly `combineForms`, and making sure `dispatch` is available from the container to any child components, which boils down to:

```js
  const mapDispatchToProps = dispatch => ({ dispatch })
```

If the form isn't the target component of the `connect` call, we might also need to pass dispatch as a prop:

```js
  render () {
    <div>
      {/* other stuff */}

      <UserForm dispatch={this.props.dispatch} />
    </div>
  }
```
