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
        <div className='flex flex-row mt-6 justify-between items-end'>
            <div>
                <p className='text-xs md:text-sm text-[#E4E4E4] text-opacity-25 leading-tight tracking-tight'>
                    © 2023 <a href="https://www.eastpark.xyz" className='text-[#E4E4E4] hover:text-opacity-25 underline underline-offset-2 md:underline-offset-4	decoration-from-font'>East Park</a>{' '}Holdings Group<br />
                    <a href="mailto:info@eastpark.xyz" className='text-[#E4E4E4] hover:text-opacity-25 underline underline-offset-2 md:underline-offset-4	decoration-from-font'>info@eastpark.xyz</a>
                </p>
            </div>
            <img src="/images/p307-asset.svg" alt="P307 Logo" className="h-6 md:h-10 w-auto" /> {/* Adjust size as needed */}
        </div>
        </motion.div>
    )
}

export default Footer;
