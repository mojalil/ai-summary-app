import { cn } from "@/lib/utils"
import useTypewriter from "@/hooks/useTypewriter"

type UserMessageProps = {
    message: string
    isLast?: boolean
}

const UserMessage = ({ message, isLast }: UserMessageProps) => {
    const typeMessage = useTypewriter(message);
    return (
        <div className={cn("text-xl pl-9 my-2", isLast ? "font-semibold" : "text-gray-400 font-semibold")}>
            {isLast ? typeMessage : message}
      </div>
    )
}

export default UserMessage;