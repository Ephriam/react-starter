import React from 'react';

const MainContent = () => {
  return (
    <div id="main-content-container">
      <main id="main-content" className="content">
        <div className="row">

          <div className="card mb-3 card-column col-md-4 col-lg-4 mxw">
            <div className="row g-0">
              <div className="col-md-7">
                <img
                  src="imgs/phy11.png"
                  alt="404"
                  className="img-fluid rounded-start"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="col-md-5">
                <div className="card-body">
                  <h5 className="card-title">Physics 11</h5>
                  <p className="card-text">
                    This is a wider content.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">3m ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3 card-column col-md-4 col-lg-4 mxw">
            <div className="row g-0">
              <div className="col-md-7">
                <img
                  src="imgs/che10.png"
                  alt="404"
                  className="img-fluid rounded-start"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="col-md-5">
                <div className="card-body">
                  <h5 className="card-title">Chemistry 10</h5>
                  <p className="card-text">
                    This is a wider content.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">3m ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3 card-column col-md-4 col-lg-4 mxw">
            <div className="row g-0">
              <div className="col-md-7">
                <img
                  src="imgs/bio12.png"
                  alt="404"
                  className="img-fluid rounded-start"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="col-md-5">
                <div className="card-body">
                  <h5 className="card-title">Biology 12</h5>
                  <p className="card-text">
                    <a className="btn btn-primary btn-sm">Read</a>
                    <a className="btn btn-secondary btn-sm">download</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3 card-column col-md-4 col-lg-4 mxw">
            <div className="row g-0">
              <div className="col-md-7">
                <img
                  src="imgs/amh9.png"
                  alt="404"
                  className="img-fluid rounded-start"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="col-md-5">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider content.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">3m ago</small>
                    <button className="btn btn-primary">hello</button>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default MainContent;
