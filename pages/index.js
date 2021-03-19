import Head from 'next/head'
import profile from '../config/profile';

export default function Home() {
  return (
    <div>
      <Head>
        <title>{profile.name} - {profile.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="app-container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="vh-100 d-flex justify-content-center align-items-center flex-direction-column">
                <div className="card bg-light bg-gradient shadow p-5">
                  <div className="card-body text-center">
                    <img src="https://bit.ly/foto-ervan-round" alt="" className="mb-3 img-thumbnail rounded-circle shadow" width="120" />
                    <h1 className="h4 mb-0 fw-bold">{profile.name}</h1>
                    <h2 className="h5 mb-4">{profile.title}</h2>
                    <a href={`mailto:${profile.email}`} className="btn btn-success shadow btn-lg">Contact Me</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
