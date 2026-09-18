function Contact() {
  return (
    <section id="contact" className="bg-bulk-blue text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-white/55">
              Get in Touch
            </p>

            <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Let&apos;s move
              <br />
              forward.
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/65">
              Whether you are looking to move cargo, explore a partnership or
              learn more about our capabilities, we would like to hear from you.
            </p>
          </div>

          <form className="border-t border-white/20 pt-8 md:pt-0 md:border-t-0">
            <div className="grid gap-8">
              <div>
                <label
                  htmlFor="name"
                  className="text-[10px] uppercase tracking-[0.25em] text-white/50"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-3 w-full border-b border-white/25 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-[10px] uppercase tracking-[0.25em] text-white/50"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-3 w-full border-b border-white/25 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-white"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="text-[10px] uppercase tracking-[0.25em] text-white/50"
                >
                  Company
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  className="mt-3 w-full border-b border-white/25 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-white"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-[10px] uppercase tracking-[0.25em] text-white/50"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-3 w-full resize-none border-b border-white/25 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-white"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                className="w-full border border-white px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-bulk-blue md:w-fit"
              >
                Send Enquiry →
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
