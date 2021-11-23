import React from "react";
import { Box } from "@chakra-ui/react";
import '../../styles/profileMobile.css';


const ProfileMobile = () => {

    const icon = () => (
        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="3" fill="white" />
            <rect y="7" width="20" height="3" fill="white" />
            <rect y="14" width="20" height="3" fill="white" />
        </svg>
    )

    return (
        <>
            <div className="profile-CM">
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    w="100%"
                    h="100%"
                    borderRadius="md"
                    bgGradient="linear(to-r, #28A7ED, #A337F6, #E84D70)">
                    <div className="profile-CM-content">
                        <h1>Frontend Mentor</h1>
                        <p>Feedback details</p>
                    </div>
                    <button className="buttonMenuMobile">
                        {icon()}
                    </button>
                </Box>
            </div>
        </>
    )
}

export default ProfileMobile;