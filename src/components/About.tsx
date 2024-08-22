import img from "../assets/images/bernhard_nordemann.jpg";
export default function About() {
  return (
    <>
      <div className="pt-36 px-9 min:h-[100vh]">
        <h2 className="text-8xl md:ml-10 md:text-left text-center pb-28">
          About Me
        </h2>
        <div className="flex md:hidden items-center justify-center pb-16">
          <img src={img} width={500} />
        </div>
        <div className="grid gap-9 grid-cols-5 ">
          <div className="hidden md:flex items-center justify-center col-span-2">
            <img src={img} width={500} />
          </div>
          <div className="md:col-span-3 col-span-5 text-2xl ">
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
            <p>I also love travelling trying new foods all around the world</p>
          </div>
        </div>
      </div>
    </>
  );
}
