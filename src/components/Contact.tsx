import Sidebar from "./Sidebar";
export default function Contact() {
  return (
    <>
      <div className="w-full min:h-screen">
        <Sidebar showButton={true} />
        <div className="p-12 py-18">
          <h2 className="text-8xl" id="Contact">
            Get In Contact
          </h2>
          <form
            className="text-3xl mt-5 pb-24"
            action="https://formsubmit.co/68f6eb9f1161463baacb23c2ac67579b"
            method="POST"
          >
            <hr />
            <div className="grid grid-cols-7 py-6">
              <div className="col-span-3 pl-4">
                <label htmlFor="name">Name</label>
              </div>
              <div className="col-span-4 ">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="p-1 py-3 w-full"
                />
              </div>
            </div>

            <hr />
            <div className="grid grid-cols-7 py-6">
              <div className="col-span-3 pl-4">
                <label htmlFor="email">Email Address</label>
              </div>

              <div className="col-span-4 ">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="hello@gmail.com"
                  className="p-1 py-3 w-full"
                />
              </div>
            </div>

            <hr />
            <div className="grid grid-cols-7 py-6 ">
              <div className="col-span-3 pl-4">
                <label htmlFor="description">Message</label>
              </div>

              <div className="col-span-4">
                <textarea
                  name="message"
                  required
                  placeholder="what do you want to say?"
                  className="p-3 w-full h-full min-h-96"
                />
              </div>
            </div>

            <hr />
            <button type="submit" className="float-right mt-5">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
