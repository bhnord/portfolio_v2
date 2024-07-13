import Project from "./Project";
import img from "../assets/face.jpg";

export default function Projects() {
  const description1 =
    "I worked in a group of three and traveled to Hong Kong to provide recommendations as to whether or not STC Hong Kong could improve their current certification processes by using blockchain.";
  const description2 = "";
  const description3 = "";
  const description4 = "";

  const title1 = "Blockchain Feasibility Assessment";
  const title2 = "title";
  const title3 = "title";
  const title4 = "title";

  const img1 = img;
  const img2 = img;
  const img3 = img;
  const img4 = img;

  const projects = [
    { num: "01.", title: title1, description: description1, img: img1 },
    { num: "02.", title: title2, description: description2, img: img2 },
    { num: "03.", title: title3, description: description3, img: img3 },
    { num: "04.", title: title4, description: description4, img: img4 },
  ];

  //TODO: add scrolling animations
  //TODO: add more projects + descriptions
  //TODO: add link spots
  //
  return (
    <>
      <h2 className="text-6xl mb-[100px] ">Projects</h2>
      <div className="w-screen">
        <h3 className="text-9xl sticky top-8 ml-8">1</h3>

        {projects.map(({ title, description, img }) => (
          <Project img={img} title={title} description={description} />
        ))}
      </div>
    </>
  );
}
