export default function Project({
  img,
  title,
  description,
  skills,
}: {
  img: string;
  title: string;
  description: string;
  skills: string[];
}) {
  //TODO: remove borders
  //TODO: change color
  //TODO: fix line spacing (vw??)
  //TODO: fix picture spacing
  //TODO: clamp -- get rid of picture when window small enough
  //TODO: fix font sizes
  return (
    <>
      <div className="md:h-[100vh] h-[80vh] px-6 grid grid-cols-5 justify-end">
        <div className="text-right md:col-span-3 col-span-5">
          <div className="mr-16">
            <h3 className="text-[4vw]">{title}</h3>
            <p className="text-lg mt-2">{description}</p>
          </div>
        </div>
        <div className="md:col-span-2 md:block hidden overflow-hidden align ">
          <img className="block rounded-lg m-auto mr-0" src={img} width={500} />
          <div className="flex mt-3 justify-end">
            {skills.map((skill) => (
              <span className="border-secondary-color border-2 border-solid rounded-xl px-3 ml-1">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
