export default function Footer() {
  return (
    <footer className="mt-60 bg-[#232F3E] text-sm text-gray-300">
      {/* Back to top */}
      <div className="cursor-pointer bg-[#37475A] py-3 text-center hover:bg-[#485769]">
        <span
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-medium text-white"
        >
          Back to top
        </span>
      </div>

      {/* Main footer links */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
        <div>
          <h3 className="mb-3 font-bold text-white">Get to Know Us</h3>
          <ul className="space-y-2">
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-bold text-white">Make Money with Us</h3>
          <ul className="space-y-2">
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Sell apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub</li>
            <li className="font-semibold">{'>'} See More Make Money with Us</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-bold text-white">Amazon Payment Products</h3>
          <ul className="space-y-2">
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-bold text-white">Let Us Help You</h3>
          <ul className="space-y-2">
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Returns & Replacements</li>
            <li>Manage Your Content and Devices</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-600 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 md:flex-row">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
            className="w-24"
          />

          <div className="flex gap-2 text-xs">
            <button className="rounded border border-gray-400 px-3 py-1">
              🌐 English
            </button>
            <button className="rounded border border-gray-400 px-3 py-1">
              $ USD - U.S. Dollar
            </button>
            <button className="rounded border border-gray-400 px-3 py-1">
              🇺🇸 United States
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
