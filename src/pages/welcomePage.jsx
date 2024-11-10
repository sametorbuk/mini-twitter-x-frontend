import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function WelcomePage() {
  const footerTitles = [
    "About",
    "Help Center",
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy",
    "Ads info",
    "Blog",
    "Status",
    "Carrres",
    "Brand Resources",
    "Advertsing",
    "Marketing",
    "Twitter for Business",
    "Developers",
    "Directory",
    "Settings",
    "© 2021 Twitter, Inc.",
  ];

  const history = useHistory();
  return (
    <>
      <div className="flex flex-col">
        <div className="flex">
          <div>
            <img
              className="h-[97vh] w-[60vw]"
              src="/images/welcomePage/back-twitter 1.png"
              alt=""
            />
          </div>
          <div className=" flex flex-col justify-center gap-[1.6rem] p-[2rem] items-start">
            <div>
              <img
                className="m-[0rem]"
                src="/images/welcomePage/twitter-logo-4 1.png"
                alt=""
              />
            </div>

            <h1 className="font-bold text-5xl">Happening Now</h1>
            <h1 className="font-bold text-3xl">Join Twitter today</h1>
            <div className="flex flex-col gap-[1rem]">
              <button className="flex justify-center items-center btn">
                <img src="/images/welcomePage/google-icon 1.png" alt="" />
                Sign up with google
              </button>
              <button className="flex justify-center items-center btn ">
                <img src="/images/welcomePage/logo-apple 1.png" alt="" />
                Sign up with apple
              </button>
              <button className="flex justify-center btn py-[0.7rem]">
                Sign up with phone or email
              </button>
            </div>

            <div className="flex flex-col gap-[0.2rem]">
              <div className="flex gap-[0.2rem]">
                <p>By singing up you agree to the </p>
                <p className="text-[#1E97E1] cursor-pointer">
                  Terms of Service
                </p>
                <p>and</p>
              </div>

              <div className="flex gap-[0.2rem] ">
                <p className="text-[#1E97E1] cursor-pointer">Privacy Policy</p>
                <p>,</p>
                <p>including</p>
                <p className="text-[#1E97E1] cursor-pointer">Cookie use</p>
              </div>

              <div className="flex mt-[0.5rem] gap-[0.4rem]">
                <p>Already have an account ?</p>
                <button
                  onClick={() => history.push("/login")}
                  className="text-[#1E97E1] cursor-pointer"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-around items-center justify-center">
          {footerTitles.map((title, ind) => {
            return (
              <button
                className="text-gray-500 font-bold text-[0.7rem]"
                key={ind}
              >
                {title}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
