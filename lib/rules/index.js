module.exports = {
  builtin: [
    require('./decimals'),
    require('./delete'),
    require('./dotNotation'),
    require('./emptyStatement'),
    require('./initUndefined'),
    require('./invalidConstructor'),
    require('./isNaN'),
    require('./trailingCommas'),
    require('./useLiteral'),
  ],
  aretrue: {
    camelcase: require('./camelCase'),
    curly: require('./curly'),
    es3: require('./parseInt'),
    nonew: require('./newSideEffects'),
    snakecase: require('./snake_case'),
    plusplus: require('./updateExpression'),
    eqeqeq: require('./eqeqeq'),
  },
  arefalse: {
    debug: require('./debugger'),
  }
}
