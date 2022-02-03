import React from 'react';
import { motion } from 'framer-motion';

const World = () => {

    return (

        <>
            <motion.circle 
                class="cls-4"
                animate={{ y: ["0px","30px"] }}
                transition={{ type: 'spring', yoyo:"10" }}cx="233.41"
                cy="151.32"
                r="151.32" />
            
                
            <motion.path 
            animate={{ y: ["0px","30px"] }}
            transition={{ type: 'spring', yoyo:"10" }}

            class="cls-8" d="M248.12,269a151.41,151.41,0,0,1-145-194.66,151.34,151.34,0,1,0,275.3,120.31A151.23,151.23,0,0,1,248.12,269Z" />
        </>


    );

}

export default World;