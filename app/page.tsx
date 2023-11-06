import Upload from "@/components/Upload";

const SummaryPage = () => {
  return (
    <div className="container mx-auto lg:w-1/2">
      <div className="flex flex-col">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Summaries Your Notes
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        To get started upload your documents, video and audio files to create a summary of your notes.
      </p>
      <Upload />
    </div>
    </div>
  )
}

export default SummaryPage;