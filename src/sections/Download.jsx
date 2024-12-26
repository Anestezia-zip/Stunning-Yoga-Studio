import { FaYoutube } from "react-icons/fa";
import { Element } from "react-scroll";

const Download = () => {
  return (
    <section>
      <Element
        name="streams"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 max-md:flex-100 max-md:container">
              <div className="mb-10">
                <img
                  src="/images/logo-yoga.png"
                  className="rounded-full"
                  width={160}
                  height={55}
                  alt="logo"
                />
              </div>

              <div className="flex absolute top-10 right-20 max-md:right-[40%]">
                <div className="download_tech-link download_tech-link_last-before download_tech-link_last-after">
                    <a
                        href="https://youtube.com"
                        className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500"
                    >
                        <span className="download_tech-icon">
                            <FaYoutube className="size-8" />
                        </span>
                    </a>
                </div>
              </div>

              <p className="body-1 mb-10 max-w-md">
                Start your yoga journey with us — your first two classes are
                completely free! Explore the benefits of yoga at your own place,
                wherever you feel most comfortable.
              </p>
            </div>

            <div className="mb-10 max-md:hidden max-[827px]:relative max-[827px]:-top-6">
              <div className="download_preview-before download_preview-after rounded-40 relative max-w-[700px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  <img
                    src="/images/free-yoga.jpg"
                    width={655}
                    height={655}
                    alt="screen"
                    className="rounded-xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Download;
