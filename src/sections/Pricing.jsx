import React, { useState } from "react";
import { Element } from "react-scroll";
import clsx from "clsx";
import { plans } from "../constants/index";
import CountUp from "react-countup";
import Button from "../components/Button";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);
  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-x-960 pricing-head_before relative mx-auto pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16 ">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              Flexible pricing
            </h3>

            {/* Pricing BUTTONS */}
            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] msx-md:w-[310px]">
              <button
                className={clsx("pricing-head_btn", monthly && "text-p4")}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={clsx("pricing-head_btn", !monthly && "text-p4")}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>
              <div
                className={clsx(
                  "pricing-head_btn_before before:h-100 g4 rounded-14 absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500 ]",
                  !monthly && "translate-x-full"
                )}
              />
              <div className="pricing-bg">
                <img
                  src="/images/bg-pricing.png"
                  width={940}
                  height={340}
                  className="absolute opacity-5 mix-blend-soft-light h-auto"
                  alt="bg"
                />
              </div>
            </div>

            {/* Pricing PLANS */}
            <div className="scroll-hide relative z-2 mt-16 flex items-start max-xl:overflow-auto max-xl:pt-6 max-xl:gap-5">
              {plans.map((plan, i) => (
                <div
                  key={plan.id}
                  className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
                >
                  {i === 1 && (
                    <div className="g4 absolute h-330 max-xl:h-[365px] left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl " />
                  )}

                  {/* Pricing LOGO */}
                  <div
                    className={clsx(
                      "absolute left-0 right-0 z-2 flex items-center justify-center",
                      i === 1 ? "-top-12" : "-top-6 xl:-top-11"
                    )}
                  >
                    <img
                      src={plan.logo}
                      alt={plan.title}
                      className={clsx(
                        "object-contain drop-shadow-2xl",
                        i === 1 ? "size-[120px]" : "size-[88px]"
                      )}
                    />
                  </div>

                  {/* Pricing TITLE */}
                  <div
                    className={clsx(
                      "relative flex flex-col items-center",
                      i === 1 ? "pt-16" : "pt-10"
                    )}
                  >
                    <div
                      className={clsx(
                        "small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
                        i === 1 ? "border-p3 text-p3" : "border-p1 text-p1",
                        i === 2 && "border-p4 text-p4"
                      )}
                    >
                      {plan.title}
                    </div>
                  </div>

                  {/* PRICE */}

                  <div className="relative z-2 flex items-center justify-center">
                    <div
                      className={clsx(
                        "h-num flex items-center",
                        i === 1 ? "text-p3" : "text-p4"
                      )}
                    >
                      ${" "}
                      <CountUp
                        start={plan.priceMonthly}
                        end={monthly ? plan.priceMonthly : plan.priceYearly}
                        duration={0.4}
                        useEasing={false}
                        preserveValue
                      />
                      <div className="small-1 relative top-3 ml-1 uppercase">
                        / mo
                      </div>
                    </div>
                  </div>

                  {/* Pricing CAPTION */}
                  <div
                    className={clsx(
                      "body-1 relative z-2 mb-10 w-full border-b-s2 pb-7 text-center text-p4",
                      i === 1 && "border-b"
                    )}
                  >
                    {plan.caption}
                  </div>

                  {/* Pricing FEATURES */}
                  <ul className="mx-auto space-y-4 xl:px-7">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="relative flex items-center gap-5"
                    >
                      <img
                        src={"/images/key-features.png"}
                        alt="check"
                        className="size-8 object-contain"
                      />
                      <p className="flex-1">{feature}</p>
                    </li>
                  ))}
                </ul>

                {/* Pricing ACTION BTN */}
                <div className="mt-10 flex w-full justify-center">
                  <Button icon={plan.icon}>Get Started</Button>
                </div>

                {i === 1 && (
                  <p className="small-compact mt-9 text-center text-p3 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
                    Limited time offer
                  </p>
                )}

                </div>
              ))}
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
