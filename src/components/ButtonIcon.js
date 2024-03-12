import { FaSearch } from "react-icons/fa";
const Buttonitem = () => {
  return (
    <div>
      <button className="bg-blue-700 px-4 py-3 text-white rounded-[10px] absolute top-2 right-2 hover:bg-blue-900">
        <FaSearch />
      </button>
    </div>
  );
};
export default Buttonitem;
