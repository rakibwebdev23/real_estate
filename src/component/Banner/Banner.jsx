import img from "../../assets/image/bannerImg.png";
import Container from "../shared/Container";

const Banner = () => {
    return (
        <div
            className="w-full bg-cover bg-center bg-no-repeat h-[873px] relative"
            style={{
                backgroundImage: `url(${img})`,
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative z-10 flex items-center h-full">
                <Container>
                    <div>
                        <h1 className="font-[400] text-[80px] text-white leading-[114px]">Turning Your Real Estate <br /> Dreams into Reality</h1>
                        <p className="text-white font-[400] text-[20px] pt-6">Forget clunky application forms. We offer a modern, user-friendly platform <br /> that makes applying for a job a breeze.</p>
                        <div className="max-w-xl p-1 rounded-[16px] mt-12 shadow-sm flex items-center bg-white">
                            <input
                                type="text"
                                placeholder="Search your dream real estate"
                                className="flex-grow px-4 py-3 rounded-l-full focus:outline-none"
                            />
                            <button className="bg-green-900 hover:bg-green-800 text-white px-5 py-2 rounded-[16px] mr-2 transition-all duration-200">
                                Search for booking
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Banner;
