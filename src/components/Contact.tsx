export default function Contact() {
  return (
    <>
      <div className="w-screen h-screen">
        <div className="p-8">
          <h2 className="text-8xl" id="Contact">
            Get In Contact
          </h2>
          <form className="text-3xl mt-5">
            <hr />
            <div className="grid grid-cols-7 py-6">
              <div className="col-span-3">
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
              <div className="col-span-3">
                <label htmlFor="email">Email Address</label>
              </div>

              <div className="col-span-4 ">
                <input
                  name="email"
                  required
                  placeholder="hello@gmail.com"
                  className="p-1 py-3 w-full"
                />
              </div>
            </div>

            <hr />
            <div className="grid grid-cols-7 py-6 h-96">
              <div className="col-span-3">
                <label htmlFor="description">Message</label>
              </div>

              <div className="col-span-4">
                <textarea
                  name="message"
                  required
                  placeholder="what do you want to say?"
                  className="p-3 w-full h-full"
                />
              </div>
            </div>

            <hr />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}
