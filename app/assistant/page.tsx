import Assistant from "@/components/Assistant";
import AssistantDisplay from "@/components/AssistantDisplay";

const AssistantPage = () => {
  // The assistant page is split into two parts:
  // The left hand side is the assistant itself, which is a React component
  // The right hand is a display panel , it can display outputs, information, maps, etc.
  // The assistant page is responsible for rendering both of these elements
  return (
    <div className="flex flex-1"> {/* flex-1 ensures that the container takes up the full height */}
    {/* Assistant sidebar */}
    <div className="flex-none w-2/4 p-4 bg-primary/5 rounded-lg m-1"> {/* flex-none prevents the sidebar from growing */}
      <Assistant />
    </div>
    {/* Assistant display */}
    <div className="flex-grow p-4 overflow-auto bg-primary/10 rounded-lg m-1"> {/* flex-grow allows the display to take up the remaining space */}
      <AssistantDisplay />
    </div>
  </div>
  );
};

export default AssistantPage;
