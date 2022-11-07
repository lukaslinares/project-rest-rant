const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1 className='pt-2'>HOME</h1>
              <div>
                <img src="/images/salad.jpg" alt="salad"/>
                <div className='pt-2 pb-3'>
                Photo by <a href="https://unsplash.com/@pwign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anh Nguyen</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>
              <div className='pb-3'>
                <a href="/places">
                  <button className="btn-primary">Places Page</button>
                </a>
              </div>
          </main>
      </Def>
    )
  }  

module.exports = home
