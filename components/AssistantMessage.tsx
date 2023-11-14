
import { cn } from "@/lib/utils";
import { GlobeAltIcon, PaperClipIcon } from "@heroicons/react/24/outline";
import useTypewriter from "@/hooks/useTypewriter";
import { Message } from "@/lib/types";

type AssistantMessageProps = {
    message: string
    isLast?: boolean
    type?: Message["type"]
}
const AssistantMessage = ({ message, isLast, type }: AssistantMessageProps ) => {

    const Icon = type === 'file' ? PaperClipIcon : GlobeAltIcon;

    console.log('type', type)

    const typeMessage = useTypewriter(message);
    return (
        <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-gray-500 my-1" aria-hidden="true" />
        <div className={cn("text-xl", isLast ? "font-bold" : "text-gray-400 font-semibold")}>
          {isLast ? typeMessage : message}
        </div>
      </div>
    )
}

export default AssistantMessage