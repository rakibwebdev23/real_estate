import Container from "../shared/Container";
import logo0 from "../../assets/image/focal.png";
import logo2 from "../../assets/image/command.png";
import logo3 from "../../assets/image/global.png";
import logo4 from "../../assets/image/alt.png";
import logo5 from "../../assets/image/luminous.png";

const Brand = () => {
    return (
        <div className="-mt-6 bg-[#DBFB1E] h-[186px] w-full rounded-t-[24px] relative z-50 flex items-center">
            <Container>
                <div className="flex items-center justify-between gap-6">
                    <h1 className="font-[500] text-[20px] text-[#0A0915] whitespace-nowrap">
                        Trusted by leading company
                    </h1>

                    <img src={logo0} alt="Logo 0" className="w-[159px] h-[64px] object-contain" />
                    <img src={logo2} alt="Logo 2" className="w-[159px] h-[64px] object-contain" />
                    <img src={logo3} alt="Logo 3" className="w-[159px] h-[64px] object-contain" />
                    <img src={logo4} alt="Logo 4" className="w-[159px] h-[64px] object-contain" />
                    <img src={logo5} alt="Logo 5" className="w-[159px] h-[64px] object-contain" />
                </div>
            </Container>
        </div>
    );
};

export default Brand;
