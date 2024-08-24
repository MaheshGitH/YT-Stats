import ChannelDetails from "./ChannelDetails";
import ChannelProfile from "./ChannelProfile";
import Note from "./Note";

const Overview = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <ChannelProfile />
        <ChannelDetails />
      </div>
      <Note />
    </>
  );
};

export default Overview;
