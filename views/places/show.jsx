const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className='inactive'>
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className='inactive'>
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐️'
    }
    rating = (
      <h3>
        {stars}
      </h3>
    )
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
            <input type="submit" className="btn btn-danger" value="Delete Comment" />
          </form>
          <br />
        </div>
      )
    })
  }
    return (
        <Def>
          <main>
            <div className='container'>
              <div class="row">
                <div class="col-sm-6 mt-3">          
                  <img src={data.place.pic} alt={data.place.name} />
                </div>
                <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines} </p>
                <div class="col-sm-6 mt-3">
                  <h1>{data.place.name}</h1>
                  <h2>Rating</h2>
                  {rating}
                  <h2>Description</h2>
                  <h3>
                    {data.place.showEstablished()}
                  </h3>
                  <h4>
                    Serving {data.place.cuisines}
                  </h4>
                  <div className="btn-container pt-3">
                    <div className='d-flex flex-column'>
                      <div className='col pb-2'>
                        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                          Edit
                        </a> 
                      </div>
                      <div className='col'>     
                        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                          <button type="submit" className="btn btn-danger">
                            Delete
                          </button>
                        </form>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
            <hr/>
            <footer>
              <h2>Comments</h2>
              {comments}
              <br/>
            </footer>
            <hr />
            <h2>Got Your Own Rant or Rave?</h2>
            <form action={`/places/${data.place.id}/comment`} method="POST">
              <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="content">Content</label>
                  <textarea id="content" name="content" className="form-control"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-4">
                  <label htmlFor="author">Author</label>
                  <input id="author" name="author" className="form-control" />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="stars">Star Rating</label>
                  <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
                </div>
                <div className="form-group col-sm-2">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label class="form-check-label" for="flexCheckDefault">
                    Rant?
                  </label>
                </div>
              </div>
              <input type="submit" className="btn btn-primary" value="Add Comment" />
            </form>
          </main>
        </Def>
    )
}

module.exports = show
