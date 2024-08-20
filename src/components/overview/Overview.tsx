import ChannelDetails from "./ChannelDetails";
import ChannelProfile from "./ChannelProfile";

const Overview = () => {
  return (
    <div className="flex flex-col">
      <ChannelProfile />
      <ChannelDetails />
    </div>
  );
};

export default Overview;
