import React from 'react';
import { motion } from "motion/react"
const Motion = () => {
    
const box = {
    width: 100,
    height: 100,
    backgroundColor: "#9911ff",
    borderRadius: 5,
}
    return (
        <div className='text-center'>
            <h1>this is motion page</h1>
            <motion.div 
            whileHover={{scale:1.2}}
            whileTap={{scale:0.8}}
            style={box}

            > he </motion.div>
        </div>
    );
};

export default Motion;