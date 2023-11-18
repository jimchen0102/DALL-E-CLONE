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
  const [generatingImage, setGeneratingImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!form.prompt) return;

    try {
      setGeneratingImage(true);
      const response = await fetch("http://localhost:8080/api/v1/dalle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: form.prompt,
        }),
      });

      const data = await response.json();
      setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
    } catch (error) {
      console.log(error);
    } finally {
      setGeneratingImage(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);

      try {
        const response = await fetch("http://localhost:8080/api/v1/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        await response.json();
        navigate("/");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="max-w-3xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">新增</h1>
        <p className="max-w-[500px] mt-2 text-[#666e75]">
          透過 DALL-E AI 創造富有想像且上令人驚艷的圖像並與社群分享。
        </p>
      </div>

      <form className="mt-16" onSubmit={handleSubmit}>
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
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className="relative flex justify-center items-center w-64 h-64 p-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-1/3 h-1/3 object-contain opacity-40"
              />
            )}

            {generatingImage && (
              <div className="absolute inset-0 flex justify-center items-center bg-black/50 rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-5 mt-5">
          <button
            type="button"
            onClick={generateImage}
            className="w-full px-5 py-2.5 font-medium text-sm text-white text-center bg-green-700 rounded-md sm:w-auto"
          >
            {generatingImage ? "生成中..." : "生成"}
          </button>
        </div>

        <div className="mt-10">
          <p className="text-sm text-[#666e75]">
            一旦生成所需的圖像後，您可以與社區中的其他人分享。
          </p>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full px-5 py-2.5 mt-3 font-medium text-sm text-white text-center bg-[#6469ff] rounded-md sm:w-auto"
          >
            {loading ? "分享中..." : "與社區分享"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
