import {SidebarContext, ISidebarContextData} from "../index.context.tsx";
import {useContext} from "react";

export function useSidebar(): ISidebarContextData {
    const context = useContext(SidebarContext);

    if (!context) {
        throw new Error(
            'useSidebar must be used within an SidebarProvider',
        );
    }

    return context;
}
