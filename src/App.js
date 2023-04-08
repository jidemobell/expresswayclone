// import logo from './logo.svg';
import { Bars3Icon } from '@heroicons/react/24/solid'
import './App.css';

function App() {
  return (
    <div>
      <header className="bg-red-600 min-w-full" >
         <div className="flex md:flex-row">
           <div>
            <Bars3Icon className="h-6 w-6 text-white" />
           </div>
           <div>My Expressway</div>
           <div>Avatar</div>
         </div>
         <div>LOWER</div>
      </header>    
    </div>
  );
}

export default App;
