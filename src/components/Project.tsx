export default function Project({ num, img, title, description }) {
  return (
    <>
      <h3 className="text-9xl">{num}</h3>
      <div className="h-[500px]  text-right overflow-hidden">
        <div className="flex justify-end">
          <div className="w-2/5 mr-20">
            <p className="text-7xl">{title}</p>
            <p className="text-2xl ">{description}</p>
          </div>
          <img src={img} width={500} />
        </div>
      </div>
    </>
  );
}
