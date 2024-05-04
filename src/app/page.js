import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { skills, experiences, projects } from "../utils/profile";
import Perfil from "../../public/imagen-portafolio.jpg"
const Index = () => (
  <Layout>
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-4">
              <Image src={Perfil} alt="" width={300} height={300} />
            </div>
            <div className="col-md-8">
              <h1>Rafael Benguria</h1>
              <h3>Full Stack Developer</h3>
              <p>
              Hola Soy Rafael Benguria, un entusiasta de la programación Full Stack y graduado recientemente del bootcamp de la Universidad del Desarrollo. Durante mi formación, he adquirido habilidades sólidas en el desarrollo de aplicaciones web, abarcando tanto el frontend como el backend.
              </p>
              <p>
              Me destaco por mi capacidad para resolver problemas gracias a mi sólida comprensión de las matemáticas y la lógica. Además, tengo experiencia trabajando bajo presión, lo que me ha permitido enfrentar desafíos y encontrar soluciones efectivas.
              </p>
              <p>
              Estoy emocionado por comenzar mi carrera profesional en el mundo de la programación, donde espero aplicar mis habilidades y conocimientos para contribuir al desarrollo de proyectos innovadores y desafiantes. Mi objetivo es seguir aprendiendo y creciendo en esta apasionante industria.
              </p>
              <p>
              ¡Bienvenidos a mi portafolio!
              </p>
              <Link href="/contacto" className="btn btn-outline-light">
                Contactame
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>



    <section className="row">
      <div className="col-md-4 py-2">
        <div className="card bg-light animate__animated animate__fadeInLeft">
          <div className="card-body">
            <h1>Habilidades</h1>
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-8 py-2">
       
        <div className="card bg-light animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1>Experiencia</h1>
            <ul>          
              {experiences.map(({ title }, index) => (
                <li key={index}>
                  <h3>{title}</h3>                
                  <p>
                  Acabo de terminar mis estudios como programador fullstack por lo que aun no adquiero experiencia laboral.
                  </p>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">Portafolio</h1>
              </div>
              {projects.map(({ name, description, image, href }, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <Image src={`/${image}`} alt="" width={300} height={500} className="card-img-top" />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href={href} target="_blank">Ver mas</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;