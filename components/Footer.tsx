import Image from 'next/image';
import react from "react";
import { motion, useAnimation } from 'framer-motion';

function Footer() {
    return (
        <div>
            <div>
                <p>yo</p>
            </div>
            <Image src="/images/p307-asset.svg" alt="P307 Brand Asset" layout="fill" objectFit="cover" />
        </div>
    )
}