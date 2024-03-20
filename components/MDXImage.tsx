import Image from "next/legacy/image";

const MDXImage = (props: any) => {
  const { src, alt } = props;
  return (
    <div className=" relative h-full min-h-[200px] md:h-[300px] lg:h-[500px] bg-slate-200 rounded-lg ring-1 dark:bg-slate-800 ">
      <Image src={src} alt={alt} layout="fill" />
    </div>
  );
};

export default MDXImage;
