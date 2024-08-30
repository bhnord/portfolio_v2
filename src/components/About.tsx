import img from "../assets/images/bernhard_nordemann.jpg";
export default function About() {
  return (
    <>
      <div className="pt-48 px-9 min:h-[100vh]">
        <h2 className="md:text-8xl md:ml-10 md:text-left text-center md:pb-28 pb-16 text-7xl">
          About Me
        </h2>
        <div className="flex md:hidden items-center justify-center pb-16">
          <img
            alt="Photo of Bernhard Nordemann with a city street in the background"
            src={img}
            className="w-full max-w-[500px]"
          />
        </div>
        <div className="grid gap-9 grid-cols-6 ">
          <div className="hidden md:flex items-center justify-left col-span-2 pl-8">
            <img
              alt="Photo of Bernhard Nordemann with a city street in the background"
              src={img}
              className="w-full max-w-[600px] "
            />
          </div>
          <div className="md:col-span-4 col-span-6 md:text-3xl text-2xl">
            <p>
              I am working as a Back-End SWE at Pinterest, in the Infrastructure
              Org.
              <br />I work on Teletraan, Pinterest's open source deploy system,
              as well as Pindeploy, an internal system which handles how
              software moves from one environment to another.
            </p>
            <br />
            <p>
              I graduated from Worcester Polytechnic Institute with a Masters
              and Bachelors Computer Science in 2024
            </p>
            <br />
            <p>
              When I'm not working, I enjoy cooking and baking as well as
              volunteering at my local community center.
            </p>
            <br />
            <p>
              I also love travelling and trying new foods all around the world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
