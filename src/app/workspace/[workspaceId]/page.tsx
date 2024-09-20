"use client";

import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";


const WorkspaceIdPage = () =>{
    const workspaceId = useWorkspaceId();
    const { data } = useGetWorkspace({id : workspaceId});

    return (
        <>
            DATA: {JSON.stringify(data)}
        </>
    )
}
export default WorkspaceIdPage;
