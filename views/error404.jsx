const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
              <img src="/images/error.jpg" alt="404" />
              <div>
              Photo by <a href="https://unsplash.com/@leekos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kostiantyn Li</a> on <a href="https://unsplash.com/s/photos/404?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </div>
              </div>
          </main>
      </Def>
    )
  }  

module.exports = error404
