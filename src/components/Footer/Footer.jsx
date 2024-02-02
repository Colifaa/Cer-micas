import { H6 } from "@material-tailwind/react";

const LINKS = [
  { title: "Product", items: ["Overview", "Features", "Solutions", "Tutorials"] },
  { title: "Company", items: ["About us", "Careers", "Press", "News"] },
  { title: "Resource", items: ["Blog", "Newsletter", "Events", "Help center"] },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <img src="/images/logo.png" alt="Logo" className="w-16 h-16" />
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <H6 color="blue-gray" className="mb-3 font-medium opacity-40">
                  {title}
                </H6>
                {items.map((link) => (
                  <li key={link}>
                    <H6 as="a" href="#" color="gray" className="py-1.5 font-normal transition-colors hover:text-blue-gray-900">
                      {link}
                    </H6>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <H6 className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
            © {currentYear} <a href="https://example.com/">Your Company Name</a>.
          </H6>
          <div className="flex gap-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
