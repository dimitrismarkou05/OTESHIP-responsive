import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("layouts");

  const quickLinks = [
    { name: t("footer.home"), href: "/" },
    { name: t("footer.about"), href: "/about" },
    { name: t("footer.guide"), href: "/guide" },
    { name: t("footer.ceramics"), href: "/ceramics" },
    { name: t("footer.contact"), href: "/contact" },
  ];

  const projectNumber = "2023-2-EL01-KA210-VET-000170737";

  return (
    <footer className="bg-(--color-dark-text) dark:bg-black transition-colors duration-200">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8">
        {/* Project Info */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-(--color-primary) dark:text-(--color-primary2) mb-2">
            {t("footer.title")}
          </h1>
          <p className="text-white mb-2">{t("footer.description")}</p>
          <p className="text-sm text-(--color-light3-text)">
            {t("footer.coFunded")}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-(--color-divider) my-6"></div>

        {/* Quick Links */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">
            {t("footer.quickLinks")}
          </h2>
          <div className="flex flex-wrap gap-4 md:gap-8">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-(--color-light3-text) hover-anim transition-colors duration-200"
                style={{ "--hover-color": "var(--color-bg-primary)" }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-(--color-divider)">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-(--color-light3-text) text-center sm:text-left">
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </p>
            <p className="text-sm text-(--color-light3-text)">
              {t("footer.projectNumber", { number: projectNumber })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
