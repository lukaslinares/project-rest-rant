const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className='container'>
              <div class="row">
                <div class="col-sm-6 mt-3">          
                  <img src={data.place.pic} alt={data.place.name} />
                </div>
                <div class="col-sm-6 mt-3">
                  <h1>{data.place.name}</h1>
                  <h2>Rating</h2>
                  <p>Not Rated</p>
                  <h2>Description</h2>
                  <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines} </p>
                  <div className="btn-container pt-3">
                    <div className='d-flex flex-column'>
                      <div className='col pb-2'>
                        <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                          Edit
                        </a> 
                      </div>
                      <div className='col'>     
                        <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
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
              <p>No comments yet!</p>
              <br/>
            </footer>
          </main>
        </Def>
    )
}

module.exports = show