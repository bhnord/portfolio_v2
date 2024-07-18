import img from "../assets/face.jpg";
export default function About() {
  return (
    <>
      <h2 className="text-8xl" id="About">
        About Me
      </h2>
      <img src={img} width={500} />
      <p>
        I am working as a Back-End SWE at Pinterest, in the Infrastructure Org.
      </p>
      <p>
        I work on Teletraan, Pinterest's open source deploy system, as well as
        Pindeploy, an internal system which handles how software moves from one
        environment to another.
      </p>
      <p>
        I graduated from Worcester Polytechnic Institute with a Masters and
        Bachelors Computer Science in 2024
      </p>
      <p>
        When I'm not working, I enjoy cooking and baking as well as volunteering
        at my local community center.
      </p>
    </>
  );
}
