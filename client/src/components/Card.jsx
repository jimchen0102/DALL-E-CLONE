import { download } from "../assets";
import { downloadImage } from "../utils";

const Card = ({ _id, name, prompt, photo }) => (
  <div className="card group relative rounded-xl shadow-card hover:shadow-cardhover">
    <img
      className="w-full h-auto object-cover rounded-xl"
      src={photo}
      alt={prompt}
    />
    <div className="absolute bottom-0 left-0 right-0 hidden flex-col max-h-[94.5%] p-4 m-2 bg-[#10131f] rounded-md group-hover:flex">
      <p className="prompt text-sm text-white overflow-y-auto">{prompt}</p>

      <div className="flex justify-between items-center gap-2 mt-5">
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center w-7 h-7 object-cover font-bold text-xs text-white bg-green-700 rounded-full">
            {name[0]}
          </div>
          <p className="text-sm text-white">{name}</p>
        </div>
        <button
          type="button"
          onClick={() => downloadImage(_id, photo)}
          className="bg-transparent border-none outline-none"
        >
          <img
            src={download}
            alt="download"
            className="w-6 h-6 object-contain invert"
          />
        </button>
      </div>
    </div>
  </div>
);

export default Card;
