import {useSidebar} from "./hooks/useSidebar.ts";
import {AiOutlineClose} from "react-icons/ai";
import {useEffect, useState} from "react";

export function Sidebar() {
    const { open, title, content, closeSidebar } = useSidebar();
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        if(open) {
            setTimeout(() => setIsShown(true), 0);
            return;
        }

        setIsShown(open);
    }, [open]);

    return (
        <div className={`${open ? 'absolute' : 'hidden'} ${isShown ? 'bg-black' : 'bg-transparent'} overflow-hidden w-full h-full z-50 flex justify-end items-center bg-opacity-75 duration-200`}>
            <div className={`${isShown ? '' : 'translate-x-full'} p-4 bg-white w-full lg:max-w-2xl max-h-full h-full duration-300`}>
                <div className={'flex justify-between items-center'}>
                    <span className={'text-lg font-medium'}>{title}</span>

                    <AiOutlineClose
                        onClick={closeSidebar}
                        className={'ml-4 cursor-pointer'}
                        size={'1.5em'}
                    />
                </div>

                <div className={'mt-4 w-full'}>
                    {content}
                </div>
            </div>
        </div>
    )
}
