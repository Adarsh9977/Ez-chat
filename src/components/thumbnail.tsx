import { 
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { XIcon } from "lucide-react";
import Image from "next/image";

interface ThumbnailProps{
    url: string | null | undefined;
};

export const Thumbnail = ({ url } : ThumbnailProps) =>{
    if(!url)return;
    return (
        <Dialog>
            <DialogTrigger>
                <div className="relative overflow-hidden max-w-[360px] border rounded-lg my-2 cursor-zoom-in ">
                    <Image 
                    src={url} 
                    alt="Message image"
                    className="rounded-md object-cover size-full"
                    />
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-[800px] border-none bg-transparent p-0 shadow-none ">
                <Image 
                src={url} 
                alt="Message image"
                className="rounded-md object-cover size-full"
                />
            </DialogContent>
        </Dialog>
    )
}