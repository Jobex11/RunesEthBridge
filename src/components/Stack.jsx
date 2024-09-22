import Sidebar from "./Sidebar";

function Stack() {
    return (
        <div className="">
            <div className="lg:px-16 lg:py-7 py-4 md:px-8 px-4 w-full flex justify-between md:gap-10 gap-6 md:flex-row flex-col">
                <Sidebar />
                <div className="">
                    <div className="2xl:w-[1021px] max-w-full flex-col justify-start items-start xl:gap-6 md:gap-5 gap-4 inline-flex">
                        <div className="justify-start items-center xl:gap-6 md:gap-5 gap-4 flex flex-wrap">
                            <div className="xl:p-6 md:p-[18px] xs:p-3 p-2 bg-[#fdfdfd] rounded-[10px] xl:w-[31%] w-[46%] order-1 border border-[#bcbcbc] justify-center items-center gap-2.5 flex md:order-1">
                                <div className="flex flex-col">
                                    <span className="text-black md:text-[16px] text-[12px] xl:text-[20px] font-medium font-inter capitalize leading-normal pb-3">Total stack</span>

                                    <span className="text-black md:text-[24px] text-[16px] xl:text-[32px] font-bold font-inter capitalize">19,262,198 RB </span>

                                    <span className="text-black md:text-[16px] text-[12px] xl:text-[20px] font-medium font-inter capitalize leading-normal">-168,775$</span>
                                </div>
                            </div>
                            <div className="xl:p-6 md:p-[18px] xs:p-3 p-2 bg-[#fdfdfd] rounded-[10px] xl:w-[31%] w-fit order-3 border border-[#bcbcbc] justify-center items-center gap-2.5 flex md:order-2">
                                <div className="flex flex-col">
                                    <span className="text-black md:text-[16px] text-[12px] xl:text-[20px] font-medium font-inter capitalize leading-normal pb-3">Total Rewards</span>

                                    <span className="text-black md:text-[24px] text-[16px] xl:text-[32px] font-bold font-inter capitalize">0 ETH RB </span>

                                    <span className="text-black md:text-[16px] text-[12px] xl:text-[20px] font-medium font-inter capitalize leading-normal">-$</span>
                                </div>
                            </div>
                            <div className="xl:p-6 md:p-[18px] xs:p-3 p-2 bg-[#fdfdfd] rounded-[10px] xl:w-[31%] w-fit order-4 border border-[#bcbcbc] justify-center items-center gap-2.5 flex md:order-3">
                                <div className="flex flex-col">
                                    <span className="text-black md:text-[16px] text-[12px] xl:text-[20px] font-medium font-inter capitalize leading-normal pb-3">Total Points</span>

                                    <span className="text-black md:text-[24px] text-[16px] xl:text-[32px] font-bold font-inter capitalize">15,775,654 </span>
                                    <span className="text-transparent md:text-[16px] text-[12px] xl:text-[20px] font-medium font-inter capitalize leading-normal">1</span>
                                </div>
                            </div>
                            <div className="xl:p-6 md:p-[18px] xs:p-3 p-2 bg-[#fdfdfd] rounded-[10px] xl:w-[31%] w-fit order- border border-[#bcbcbc] justify-center items-center gap-2.5 hidden md:flex md:order-4">
                                <div className="flex flex-col">
                                    <span className="text-black md:text-[16px] text-[12px] xl:text-[20px] font-medium font-inter capitalize leading-normal pb-3">Total stack</span>

                                    <span className="text-black md:text-[24px] text-[16px] xl:text-[32px] font-bold font-inter capitalize">19,262,198 RB </span>

                                    <span className="text-black md:text-[16px] text-[12px] xl:text-[20px] font-medium font-inter capitalize leading-normal">-168,775$</span>
                                </div>
                            </div>
                            <div className="xl:p-6 md:p-[18px] xs:p-3 p-2 bg-[#fdfdfd] rounded-[10px] xl:w-[31%] w-fit order-5 border border-[#bcbcbc] justify-center items-center gap-2.5 flex md:order-5">
                                <div className="flex flex-col">
                                    <span className="text-black md:text-[16px] text-[12px] xl:text-[20px] font-medium font-inter capitalize leading-normal pb-3">APY</span>

                                    <span className="text-black md:text-[24px] text-[16px] xl:text-[32px] font-bold font-inter capitalize">402.74% </span>

                                    <span className="text-black md:text-[16px] text-[12px] xl:text-[20px] font-medium font-inter capitalize leading-normal">-$</span>
                                </div>
                            </div>
                            <div className="xl:p-6 md:p-[18px] xs:p-3 p-2 bg-[#fdfdfd] rounded-[10px] xl:w-[31%] w-[46%] order-2 border border-[#bcbcbc] justify-center items-center gap-2.5 flex md:order-6 ">
                                <div className="flex flex-col">
                                    <span className="text-black md:text-[16px] text-[12px] xl:text-[20px] font-medium font-inter capitalize leading-normal pb-3">Current epoch</span>

                                    <span className="text-black md:text-[24px] text-[16px] xl:text-[32px] font-bold font-inter capitalize">15 </span>

                                    <span className="text-black md:text-[16px] text-[12px] xl:text-[20px] font-medium font-inter capitalize leading-normal">-reward 0.5 ETH</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-4 pt-8 md:pt-16 md:text-start text-center text-[#1f1f1f] text-2xl md:text-[30px] lg:text-[36px] xl:text-[40px] font-bold font-inter">Stake Earn Points & ETH</div>
                    <div className="flex p-10 flex-col gap-5 lg:gap-6 w-full max-w-full border-[1px] border-[#D9D9D9] rounded-[16px]">
                        <div className="w-full flex flex-col gap-5 items-center">
                            <div className="text-center text-[#1f1f1f] text-[24px] lg:text-[32px] font-bold font-inter">Next Epoch:</div>
                            <div className="flex lg:gap-5 gap-4">
                                <div className="h-[102px] flex-col justify-start items-center gap-[21px] inline-flex">
                                    <div className="w-[60px] h-16 p-[6.53px] bg-[#f4f4f4] rounded-[9.80px] flex-col justify-center items-center gap-[6.53px] flex">
                                        <div className="text-center text-[#1f1f1f] text-sm font-bold font-inter">1</div>
                                    </div>
                                    <div className="text-center text-[#1f1f1f] text-sm font-normal font-inter">Days</div>
                                </div>
                                <div className="h-[102px] flex-col justify-start items-center gap-[21px] inline-flex">
                                    <div className="w-[60px] h-16 p-[6.53px] bg-[#f4f4f4] rounded-[9.80px] flex-col justify-center items-center gap-[6.53px] flex">
                                        <div className="text-center text-[#1f1f1f] text-sm font-bold font-inter">23</div>
                                    </div>
                                    <div className="text-center text-[#1f1f1f] text-sm font-normal font-inter">Hours</div>
                                </div>
                                <div className="h-[102px] flex-col justify-start items-center gap-[21px] inline-flex">
                                    <div className="w-[60px] h-16 p-[6.53px] bg-[#f4f4f4] rounded-[9.80px] flex-col justify-center items-center gap-[6.53px] flex">
                                        <div className="text-center text-[#1f1f1f] text-sm font-bold font-inter">48</div>
                                    </div>
                                    <div className="text-center text-[#1f1f1f] text-sm font-normal font-inter">Minutes</div>
                                </div>
                                <div className="h-[102px] flex-col justify-start items-center gap-[21px] inline-flex">
                                    <div className="w-[60px] h-16 p-[6.53px] bg-[#f4f4f4] rounded-[9.80px] flex-col justify-center items-center gap-[6.53px] flex">
                                        <div className="text-center text-[#1f1f1f] text-sm font-bold font-inter">36</div>
                                    </div>
                                    <div className="text-center text-[#1f1f1f] text-sm font-normal font-inter">Seconds</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-4 lg:gap-8">
                            <div className="flex flex-col w-full gap-4">
                                <div className="flex w-full justify-between items-center">
                                    <div className="text-[#5a585a] text-sm md:text-[17px] lg:text-[20px] font-normal font-inter leading-relaxed">Amount</div>
                                    <div className="text-[#5a585a] text-sm md:text-[17px] lg:text-[20px] font-normal font-inter leading-relaxed">
                                        <span className="">Balance </span>
                                        <span className="font-bold">ORB</span>
                                    </div>
                                </div>
                                <div className="h-[52px] p-4 bg-white rounded-xl border border-[#bcbcbc] justify-between items-center inline-flex">
                                    <input className="justify-start items-center gap-2 flex text-black placeholder:pl-2 placeholder:text-[#bcbcbc] text-sm font-medium font-inter leading-tight w-full border-none outline-none" type="text" placeholder="Enter\" />
                                    <div className="justify-end items-center gap-2 flex w-full text-[#bcbcbc] text-sm font-medium font-inter leading-tight">
                                        MAX
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full xs:flex-row flex-col-reverse">
                                <div className={`w-full text-center cursor-pointer transition-all duration-200 text-[#232323]" text-sm font-semibold font-inter leading-tight rounded-[60px] py-[14px] px-5 flex justify-center items-center `}>Cancel</div>
                                <div className={`w-full text-center cursor-pointer transition-all duration-200 bg-[#232323] text-white hover:text-[#232323] hover:bg-white text-sm font-medium font-inter leading-tight rounded-[60px] py-[14px] px-5 flex justify-center items-center `}>Approve</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Stack;