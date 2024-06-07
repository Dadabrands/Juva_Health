// import { useUser } from "./useUser";
// import main from "../assets/main.png";

const UserAvatar = () => {
//   const { user, isLoading, isAuthenticated } = useUser();
//   const { fullName, avatar } = user?.user_metadata;

  return (
    <div className="flex gap-3 items-center font-medium text-base text-gray-600">
      <img
        src={
            // avatar ||
         "main.png"}
        // alt={`Avatar of ${fullName}`}
        className="block w-12 h-12 aspect-w-1 aspect-h-1 object-cover rounded-full border-2 border-gray-100"
      />
      <span>user</span>
    </div>
  );
};

export default UserAvatar;
