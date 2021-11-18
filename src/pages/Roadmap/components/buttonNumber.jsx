import React from 'react';
import { ChevronUpIcon} from "@chakra-ui/icons";

import '../styles/buttonNumber.css';


const ButtonNumber = ({number}) => {
    return (
        <>
            <div className="button-number">
                <ChevronUpIcon w={5} h={5} color="#4661E6" marginLeft="0.5rem"/>
                <h3>{number}</h3>
            </div>
        </>
    )
}

export default ButtonNumber;