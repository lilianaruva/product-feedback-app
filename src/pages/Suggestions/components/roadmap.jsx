import React from "react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { Icon, createIcon } from "@chakra-ui/react"
import '../styles/roadmap.css';

const Roadmap = () => {
    return (
        <>
            <div className="roadmap-container">
                <div className="roadmap-top">
                    <h1>Roadmap</h1>
                    <p className="link">View</p>
                </div>
                <List spacing={3} className="list">
                    <ListItem>
                        <Icon viewBox="0 0 300 300" color="#F49F85" marginRight="0.5rem">
                            <path
                                fill="currentColor"
                                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                            />
                        </Icon>
                        Planned
                    </ListItem>

                    <ListItem>
                        <Icon viewBox="0 0 300 300" color="#AD1FEA"  marginRight="0.5rem">
                            <path
                                fill="currentColor"
                                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                            />
                        </Icon>
                        In-Progress
                    </ListItem>

                    <ListItem>
                        <Icon viewBox="0 0 300 300" color="#62BCFA"  marginRight="0.5rem">
                            <path
                                fill="currentColor"
                                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                            />
                        </Icon>
                        Live
                    </ListItem>
                </List>
            </div>
        </>
    )
}

export default Roadmap;