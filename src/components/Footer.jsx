const Footer = () => {
  return (
    <footer className="w-full h-fit overflow-hidden">
      <div className="container mx-auto w-full h-full flex items-center justify-start bg-schema-light-footer p-4 dark:bg-schema-dark-footer rounded-2xl">
        <div className="flex flex-col items-start justify-start">
          <p className="text-lg font-semibold">
            Made with love by Christian Marín ❤️ &copy; 2023
          </p>
          <ul className="flex items-center justify-start gap-x-4">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
