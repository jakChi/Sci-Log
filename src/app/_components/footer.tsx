import Container from "@/src/app/_components/container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-[95%] border border-neutral-200 rounded-2xl mx-auto my-8">
      <Container>
        <div>
          <p>დაწერე და ატვირთე სტატია</p>
          <h3>ონლაინ მარკდაუნ ედიტორები:</h3>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link href={"https://mark.barelyhuman.dev"}>BarelyHuman</Link>
            <Link href={"https://dillinger.io"}>Dillinger</Link>
            <Link href={"https://www.jekyllpad.com"}>JekyllPad</Link>
            <Link href={"https://www.notion.com"}>Notion</Link>
            <Link href={"https://vscode.dev"}>VsCode</Link>
          </div>
        </div>
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
