type UserMessageProps = {
    message: string
}

const UserMessage = ({ message }: UserMessageProps) => {
    return (
        <div className="text-xl text-gray-500 pl-9 my-2">
        {message}
      </div>
    )
}

export default UserMessage;