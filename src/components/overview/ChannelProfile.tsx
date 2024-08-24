const ChannelProfile = () => {
  return (
    <div className="flex flex-col items-center gap-4 my-20 w-full lg:w-96">
      <img
        className="size-32 lg:size-40 rounded-full border border-solid border-primary "
        src="/working dog.png"
        alt="working dog"
      />
      <span className="font-semibold lg:text-2xl lg:mt-3 text-xl text-primary">
        Working dog
      </span>
    </div>
  );
};

export default ChannelProfile;
