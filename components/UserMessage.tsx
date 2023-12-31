import { cn } from "@/lib/utils"

type UserMessageProps = {
    message: string
    isLast?: boolean
}

const UserMessage = ({ message, isLast }: UserMessageProps) => {
    return (
        <div className={cn("text-xl pl-9 my-2", isLast ? "font-semibold" : "text-gray-400 font-semibold")}>
        {message}
      </div>
    )
}

export default UserMessage;