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
            <p className="text-4xl mt-10">
              Software Engineer at{" "}
              <span className="text-[#e4001d] font-bold">
                <a href="https://www.pinterest.com/" target="_blank">
                  Pinterest
                </a>
              </span>
            </p>
            <p className="text-2xl mt-10">
              Previously at{" "}
              <span className="text-[#1045c8] font-bold">
                <a href="https://www.chewy.com/" target="_blank">
                  Chewy{" "}
                </a>
              </span>
              and{" "}
              <span className="text-[#0672cb] font-bold">
                <a href="https://www.dell.com/en-us" target="_blank">
                  <br />
                  Dell Technologies
                </a>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
