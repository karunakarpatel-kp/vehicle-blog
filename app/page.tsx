import { SEO_OBJ } from "@/Essential";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SEO_OBJ.HOME_PAGE.title,
  description: "Simple Description",
};

export default function Home() {
  return (
    <>
      <div className="w-screen">
        <div className="shadow-2xl p-3 mt-5 max-w-2xl m-auto border border-cyan-200 text-center">
          <h1 className="text-3xl font-bold underline mt-4 mb-3 underline-offset-4 text-center ">Hello world!</h1>
          <p className="text-blue-900  p-2 text-pretty text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ipsam possimus sunt natus consectetur facere
            quaerat velit molestiae. Cum incidunt vitae in laudantium illo fugiat nulla adipisci error ullam inventore!
          </p>
          <div className="m-auto w-auto text-center mt-1 mb-1">
            <button className=" bg-brandColor  text-black p-2 pr-3 pl-3 m-auto hover:bg-[#dd3676]">Suprise...!</button>
          </div>
        </div>
      </div>
      {/* <div>Content Goes here</div> */}
    </>
  );
}
