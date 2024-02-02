
import { Typography } from "@material-tailwind/react";

const LINKS = [
  { title: "Product", items: ["Overview", "Features", "Solutions", "Tutorials"] },
  { title: "Company", items: ["About us", "Careers", "Press", "News"] },
  { title: "Resource", items: ["Blog", "Newsletter", "Events", "Help center"] },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <img src="/images/logo.png" alt="Logo" className="w-16 h-16" /> {/* Reemplaza con la URL de tu logo */}
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="small" color="blue-gray" className="mb-3 font-medium opacity-40">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography as="a" href="#" color="gray" className="py-1.5 font-normal transition-colors hover:text-blue-gray-900">
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography variant="small" className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
            © {currentYear} <a href="https://example.com/">Your Company Name</a>. {/* Reemplaza con la URL de tu sitio */}
          </Typography>
          <div className="flex gap-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-facebook"></i> {/* Reemplaza con tus enlaces sociales */}
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
