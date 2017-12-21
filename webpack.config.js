var config = {
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : './client',
        loader : 'babel-loader'
      }
    ]
  }
}
