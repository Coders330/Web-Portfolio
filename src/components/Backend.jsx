import { FaServer } from "react-icons/fa";
import Box from "./Box";

const Backend = () => {
  return (
    <Box title="Backend & DSA" icon={<FaServer />} color="green">
      Node • Express <br />
      <span className="text-xs text-green-300">
        Data Structures & Algorithms
      </span>
    </Box>
  );
};

export default Backend;
