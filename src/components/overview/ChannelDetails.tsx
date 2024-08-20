import { BiLinkExternal } from "react-icons/bi";
import DetailSection from "./DetailSection";

const ChannelDetails = () => {
  return (
    <div className=" flex flex-col gap-4">
      <DetailSection heading="Country : ">India</DetailSection>
      <DetailSection
        customClass=" text-primary flex gap-1 items-center"
        heading="Channel URL : "
      >
        @workingdog <BiLinkExternal className="size-4" />
      </DetailSection>

      <DetailSection customClass=" flex-col" heading="Description : ">
        {
          "musica laetitiae comes, medicina dolorum\n\nclassical/ambient playlists and stuff\n\n"
        }
      </DetailSection>
    </div>
  );
};

export default ChannelDetails;
