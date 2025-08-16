import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="w-[95%] border border-neutral-200 rounded-2xl mx-auto my-8">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <span className="text-neutral-500">Made with</span> ❤️ by{" "}
            <a
              href="sdfdfs"
              className="text-neutral-900 hover:text-neutral-700 transition-colors duration-200"
            >
              Jakoba
            </a>
          </h3>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
