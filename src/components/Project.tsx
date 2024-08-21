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
      <div className=" px-6 grid grid-cols-5 justify-end">
        <div className="text-right md:col-span-3 col-span-5">
          <div className="md:mr-12 mr-1">
            <a target="_blank" href={link}>
              <h3 className="md:text-[4vw] text-[7vw]">{title}</h3>
            </a>
            <p className="text-lg mt-2">{description}</p>
          </div>
        </div>
        <div className="md:col-span-2 md:block hidden overflow-hidden align">
          <a target="_blank" href={link}>
            <img
              className="block rounded-lg m-auto mr-0"
              src={img}
              width={500}
            />
            <div className="flex mt-3 justify-end">
              {skills.map((skill) => (
                <span className="border-secondary-color border-2 border-solid rounded-xl px-3 ml-1">
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
