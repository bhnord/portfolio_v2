import img from "../assets/face.jpg";
import logo from "../assets/logo.png";
export default function Landing() {
  //TODO: change p to headers
  return (
    <>
      <img width={100} src={logo} className="absolute" />
      <div className="flex h-screen justify-center items-center">
        <div className="flex w-screen">
          <div className="flex-auto mr-20 text-right justify-between">
            <h1 className="text-9xl">
              Bernhard <br />
              Nordemann
            </h1>
            <p className="text-4xl mt-10">Software Engineer at Pinterest</p>
            <p className="text-2xl mt-10">
              Previously at Chewy and Dell <br />
              Technologies
            </p>
          </div>
          <div className="flex-auto">
            <img width={500} src={img} />
          </div>
        </div>
      </div>
    </>
  );
}
