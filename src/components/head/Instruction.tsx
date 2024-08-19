import { BsArrowUp } from "react-icons/bs";

const Instruction = () => {
  return (
    <div className="flex flex-col gap-5 max-w-lg mx-auto mt-10">
      <p className="text-secondary text-nowrap md:ml-7">
        To get the channel ID:{" "}
      </p>
      <div className="flex flex-wrap gap-4 self-center">
        <span className="flex gap-2 items-center">
          <p>Channel homepage</p>
          <BsArrowUp className="rotate-90" />
        </span>
        <span className="flex gap-2 items-center">
          <p>About</p>
          <BsArrowUp className="rotate-90" />
        </span>
        <span className="flex gap-2 items-center">
          <p>Share</p>
          <BsArrowUp className="rotate-90" />
        </span>
        <span className="flex gap-2 items-center">
          <p>Copy channel ID</p>
        </span>
      </div>
    </div>
  );
};

export default Instruction;
