"use client";

import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "./ui/tooltip";

interface HintProps {
    label: string,
    children: React.ReactNode,
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
}; 

export const Hint = ({
    label,
    children,
    side,
    align
}: HintProps) => {
    return (
        <TooltipProvider delayDuration={50}>
            <Tooltip>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent side={side} align={align} className="bg-black/65 text-white border-white/5">
                    <p className="font-medium text-xs">
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

