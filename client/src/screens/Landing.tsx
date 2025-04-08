import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Landing = () => {
    const navigate = useNavigate();
    return (
        <div className="relative flex justify-center min-h-screen bg-cover bg-center" // Added relative and background styles
             style={{ backgroundImage: `url('/chess.webp')` }}
        >
            <div className="pt-8 max-w-screen-lg z-10"> {/* Added z-10 to bring content forward */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex justify-center">
                        {/* You might not need a separate <img> tag anymore */}
                        {/* <img src={"/chess.webp"} className="max-w-96" /> */}
                    </div>
                    <div className="pt-16">
                        <div className="flex justify-center">
                            <h1 className="text-4xl font-bold text-white">Play chess with your friends</h1>
                        </div>

                        <div className="mt-8 flex justify-center">
                            <Button onClick={() => navigate("/game")}>
                                Play Online
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;