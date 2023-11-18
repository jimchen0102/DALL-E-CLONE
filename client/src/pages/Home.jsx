import { useState } from "react";

import { Loader, Card, Field } from "../components";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setIsLoading] = useState(false);

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">社區展示</h1>
        <p className="max-w-[500px] mt-2 text-[#666e75]">
          瀏覽由 DALL-E AI 生成的一系列富有想像力且視覺上令人驚艷的圖像。
        </p>
      </div>

      <div className="mt-16">
        <Field />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="mb-3 font-medium text-xl text-[#666e75]">
                顯示 <span className="text-[#222328]">{searchText}</span> 的結果
              </h2>
            )}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {searchText && posts.length > 0 ? (
                posts.map((post) => <Card key={post._id} {...post} />)
              ) : (
                <h2 className="mt-5 font-bold text-xl text-[#6449ff] uppercase">
                  沒有找到圖像
                </h2>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
