import {useForm} from "react-hook-form";
import axios from "axios";

interface IForm {
    name: string;
    email: string;
    phone: string;
    useWhatsapp: string;
}

export function RegisterForm() {
    const { handleSubmit, register } = useForm<IForm>();

    const onSubmit = async (data: IForm) => {
        try {
            await axios.post("https://casa-do-leo-l4t7tof6lq-uc.a.run.app/newsletter", data);
            alert("Cadastrado com sucesso!")
        } catch (e) {
            alert("Falha, tente novamente.");
            console.error(e);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={'grid grid-cols-5 gap-4'}>
                    <div className={'col-span-1 flex items-center justify-center'}>
                        <label htmlFor={'name'}>Nome: </label>
                    </div>
                    <input className={'p-4 bg-slate-200 rounded-lg col-span-4'} id={'name'} type={'text'} {...register('name')}/>

                    <div className={'col-span-1 flex items-center justify-center'}>
                        <label htmlFor={'email'}>Email: </label>
                    </div>
                    <input className={'p-4 bg-slate-200 rounded-lg col-span-4'} id={'email'} type={'email'} {...register('email')}/>

                    <div className={'col-span-1 flex items-center justify-center'}>
                        <label htmlFor={'phone'}>Telefone: </label>
                    </div>
                    <input className={'p-4 bg-slate-200 rounded-lg col-span-4'} id={'phone'} type={'text'} {...register('phone')}/>

                    <div className={'col-span-2 flex items-center justify-center'}>
                        <label htmlFor={'phone'}>Contato por Whatsapp: </label>
                    </div>
                    <input className={'p-4 bg-slate-200 rounded-lg col-span-3'} id={'useWhatsapp'} type={'checkbox'} {...register('useWhatsapp')}/>

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
