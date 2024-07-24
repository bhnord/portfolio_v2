import img from "../assets/face.jpg";
export default function About() {
  return (
    <>
      <div className="pt-24 h-[100vh]">
        <h2 className="text-8xl">About Me</h2>
        <div className="grid grid-cols-5 mt-24">
          <div className="flex items-center justify-center col-span-2">
            <img src={img} width={500} />
          </div>
          <div className="col-span-3">
            <p className="text-3xl">
              I am working as a Back-End SWE at Pinterest, in the Infrastructure
              Org.
            </p>
            <br />
            <p className="text-3xl">
              I work on Teletraan, Pinterest's open source deploy system, as
              well as Pindeploy, an internal system which handles how software
              moves from one environment to another.
            </p>
            <br />
            <p className="text-3xl">
              I graduated from Worcester Polytechnic Institute with a Masters
              and Bachelors Computer Science in 2024
            </p>
            <br />
            <p className="text-3xl">
              When I'm not working, I enjoy cooking and baking as well as
              volunteering at my local community center.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
