
import { cn } from "@/lib/utils";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

type AssistantMessageProps = {
    message: string
    isLast?: boolean
}
const AssistantMessage = ({ message, isLast }: AssistantMessageProps ) => {
    return (
        <div className="flex items-center gap-3">
        <GlobeAltIcon className="h-6 w-6 text-gray-500 my-1" aria-hidden="true" />
        <div className={cn("text-xl", isLast ? "font-bold" : "text-gray-400 font-semibold")}>
          {message}
        </div>
      </div>
    )
}

export default AssistantMessage