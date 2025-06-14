import React from "react";
import style from "./developer.module.css";
import Image from "next/image";
import student2 from "@/public/images/student2.jpg"

export default function Developers() {
  return (
    <>
      <h1 className={style.common_heading}>Hello Developers</h1>
      <section>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Team
          </h2>

          {/* ✅ ONE Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* ✅ Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-orange-200 rounded-full mb-4 flex items-center justify-center">
                <div className="text-2xl font-bold text-orange-600">
                    <Image 
                    src="/images/student.jpg"
                    alt="KJ"
                    width={200}
                    height={300}
                    className="w-full h-full rounded-full"
                    />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Kanhopatra Jagdambe</h3>
              <p className="text-sm text-gray-600 mt-2">Software Engineer</p>
              <p className="text-xs text-gray-500 mt-1">React.js & Next.js</p>
            </div>

            {/* ✅ Card 2 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center">
              <div className="w-full relative h-full bg-orange-200 rounded-full mb-4 flex items-center justify-center">
                <div className="text-2xl font-bold text-orange-600">
                  <Image
                  src={student2}
                  height={200}
                  width={100}
                  className="w-full h-full rounded-full"
                  full={true}
                  quality={100}
                  priority={false}
                  placeholder="blur"
                  blurDataURL="..." 
                  />
                </div>
              </div>
              {/* <h3 className="text-lg font-semibold text-gray-800">Rajesh Jagdambe</h3>
              <p className="text-sm text-gray-600 mt-2">Backend Developer</p>
              <p className="text-xs text-gray-500 mt-1">Java & Springboot</p> */}
            </div>
            {/* ✅ Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-orange-200 rounded-full mb-4 flex items-center justify-center">
                <div className="text-2xl font-bold text-orange-600">VJ</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Rajesh Jagdambe</h3>
              <p className="text-sm text-gray-600 mt-2">Software Engineer</p>
              <p className="text-xs text-gray-500 mt-1">React.js & Next.js</p>
            </div>
          </div>
           
        </div>
      </section>
    </>
  );
}
