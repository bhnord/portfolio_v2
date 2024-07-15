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
  return (
    <>
      <div className="flex items-center h-[1200px]  ">
        <div className="w-screen text-right overflow-hidden ">
          <div className="flex justify-end mr-14">
            <div className="w-2/5 mr-20">
              <p className="text-7xl">{title}</p>
              <p className="text-2xl mt-10">{description}</p>
            </div>
            <div>
              <img className="rounded-lg" src={img} width={500} />
              <div className="mt-3">
                {skills.map((skill) => (
                  <span className="border-secondary-color border-2 border-solid rounded-xl px-3 ml-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
