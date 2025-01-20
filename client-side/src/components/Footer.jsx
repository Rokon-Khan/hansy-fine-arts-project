import websticker_1 from "../assets/website-sticker-1.png";
import websticker_2 from "../assets/website-sticker-2.png";
import websticker_3 from "../assets/website-sticker-3.png";
import websticker_4 from "../assets/website-sticker-4.png";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-[#b09f7b] text-white p-10 mt-10 max-w-7xl mx-auto">
        <div className="lg:flex gap-5 flex-ol justify-center mb-5">
          <img src={websticker_1} alt="" className="w-[100px] h-[100px]" />
          <img src={websticker_2} alt="" className="w-[100px] h-[100px]" />
          <img src={websticker_3} alt="" className="w-[100px] h-[100px]" />
          <img src={websticker_4} alt="" className="w-[100px] h-[100px]" />
        </div>
        <div className="footer">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <h6 className="footer-title">Subscribe Now</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
