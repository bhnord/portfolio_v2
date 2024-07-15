export default function Project({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) {
  //TODO: remove borders
  return (
    <>
      <div className="flex items-center h-[1300px]  ">
        <div className="w-screen text-right overflow-hidden ">
          <div className="flex justify-end">
            <div className="w-2/5 mr-20">
              <p className="text-7xl">{title}</p>
              <p className="text-2xl mt-10">{description}</p>
            </div>
            <img src={img} width={500} />
          </div>
        </div>
      </div>
    </>
  );
}
