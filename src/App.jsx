import { AiOutlineGlobal } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

import { useState, useEffect } from "react";
import { categories } from "../categories";
import { products } from "../products";

function App() {
  const [lang, setLang] = useState("ar");
  const [selectedCategory, setSelectedCategory] = useState("Breakfast");
  const [showenProducts, setShowenProducts] = useState("");

  useEffect(() => {
    setShowenProducts(
      products.filter((product) => product.category === selectedCategory)
    );
  }, [selectedCategory]);

  const handleChangeCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleChangeLang = () => {
    setLang(lang === "ar" ? "en" : "ar");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Logo */}
      <header className="py-6 text-center">
        <AiOutlineGlobal
          onClick={() => handleChangeLang()}
          className="w-6 h-6 ml-4"
        />

        <div className="flex flex-col items-center justify-center gap-2">
          <img
            className="w-48 h-48 mt-12"
            src="./images/menu/logo.png"
            alt=""
          />
          <h1 className="text-2xl font-semibold">
            {lang === "ar" ? "بلكونة المدينة" : "City balcony"}
          </h1>
          <h2 className="text-lg text-gray-400">
            {lang === "ar" ? "المنيو" : "Menu"}
          </h2>
        </div>
      </header>

      {/* Horizontal Scrolling Categories */}
      <div className="relative">
        <div className="overflow-x-scroll  no-scrollbar">
          <div className="flex gap-4 p-4 min-w-max ">
            {categories.map((category) => (
              <div
                key={category.id}
                className="w-28 h-36  flex-shrink-0 border-2 border-[#5a5a5a] rounded-lg"
                onClick={() => handleChangeCategory(category.name2)}
              >
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <img
                    src={category.img}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                  <div className="absolute inset-0 flex items-end p-2">
                    <span className=" text-white flex text-base font-bold w-full justify-center">
                      {lang === "ar" ? category.name : category.name2}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items List */}
      <div className=" mx-auto px-12 py-8">
        <div className="space-y-4">
          {showenProducts &&
            showenProducts?.map((item) => (
              <div
                key={item.id}
                className={`flex ${
                  lang === "ar" ? "flex-row-reverse" : "flex-row"
                } justify-between items-center py-4 border-b border-gray-800`}
              >
                <div>
                  <h3 className="font-medium text-lg">
                    {lang === "ar" ? item?.name : item?.name2}
                  </h3>
                  <p
                    className={`text-sm ${
                      lang === "ar" ? "text-end" : "text-start"
                    } text-gray-400`}
                  >
                    {lang === "ar" ? item?.description : item?.description2}
                  </p>
                </div>
                <div className="text-lg">{item.price} JD</div>
              </div>
            ))}
        </div>
      </div>
      {/* social media */}
      <div className="flex justify-center gap-8 py-4 pb-16">
        <a
          href="https://www.facebook.com/profile.php?id=61550493180683"
          target="_blank"
        >
          <FaFacebookF className="w-8 h-8" />
        </a>

        <a href="https://www.instagram.com/city_balcony1" target="_blank">
          <FaInstagram className="w-8 h-8" />
        </a>

        <a
          href="https://www.google.com/maps/place/32%C2%B002'21.9%22N+35%C2%B043'35.3%22E/@32.03941,35.7238911,17z/data=!3m1!4b1!4m4!3m3!8m2!3d32.03941!4d35.726466?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          <FaMapLocationDot className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}

export default App;
