import Link from "next/link";
import Layout from "../../components/Layout";

const Contacto =() => (
    <Layout footer={true} dark>
         <div className="row">
            <div className="col-md-4 offset-md-4">
            <div className="card card-body text-left bg-dark text-light" >
                 <p>Correo: rafaelalbertobenguria@gmail.com</p>
                 <p>Telefono: +56 9 51869402</p>
                 <Link href="https://www.instagram.com/r4fa_benguria/" target="_blank" className="nav-link"> 
                    Instagram
                 </Link>
          </div>
        </div>
      </div>
    </Layout>
)

export default Contacto;