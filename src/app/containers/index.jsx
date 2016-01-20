var React = require('react'),
    ReactDOM = require('react-dom'),
    { Router, Route, browserHistory } = require('react-router')

ReactDOM.render(
  <div>Hello World</div>,
  document.getElementById('app')
)

// ReactDOM.render((
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//     <Route path="/auth" component={auth} />
//         <IndexRoute path="home" component={Dashboard} />
//     </Route>
//   </Router>
// ), document.body)
