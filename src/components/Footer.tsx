const Footer = () => {
  return (
    <div className="bg-white py-16 h-[300px] flex justify-center z-[999]">
      <div className="w-full max-w-[1360px] mx-auto flex justify-between gap-16 text-gray-500">
        <p className="text-5xl max-w-[700px]">
          Thanks for visiting! I am open to work so feel free to contact
        </p>
        <div className="flex gap-12 text-xl">
          <div>
            <h2 className="uppercase">Navigation</h2>
            <div className="text-gray-800 mt-4 flex flex-col gap-4">
              <h2>Self</h2>
              <h2>Work</h2>
            </div>
          </div>

          <div>
            <h2 className="uppercase">Get in touch</h2>
            <div className="text-gray-800 mt-4 flex flex-col gap-4">
              <h2>Linkedin</h2>
              <h2>Email</h2>
            </div>
          </div>

          <div>
            <h2 className="uppercase">socials</h2>
            <div className="text-gray-800 mt-4 flex flex-col gap-4">
              <h2>Twitter</h2>
              <h2>Instagram</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
