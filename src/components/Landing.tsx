import img from "../assets/face.jpg";
export default function Landing() {
  //TODO: change p to headers
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="flex">
          <div className="flex-auto mr-20 text-right justify-between">
            <h1 className="md:text-9xl text-[14vw]">
              Bernhard <br />
              Nordemann
            </h1>
            <p className="text-4xl mt-10">Software Engineer at Pinterest</p>
            <p className="text-2xl mt-10">
              Previously at Chewy and Dell <br />
              Technologies
            </p>
          </div>
          <div className="md:visible hidden flex-auto">
            <img width={500} src={img} />
          </div>
        </div>
      </div>
    </>
  );
}
