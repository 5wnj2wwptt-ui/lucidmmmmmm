import { motion } from "motion/react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function ProfileCard() {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
      <div className="flex h-100 w-[70vw] md:w-[50vw] md:h-fit profile-card">
        <motion.div
          className="w-full items-center flex justify-center flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 cursor-pointer bg-white w-25 h-25 rounded-full profilepic hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] transition-shadow duration-300" />

          <span className="text-center w-full block regular text-2xl">LUCID</span>
          <span className="text-center w-full block mb-4 light text-md mt-2">
            Developer & Content Creator
          </span>

          <div className="flex space-x-4">
            <motion.div
              initial={{ opacity: 0, y: 10, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <a
                href="https://marmovr.com"
                data-tooltip-id="marmoTip"
                data-tooltip-content="Lead Developer @ Marmo"
              >
                <img
                  src="/MarmoHead.png"
                  className="w-10 hover:rotate-15 transition-transform duration-300 ease-out-cubic cursor-pointer drop-shadow-[1px_2px_3px_rgba(0,0,0,0.4)]"
                  alt="Marmo"
                />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <a
                href="https://tiktok.com/@mightbelucid"
                data-tooltip-id="socialTip"
                data-tooltip-content="Content Creator @ Another Axiom"
              >
                <img
                  src="/tiktok.webp"
                  className="w-10 hover:rotate-15 transition-transform duration-300 ease-out-cubic cursor-pointer drop-shadow-[1px_2px_3px_rgba(0,0,0,0.4)]"
                  alt="TikTok"
                />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <a
                href="https://youtube.com/@mightbelucid"
                data-tooltip-id="socialTip"
                data-tooltip-content="Content Creator @ Another Axiom"
              >
                <img
                  src="/yt.svg"
                  className="w-10 hover:rotate-15 transition-transform duration-300 ease-out-cubic cursor-pointer drop-shadow-[1px_2px_3px_rgba(0,0,0,0.4)]"
                  alt="YouTube"
                />
              </a>
            </motion.div>
          </div>

          <Tooltip
            id="marmoTip"
            float
            place="top"
            delayShow={120}
            offset={10}
            className="tooltip-glass"
          />
          <Tooltip
            id="socialTip"
            float
            place="top"
            delayShow={120}
            offset={10}
            className="tooltip-glass"
          />
        </motion.div>
      </div>
    </div>
  );
}
