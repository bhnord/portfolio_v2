export default function Project({
  img,
  title,
  description,
}: {
  num: string;
  img: string;
  title: string;
  description: string;
}) {
  //TODO: remove borders
  return (
    <>
      <div className="bg-red-900 border-black border-solid border-4">
        <div className="h-[500px]  text-right overflow-hidden">
          <div className="flex justify-end">
            <div className="w-2/5 mr-20">
              <p className="text-7xl">{title}</p>
              <p className="text-2xl ">{description}</p>
            </div>
            <img src={img} width={500} />
          </div>
        </div>
      </div>
    </>
  );
}
