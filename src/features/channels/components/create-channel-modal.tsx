import { 
    Dialog,
    DialogContent,
    DialogDescription, 
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { useCreateChannelModal } from "../store/use-create-channel-modal";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCraeteChannel } from "../api/use-create-channel";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

export const CreateChannelModal = () =>{
    const workspaceId = useWorkspaceId();
    const [open , setOpen]= useCreateChannelModal();
    const [name, setname]= useState("");

    const { mutate, isPending } = useCraeteChannel();

    const handleClose = () =>{
        setname("");
        setOpen(false);
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value.replace(/\s+/g, "-").toLowerCase();
        setname(value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        mutate(
            { name, workspaceId },
            {
                onSuccess: (id)=>{
                    handleClose();
                }
            }
        )
    }

    return (
        <Dialog open={open} onOpenChange={handleClose} >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add a channel</DialogTitle>
                </DialogHeader>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <Input
                    value={name}
                    disabled={isPending}
                    onChange={handleChange}
                    required
                    autoFocus
                    minLength={3}
                    maxLength={18}
                    placeholder="e.g. plan-budget"
                    />
                    <div className="flex justify-end">
                        <Button disabled={false}>
                            Create
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};