import {FcGoogle} from "react-icons/fc";

export function LoginForm() {
    return (
        <>
            <form>
                <div className={'grid grid-cols-5 gap-4'}>
                    <button
                        type={'submit'}
                        className={'col-span-5 p-4 bg-slate-200 rounded-lg'}
                    >
                        <FcGoogle className={'inline'} size={'1.5rem'} /> Entrar com Google
                    </button>
                </div>
            </form>
        </>
    )
}