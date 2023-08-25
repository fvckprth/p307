import Image from 'next/image';
import react from "react";
import { motion, useAnimation } from 'framer-motion';

function Footer() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 5, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.2, duration: 0.9 }}
        >
        <div className='flex flex-row mt-6 justify-between items-start'>
            <div>
                <p className='text-xs md:text-sm text-[#5D5D5D] text-opacity-25 leading-tight tracking-tight'>
                    © 2023 East Park Holdings Group<br />
                    info@eastpark.xyz
                </p>
            </div>
            <img src="/images/p307-asset.svg" alt="P307 Logo" className="h-6 md:h-8 w-auto" /> {/* Adjust size as needed */}
        </div>
        </motion.div>
    )
}

export default Footer;
