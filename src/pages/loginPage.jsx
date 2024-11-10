export default function LoginPage() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex items-left flex-col w-[25%] mt-[5rem] gap-[1rem]">
          <img
            className="w-[2rem]"
            src="/images/welcomePage/twitter-logo-4 1.png"
            alt=""
          />
          <input
            className="input"
            type="text"
            placeholder="Phone number , email address"
          />
          <input className="input" type="text" placeholder="Password" />
        </div>
      </div>
    </>
  );
}
