import FaqsSection from "@/components/FaqsSection";
import { socialLinks } from "@/constants";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "about - Fikrad Tech",
};
const page = () => {
  return (
    <>
      <section className="max-width section-padding">
        <div className="box text-center flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded bg-primary flex items-center justify-center flex-shrink-0 mb-5">
            <Image src={"/icons/stars.svg"} alt="icon" width={35} height={35} />
          </div>
          <h2 className="text-grey-700">I'd Love to hear from you</h2>
          <p className="text-grey-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            mollitia.
          </p>
        </div>
      </section>

      <section className="max-width section-padding flex max-tablet:flex-col gap-16">
        <div className="tablet:max-w-md w-full">
          <div className="space-y-4">
            <div className="box !p-6">
              <p className="text-grey-600 mb-2">You Can Email me here</p>
              <h6 className="text-grey-700 flex items-center gap-2">
                <span>
                  <Mail size={18} />
                </span>
                <span>abubakrwindowz@gmail.com</span>
              </h6>
            </div>
            <div className="box !p-6">
              <p className="text-grey-600 mb-2">Give Me a Call on</p>
              <h6 className="text-grey-700 flex items-center gap-2">
                <span>
                  <Phone size={18} />
                </span>
                <span>+252 611602428</span>
              </h6>{" "}
            </div>
            <div className="box !p-6">
              <p className="text-grey-600 mb-2">location</p>
              <h6 className="text-grey-700 flex items-center gap-2">
                <span>
                  <MapPin size={18} />
                </span>
                <span>Mogadishu - Banadir</span>
              </h6>{" "}
            </div>
          </div>
          <h6 className="mt-10 mb-3 text-grey-700 max-tablet:mx-auto">
            Our Social Media Profiles
          </h6>
          <div className="flex gap-3 box !p-6 w-max max-tablet:mx-auto">
            {socialLinks.map((link, index) => (
              <a
                href={link.url}
                target="_blank"
                key={index}
                className="w-10 h-10 bg-primary text-peach flex items-center justify-center rounded"
              >
                <link.icon strokeWidth={0} fill="currentColor" />
              </a>
            ))}
          </div>
        </div>
        <div className="box w-full">
          <form className="space-y-5">
            <div className="flex gap-5 max-tablet:flex-col">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="flex gap-5 max-tablet:flex-col">
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone" />
            </div>
            <textarea
              placeholder="Message"
              className="min-h-[200px]"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </section>
      <FaqsSection />
    </>
  );
};

export default page;
