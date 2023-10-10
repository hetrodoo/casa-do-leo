export function RegisterForm() {
    return (
        <>
            <form>
                <div className={'grid grid-cols-5 gap-4'}>
                    <div className={'col-span-1 flex items-center justify-center'}>
                        <label htmlFor={'name'}>Nome: </label>
                    </div>
                    <input className={'p-4 bg-slate-200 rounded-lg col-span-4'} id={'name'} type={'text'}/>

                    <div className={'col-span-1 flex items-center justify-center'}>
                        <label htmlFor={'email'}>Email: </label>
                    </div>
                    <input className={'p-4 bg-slate-200 rounded-lg col-span-4'} id={'email'} type={'text'}/>

                    <div className={'col-span-1 flex items-center justify-center'}>
                        <label htmlFor={'phone'}>Telefone: </label>
                    </div>
                    <input className={'p-4 bg-slate-200 rounded-lg col-span-4'} id={'phone'} type={'text'}/>

                    <div className={'col-span-2 flex items-center justify-center'}>
                        <label htmlFor={'phone'}>Contato por Whatsapp: </label>
                    </div>
                    <input className={'p-4 bg-slate-200 rounded-lg col-span-3'} id={'phone'} type={'checkbox'}/>

                    <button
                        type={'submit'}
                        className={'col-span-5 p-4 bg-slate-200 rounded-lg'}
                    >
                        Me Cadastrar!
                    </button>
                </div>
            </form>
        </>
    )
}