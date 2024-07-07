import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-4 text-center">
              <img src="/ines.png" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Fabio Alejandro Ramirez Saavedra</h1>
              <h3>FullStack Developer</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae atque ullam perferendis harum, nisi porro voluptate,
                iste consequuntur enim reprehenderit architecto consectetur cum?
                Totam ad molestias natus illum illo officia.
              </p>
              <Link href="/hireme" className="btn btn-outline-light">
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second section */}


    {/* Porfolio */}

  </Layout>
);

export default Index;