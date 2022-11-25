import { ExclamationCircleFill } from "@styled-icons/bootstrap/ExclamationCircleFill";

export const ErrorFallback = () => {
  /*   const navigate = useNavigate(); */
  return (
    <>
      <div className="app-container">
        <div className="app-body-content">
          <div
            className="w-full flex justify-center h-screen py-20 items-center"
            role="alert"
          >
            <div className="text-center items-center flex flex-col gap-10 text-[#194e91] ">
              <ExclamationCircleFill className="w-40 h-40 text-[#194e91]" />
              <h2 className="md:text-9xl text-6xl font-extrabold">Hay aksi</h2>
              <p className="md:text-3xl text-lg font-semibold">
                Bir şeyler ters gitti...
              </p>
              <div className="flex gap-2 items-center">
                <p className="md:text-2xl text-base">
                  Kaldığınız yerden devam etmek için
                </p>
                <button
                  /*  onClick={() => {
                    navigate(-1);
                  }} */
                  className="text-[#63bab0] italic md:text-2xl text-base underline"
                >
                  tıklayınız.
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
