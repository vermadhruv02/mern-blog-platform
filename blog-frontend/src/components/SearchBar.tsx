import { Input } from "./ui/input";

export default function SearchBar() {
  return (
    <Input
      placeholder="Search for Any Blog"
      className="w-full  mx-auto my-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
      onSelect={(record) => console.log(record)}
      onFocus={() => {
        console.log("This function is called when is focussed");
      }}
      onChange={(e) => console.log(`value: ${e.target.value}`)}
      // autoFocus
    />
  );
}
