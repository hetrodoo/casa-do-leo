import logo from './assets/casa_do_leo.jpg';
import bg from './assets/background.jpg';
import {ButtonHTMLAttributes} from "react";
import {useSidebar} from "./components/Sidebar/hooks/useSidebar.ts";
import {Sidebar} from "./components/Sidebar";
import {RegisterForm} from "./components/RegisterForm.tsx";
import {LoginForm} from "./components/LoginForm.tsx";

function Button({children, ...rest}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...rest}
            className={'uppercase px-3 py-2 hover:bg-black hover:bg-opacity-20 rounded-lg'}
        >
            {children}
        </button>
    )
}

function App() {
    const { showSidebar } = useSidebar();

    const openSideBar = () => {
        showSidebar({
           title: 'Quero ajudar!',
           content: <RegisterForm />,
        });
    }

    const openLogin = () => {
        showSidebar({
           title: 'Entrar',
           content: <LoginForm />,
        });
    }

  return (
    <div className={'w-full h-full flex flex-col bg-black'}>
        <div className={'w-full flex items-center justify-start p-2 bg-blue-600 gap-2 text-white z-10'}>
            <img src={logo} className={'h-16 aspect-square'}  alt={'logo'} onClick={() => openLogin()}/>
            <span className={'text-xl font-medium tracking-widest'}>Casa Do Léo</span>
            <div className={'grow'} />
            <Button onClick={() => openSideBar()}>
                Quero ajudar!
            </Button>
            <Button>
                Informações
            </Button>
            <Button
                onClick={() => window.open('https://www.facebook.com/p/Casa-do-L%C3%A9o-100069654894352/')}
            >
                Facebook
            </Button>
        </div>

        <div className={'grow flex justify-center items-center relative'}>
            <div className={'z-10'}>
                <button
                    onClick={() => openSideBar()}
                    className={'capitalize bg-blue-600 text-white p-4 rounded-lg hover:drop-shadow-lg'}
                >
                    QUERO AJUDAR!
                </button>
            </div>

            <Sidebar />

            <img src={bg} className={'absolute w-full h-full object-cover blur'}  alt={'background'}/>
        </div>
    </div>
  )
}

export default App
