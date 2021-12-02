import React, { useState } from "react";
import NavRoadmap from "./components/navRoadmap";
import CardRoadmap from "./components/cardRoadmap";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import './styles/roadmap.css';
import { v4 as uuidv4 } from "uuid";

import data from '../../data';

const Roadmap = () => {
    const [feedbacks, setFeedbacks] = useState(data);

    const planned = feedbacks.filter(status => status.status === 'Planned');
    const live = feedbacks.filter(status => status.status === 'Live');
    const inprogress = feedbacks.filter(status => status.status === 'In-Progress');

    return (
        <>
            <div className="roadmap">
                <div className="roadmap-content">
                    <NavRoadmap />
                    {
                        window.screen.width >= 376 ?
                            <div className="roadmap-columns">
                                <div className="columncard-container">
                                    <h1 className="title">Planned ({planned.length})</h1>
                                    <h2 className="subtitle">Ideas prioritized for research</h2>
                                    {
                                        planned?.map(f => <CardRoadmap key={uuidv4()} title={f.title} description={f.detail} category={f.category} status={f.status} color="#F49F85" comment={f.comment.length} vote={f.vote.length} />)
                                    }
                                </div>
                                <div className="columncard-container CC-middle">
                                    <h1 className="title">Live ({live.length})</h1>
                                    <h2 className="subtitle">Released features</h2>
                                    {
                                        live?.map(f => <CardRoadmap key={uuidv4()} title={f.title} description={f.detail} category={f.category} status={f.status} color="#62BCFA" comment={f.comment.length} vote={f.vote.length} />)
                                    }
                                </div>
                                <div className="columncard-container">
                                    <h1 className="title">In Progress ({inprogress.length})</h1>
                                    <h2 className="subtitle">Currently being developed</h2>
                                    {
                                        inprogress?.map(f => <CardRoadmap key={uuidv4()} title={f.title} description={f.detail} category={f.category} status={f.status} color="#AD1FEA" comment={f.comment.length} vote={f.vote.length} />)
                                    }
                                </div>
                            </div>
                            :
                            <Tabs marginTop= "1rem">
                                <TabList>
                                    <Tab>Planned</Tab>
                                    <Tab>Live</Tab>
                                    <Tab>In Progress</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <div className="columncard-c-mobile">
                                            <h1 className="title">Planned ({planned.length})</h1>
                                            <h2 className="subtitle">Ideas prioritized for research</h2>
                                            {
                                                planned?.map(f => <CardRoadmap key={uuidv4()} title={f.title} description={f.detail} category={f.category} status={f.status} color="#F49F85" comment={f.comment.length} vote={f.vote.length} />)
                                            }
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="columncard-c-mobile">
                                            <h1 className="title">Live ({live.length})</h1>
                                            <h2 className="subtitle">Released features</h2>
                                            {
                                                live?.map(f => <CardRoadmap key={uuidv4()} title={f.title} description={f.detail} category={f.category} status={f.status} color="#62BCFA" comment={f.comment.length} vote={f.vote.length} />)
                                            }
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="columncard-c-mobile">
                                            <h1 className="title">In Progress ({inprogress.length})</h1>
                                            <h2 className="subtitle">Currently being developed</h2>
                                            {
                                                inprogress?.map(f => <CardRoadmap key={uuidv4()} title={f.title} description={f.detail} category={f.category} status={f.status} color="#AD1FEA" comment={f.comment.length} vote={f.vote.length} />)
                                            }
                                        </div>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                    }
                </div>
            </div>
        </>
    )
}

export default Roadmap;