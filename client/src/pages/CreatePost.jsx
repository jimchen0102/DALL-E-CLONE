import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getRandomPrompt } from "../utils";
import { Field, Loader } from "../components";
import { preview } from "../assets";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = () => {};

  const handleSubmit = () => {};

  const handleSurpriseMe = () => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">新增</h1>
        <p className="max-w-[500px] mt-2 text-[#666e75]">
          透過 DALL-E AI 創造富有想像且上令人驚艷的圖像並與社群分享。
        </p>
      </div>

      <form className="max-w-3xl mt-16" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <Field
            type="text"
            name="name"
            label="名稱"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <Field
            type="text"
            name="prompt"
            label="指令"
            placeholder="A plush toy robot sitting against a yellow wall"
            value={form.name}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
