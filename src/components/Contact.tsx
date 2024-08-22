import Sidebar from "./Sidebar";
export default function Contact() {
  return (
    <>
      <div className="w-full min:h-screen">
        <Sidebar showButton={true} />
        <div className="p-12 py-18">
          <h2 className="md:text-8xl text-5xl" id="Contact">
            Get In Contact
          </h2>
          <form
            className="md:text-3xl text-2xl mt-5 pb-24"
            action="https://formsubmit.co/68f6eb9f1161463baacb23c2ac67579b"
            method="POST"
          >
            <hr />
            <div className="grid grid-cols-7 py-6">
              <div className="md:col-span-3 col-span-7 md:pl-4 pb-3">
                <label htmlFor="name">Name</label>
              </div>
              <div className="md:col-span-4 col-span-7">
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
              <div className="md:col-span-3 col-span-7 md:pl-4">
                <label htmlFor="email">Email Address</label>
              </div>

              <div className="md:col-span-4 col-span-7">
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
              <div className="md:col-span-3 col-span-7 md:pl-4">
                <label htmlFor="description">Message</label>
              </div>

              <div className="md:col-span-4 col-span-7">
                <textarea
                  name="message"
                  required
                  placeholder="what do you want to say?"
                  className="p-3 w-full h-full md:min-h-96 min-h-64"
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
