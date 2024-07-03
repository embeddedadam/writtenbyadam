"use client";

import Head from "next/head";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { GiRobotGrab } from "react-icons/gi";
import { FaCodeBranch } from "react-icons/fa6";
import { MdFoundation } from "react-icons/md";
import { VscDebugContinue } from "react-icons/vsc";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import ApatorLogo from "../public/apator.svg";
import CarrierLogo from "../public/carrier.svg";
import VolvoLogo from "../public/volvo.svg";
import BMWLogo from "../public/bmw.svg";
import Image from "next/image";

const createVariants = (side) => ({
  hidden: { opacity: 0, x: side === "left" ? -200 : 200 },
  visible: { opacity: 1, x: 0 },
});

const CustomizedTimeline = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div>
      <Head>
        <title>Adam Gałecki - Professional Timeline</title>
        <meta
          name="description"
          content="Explore the professional journey of Adam Gałecki, a software engineer specializing in robotics, generative AI, and embedded systems. Learn about his work experience, key milestones, and future aspirations."
        />
        <meta
          name="keywords"
          content="Adam Gałecki, professional timeline, software engineer, robotics, generative AI, embedded systems, Apator, Carrier, Volvo, BMW, Braincast"
        />
        <meta name="author" content="Adam Gałecki" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Adam Gałecki - Professional Timeline"
        />
        <meta
          property="og:description"
          content="Explore the professional journey of Adam Gałecki, a software engineer specializing in robotics, generative AI, and embedded systems. Learn about his work experience, key milestones, and future aspirations."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0", color: "text.primary" }}
            align="right"
            variant="body2"
          >
            <motion.div
              initial="hidden"
              animate={controls}
              variants={createVariants("right")}
              transition={{ duration: 0.5 }}
            >
              Jan 2020
            </motion.div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "black" }} />
            <TimelineDot sx={{ bgcolor: "black" }}>
              <motion.div
                initial="hidden"
                animate={controls}
                variants={createVariants("left")}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <GiRobotGrab color="white" />
              </motion.div>
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "black" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={createVariants("left")}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h6" component="span" color="text.primary">
                Graduated in Robotics
              </Typography>
              <Typography color="text.secondary">
                Graduated with a specialization in Robotics and Mechatronics.
              </Typography>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0", color: "text.primary" }}
            variant="body2"
          >
            <motion.div
              initial="hidden"
              animate={controls}
              variants={createVariants("left")}
              transition={{ duration: 0.5 }}
            >
              September 2019 - Present
            </motion.div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "black" }} />
            <TimelineDot sx={{ bgcolor: "black" }}>
              <motion.div
                initial="hidden"
                animate={controls}
                variants={createVariants("right")}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <FaCodeBranch color="white" />
              </motion.div>
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "black" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={createVariants("right")}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h6" component="span" color="text.primary">
                Software Engineering Work
              </Typography>
              <Typography color="text.secondary">
                Worked at Apator Telemetria, Carrier, Volvo, and BMW,
                contributing to various software and embedded systems projects.
              </Typography>
              <div className="flex flex-wrap justify-around items-center mt-2">
                <Image
                  src={ApatorLogo}
                  alt="Apator"
                  className="h-14 w-auto"
                  style={{ marginBottom: "-0.5em" }}
                />
                <Image src={CarrierLogo} alt="Carrier" className="h-6 w-auto" />
                <Image src={VolvoLogo} alt="Volvo" className="h-6 w-auto" />
                <Image src={BMWLogo} alt="BMW" className="h-6 w-auto" />
              </div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0", color: "text.primary" }}
            variant="body2"
          >
            <motion.div
              initial="hidden"
              animate={controls}
              variants={createVariants("right")}
              transition={{ duration: 0.5 }}
            >
              Dec 2023 - Present
            </motion.div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "black" }} />
            <TimelineDot sx={{ bgcolor: "white", border: "2px solid black" }}>
              <motion.div
                initial="hidden"
                animate={controls}
                variants={createVariants("left")}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <MdFoundation color="black" />
              </motion.div>
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "black" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={createVariants("left")}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h6" component="span" color="text.primary">
                Founding Braincast
              </Typography>
              <Typography color="text.secondary">
                Founded Braincast, leveraging generative AI to enhance the
                learning experience through duolingo-like learning paths.
              </Typography>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "black" }} />
            <TimelineDot sx={{ bgcolor: "black" }}>
              <motion.div
                initial="hidden"
                animate={controls}
                variants={createVariants("left")}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <VscDebugContinue color="white" />
              </motion.div>
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "black" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={createVariants("left")}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h6" component="span" color="text.primary">
                Future challenges
              </Typography>
              <Typography color="text.secondary">To be continued.</Typography>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default CustomizedTimeline;
