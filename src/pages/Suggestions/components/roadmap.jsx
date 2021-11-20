import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react"
import PointListC from "../../Roadmap/components/pointListC";
import '../styles/roadmap.css';

const Roadmap = () => {
    
    return (
        <>
            <div className="roadmap-container">
                <div className="roadmap-top">
                    <h1>Roadmap</h1>
                    <Link to="/roadmap">
                        <p className="link">View</p>
                    </Link>
                </div>
                <List spacing={3} className="list">
                    <ListItem>
                        <PointListC title="Planned" color="#F49F85"/>
                    </ListItem>

                    <ListItem>
                    <PointListC title="In-Progress" color="#AD1FEA"/>
                    </ListItem>

                    <ListItem>
                    <PointListC title="Live" color="#62BCFA"/>
                    </ListItem>
                </List>
            </div>
        </>
    )
}

export default Roadmap;