import React from "react";
import { Box } from "@chakra-ui/react";
import '../styles/profile.css';

const Profile = () => {
    return (
        <>
            <Box
                display="flex"
                minWidth="223px"
                maxWidth="255px"
                h="100%"
                borderRadius="md"
                bgGradient="linear(to-r, #28A7ED, #A337F6, #E84D70)">
                <div className="profile-container">
                    <h1>Frontend Mentor</h1>
                    <p>Feedback details</p>
                </div>
            </Box>
        </>
    )
}

export default Profile;