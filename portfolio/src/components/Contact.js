import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="card" style={{width: '18rem'}}>
        <img src="https://images.unsplash.com/photo-1682018667453-b8d127e055b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8aG1lbnZRaFVteE18fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://youtu.be/cHHU0jXfjKY" className="btn btn-primary">Go somewhere</a>
          </div>
      </div>

    </>
  )
}

export default Contact