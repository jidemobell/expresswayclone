// import logo from './logo.svg';
import { FaGithub } from "react-icons/fa";
import { Bars3Icon } from '@heroicons/react/24/solid'
import useNetlify from "../hooks/useNetlify";

function Login() {
   useNetlify()
  
  return (
    <div className="content-center h-screen broder2">
      <header className="bg-red-600 min-w-full">
        <div className="flex md:flex-row">
          <div>
            <Bars3Icon className="h-6 w-6 text-white" />
          </div>
          <div>My Expressway</div>
          <div>Avatar</div>
        </div>
        <div>LOWER</div>
      </header>
      <section className="content-center broder p-10" >
        <div className="broder2 max-h-full">
        <a className="bg-dark-50 p-4 flex justify-evenly align-middle" id="github-button">
          <span className="mt-1">
            <FaGithub />
          </span>
          <span>Login with Github</span>
        </a>
        </div>
      </section>
    </div>
  );
}

export default Login;
