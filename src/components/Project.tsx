export default function Project({
  img,
  title,
  description,
  skills,
  link,
}: {
  img: string;
  title: string;
  description: string;
  skills: string[];
  link: string;
}) {
  //TODO: change color
  //TODO: fix font sizes
  return (
    <>
      <div className="px-6 grid grid-cols-6 justify-end ">
        <a
          target="_blank"
          href={link}
          className="col-span-6 block mb-8 md:hidden text-end pl-16"
        >
          <h3 className="leading-[10vw] text-[10vw]">{title}</h3>
        </a>
        <div className="block md:hidden md:col-span-2 pb-8 md:pb-0 col-span-6 overflow-hidden align ">
          <a target="_blank" href={link}>
            <img
              className="block rounded-lg m-auto mr-0"
              src={img}
              width={500}
            />
            <div className="flex mt-3 justify-end">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="border-secondary-color border-2 border-solid rounded-xl px-3 ml-1 text-sm md:text-base"
                >
                  {skill}
                </span>
              ))}
            </div>
          </a>
        </div>

        <div className="text-right md:col-span-4 col-span-6">
          <div className="md:mr-12 mr-1">
            <a target="_blank" href={link} className="md:block hidden">
              <h3 className="text-[4vw] leading-[5vw]">{title}</h3>
            </a>
            <p className="md:text-2xl text-xl mt-2">{description}</p>
          </div>
        </div>

        <div className="hidden md:block md:col-span-2 pb-8 pr-5 md:pb-0 col-span-6 overflow-hidden align ">
          <a target="_blank" href={link}>
            <img className="block rounded-lg m-auto mr-0" src={img} />
            <div className="flex mt-3 justify-end">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="border-secondary-color border-2 border-solid rounded-xl px-3 ml-1 text-sm md:text-base"
                >
                  {skill}
                </span>
              ))}
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
