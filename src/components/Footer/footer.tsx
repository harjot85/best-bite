import data from "../../data/data.json";
import Logo from "../../assets/images/logo.png";

export const Footer = () => {
  const { phoneNumber, address } = data.business;
  const { city, country, province, street } = address;
  return (
    <footer id="contact" className="bg-white dark:bg-gray-900 pt-6">
      <div className="mx-auto w-full max-w-screen-xl p-6 lg:p-0 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <span className="self-center whitespace-nowrap">
                <img src={Logo} className="h-20 lg:h-28" alt="" />
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Hours
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <div>Monday - Saturday: 04:00 PM - 10:00 PM</div>
                </li>
                <li>
                  <div>Sunday: Closed</div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Menu
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <a href="#" className="hover:underline ">
                    Pizza
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Side Orders
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <div>{street}</div>
                  {city}, {province}, {country}
                </li>
                <li>
                  <span>Phone: </span>
                  <a className="hover:underline" href={`tel:${phoneNumber}`}>
                    {phoneNumber}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Ambition Technologies Inc.
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              Connect with us on Facebook
              <span className="sr-only">Facebook page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
