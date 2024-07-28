import img from "../assets/face.jpg";
export default function About() {
  return (
    <>
      <div className="pt-24 px-9  min:h-[100vh]">
        <h2 className="text-8xl">About Me</h2>
        <div className="grid gap-9 grid-cols-5 mt-16">
          <div className="flex items-center justify-center col-span-2">
            <img src={img} width={500} />
          </div>
          <div className="col-span-3 text-2xl">
            <p>
              I am working as a Back-End SWE at Pinterest, in the Infrastructure
              Org.
            </p>
            <br />
            <p>
              I work on Teletraan, Pinterest's open source deploy system, as
              well as Pindeploy, an internal system which handles how software
              moves from one environment to another.
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
          </div>
        </div>
      </div>
    </>
  );
}
