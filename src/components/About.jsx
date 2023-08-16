import React from "react";
import Beginning from "../assets/Beginning";
import Chef from "../assets/Chef";

function About() {
  return (
    <div className="bg-slate-900" id="about">
      <h1 className="text-3xl text-orange-100 text-center p-5">About Us</h1>
      <article className="mt-5 px-48">
        <p className="subpixel-antialiased text-center text-orange-100">
          At Tasty Bites, we believe that dining is not just about food—it's an
          experience that should awaken your senses, transport you to new
          culinary horizons, and create unforgettable memories. Nestled in the
          heart of [City Name], our restaurant is more than just a place to eat;
          it's a hub of creativity, passion, and the art of gastronomy.
        </p>
      </article>
      {/* Beginning */}
      <div className="md:flex justify-around py-12">
        <div className="">
          <div className="flex">
            <div className="w-12 h-12 pl-5">
              <Beginning></Beginning>
            </div>
            <h1 className="text-2xl text-white text-center my-5 ml-auto mr-auto">
              A Journey Through Flavor and Culture
            </h1>
          </div>

          <div className="flex flex-wrap ml-auto mr-auto text-center w-4/6">
            <p className="subpixel-antialiased text-orange-100">
              Our culinary journey began [Number of Years] years ago, with a
              vision to bring together flavors from around the world and present
              them in innovative and enticing ways. Every dish on our menu is a
              fusion of tradition and innovation, capturing the essence of
              global cuisines while preserving the authenticity that makes each
              flavor special
            </p>
          </div>
        </div>
        <div className="w-full p-8 animate__animated animate__slideInRight">
          <img src="https://placehold.co/600x400" alt="Begining Of Us" />
        </div>
      </div>
      {/* Crafting Every Plate with Care */}
      <div className="md:flex justify-around py-12">
        <div className="">
          <div className="flex">
            <div className="w-12 h-12 pl-5">
              <Chef></Chef>
            </div>
            <h1 className="text-2xl text-white text-center my-5 ml-auto mr-auto">
              Crafting Every Plate with Care
            </h1>
          </div>

          <div className="flex flex-wrap ml-auto mr-auto text-center w-4/6">
            <p className="subpixel-antialiased text-orange-100">
              Led by our passionate head chef, [Chef's Name], our kitchen is a
              place of creativity and craftsmanship. From sourcing the freshest
              ingredients to meticulously crafting each dish, our team of
              culinary artists pours their hearts into every plate. We believe
              that great food is a blend of skill, imagination, and a deep love
              for cooking.
            </p>
          </div>
        </div>
        <div className="w-full p-8 animate__animated animate__slideInRight">
          <img src="https://placehold.co/600x400" alt="Begining Of Us" />
        </div>
      </div>
      {/* Chef's Note */}
     <section>
<h1 className="text-3xl text-orange-100 text-center p-3">Chef's Note </h1>
<div className="ml-auto mr-auto shadow-md shadow-slate-800 flex justify-center flex-wrap w-3/6">
<p className="subpixel-antialiased text-orange-100 p-12">
Dear Food Enthusiasts,

Welcome to [Restaurant Name], where every dish is a labor of love and a celebration of flavors. As the head chef of this culinary haven, I am thrilled to embark on a journey that transcends ordinary dining.
<br></br>
<br></br>
Cooking has always been more than just a profession for me; it's an art form that allows me to express my creativity and share my passion with each plate I create. Every ingredient I choose, every seasoning I sprinkle, and every technique I employ is carefully orchestrated to create an unforgettable symphony of tastes.
<br></br>
At [Restaurant Name], our mission is to transport you to different corners of the world through the magic of cuisine. With each bite, I aim to tell stories that evoke memories, ignite conversations, and forge connections. Our menu is a testament to the diverse cultures and culinary traditions that inspire me daily.
<br></br>
<br></br>
I believe that the heart and soul of a great meal lies not just in the recipes but in the people who gather around the table. It's about the shared laughter, the intimate conversations, and the joy that comes from breaking bread together. As you indulge in our dishes, know that you're not just savoring food; you're partaking in an experience carefully crafted to delight your senses.
<br></br>
<br></br>
Whether you're a seasoned food adventurer or a curious explorer, I invite you to embark on a gastronomic journey with us. Thank you for choosing [Restaurant Name] as your destination for exceptional dining. My team and I look forward to serving you and creating memories that will linger long after the last bite.
<br></br>
<br></br>
With culinary excitement,
<br></br>
[Chef's Name]
Head Chef, [Restaurant Name]
</p>
</div>
     </section>
    </div>
  );
}

export default About;
