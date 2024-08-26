import { IoSearchOutline } from "react-icons/io5";
import { ColorModeType, YoutubeData } from "../types";
import Instruction from "./Instruction";
import { FormEvent, useState } from "react";
import { useYoutubeContext } from "../../context/YoutubeContext";
import { VscLoading } from "react-icons/vsc";

const Search = ({ colorMode }: ColorModeType) => {
  const [loading, setLoading] = useState(false);
  const [channelId, setChannelId] = useState("");
  const { setData } = useYoutubeContext();
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${
        import.meta.env.VITE_YOUTUBE_APIKEY
      }`
    ).finally(() => setLoading(false));

    const data = await response.json();
    const result: YoutubeData = data.items[0];
    setData(result);
  };
  return (
    <section>
      <form
        className={`max-w-xl min-w-24 ${
          colorMode === "light"
            ? " bg-[#EFEFEF] text-black "
            : " bg-black text-white "
        }  border-b-2 border-primary flex  items-center px-4 py-3 rounded-tl-lg rounded-tr-lg mx-auto`}
        onSubmit={handleSubmit}
      >
        <input
          name="search"
          required
          minLength={24}
          maxLength={24}
          value={channelId}
          onChange={(e) => setChannelId(e.currentTarget.value)}
          placeholder="Enter YouTube channel ID"
          className="bg-transparent placeholder-[#786868] w-full placeholder:text-sm outline-none"
          type="text"
        />
        <button type="submit">
          {loading ? (
            <VscLoading className="text-primary animate-spin size-6" />
          ) : (
            <IoSearchOutline className="text-primary size-6" />
          )}
        </button>
      </form>
      <Instruction />
    </section>
  );
};

export default Search;
