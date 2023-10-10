import {createContext, ReactNode, useMemo, useState} from "react";

interface IProviderProps {
    children?: ReactNode;
}

export interface ISidebarContextData {
    open: boolean;
    title: string;
    content: ReactNode;
    showSidebar: (data: { title: string, content: ReactNode, data?: unknown }) => void;
    closeSidebar: () => void;
    getSidebarData: <T>() => T | undefined;
}

export const SidebarContext = createContext<ISidebarContextData>(
    {} as ISidebarContextData,
);

export function SidebarProvider({ children }: IProviderProps) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [sidebarData, setSidebarData] = useState<any>();
    const [content, setContent] = useState<ReactNode>();

    const showSidebar = (data: { title: string, content: ReactNode, data?: unknown }) => {
        setOpen(true);
        setTitle(data.title);
        setContent(data.content);
        setSidebarData(data.data);
    };

    const closeSidebar = () => {
        setOpen(false);
        setTitle('');
        setContent(undefined);
        setSidebarData(undefined);
    };

    const getSidebarData = useMemo(() => {
        return () => sidebarData;
    }, [sidebarData]);

    return (
        <SidebarContext.Provider
            value={{
                open,
                title,
                content,
                showSidebar,
                closeSidebar,
                getSidebarData,
            }}
        >
            {children}
        </SidebarContext.Provider>
    )
}
