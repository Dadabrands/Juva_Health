const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"
        role="status"
      ></div>
    </div>
  );
};

export default Loader;
