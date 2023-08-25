import Image from 'next/image';
import react from "react";
import { motion, useAnimation } from 'framer-motion';

function Footer() {
    return (
        <div className='flex flex-col justify-between items-center'>
            <div>
                <p>© 2023 East Park Holdings Group</p>
                <p>info@eastpark.xyz</p>
            </div>
            <Image src="/images/p307-asset.svg" alt="P307 Brand Asset" layout="fill" objectFit="cover" />
        </div>
    )
}

export default Footer;
