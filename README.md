# react-redux-form-demo

Form handling with react-redux-form.


## Install & run

```shell
npm install
npm start
```


## Things to look at

 - Notice that the `combineReducers` call in `reducers/index` now contains a call to `combineForms`, passing it a model object. It can take as many of these as you have forms.
   - We could move the `combineForms` call out into its own module as it became more complex.
 - The initial model object is just a bunch of empty string properties, though they can get more complex (see below).
 - RRF provides its own form components, and associates each with a model.
 - In the function called by `onSubmit`, any number of dispatch calls can be made (including `actions.submit` which takes a model name and a promise-returning function
   - We can make API calls and update the form state depending on the server response (for example, rejecting an image that was too large)


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
