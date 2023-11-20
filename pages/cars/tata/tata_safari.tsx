import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

import coding from "@Public/coding.jpg";

import Paragraph from "@Elements/Paragraph/Paragraph";
import Subtitle from "@Elements/Subtitle/Subtitle";

import FullPageBlogPostLayout from "@Layout/FullPageBlogPostLayout";
import HeaderImageFullBlogPost from "@UI/ImageCards/HeaderImageFullBlogPost";
import HeaderSection from "@SEO/Head";
import LastUpdateTags from "@UI/LastUpdate&Tags/LastUpdateTags";
import HeadingOne from "@Elements/Headings/HeadingOne";
import Scrollspy from "react-scrollspy";
import HeadingTwo from "@Elements/Headings/HeadingTwo";
import HeadingThree from "@Elements/Headings/HeadingThree";
import HeadingFour from "@Elements/Headings/HeadingFour";
import HeadingFive from "@Elements/Headings/HeadingFive";
import HeadingSix from "@Elements/Headings/HeadingSix";
import Link from "next/link";
import SyntaxHighlight from "@SyntaxHighlighter/SyntaxHighlight";
import Ccode from "@SyntaxHighlighter/Ccode";
import SandboxCode from "@Sandbox/SandboxCode";

import {
  LineShareButton,
  LineIcon,
  FacebookMessengerShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";
import Sharing from "@Components/SocialShare/Sharing";
import { blogPostsObj, blogPostURLS, DateMonthYearForBlogPost, SEO_OBJ } from "Essentials";
import { NextPageWithLayout } from "pages/_app";
import HighlightText from "@Components/SyntaxHighlighter/HighlightText";
import ScrollableTabs from "@Components/UI/Tabs/BasicTabs";
import BasicTable from "@Components/UI/Tables/BasicTable";
import BasicTable2 from "@Components/UI/Tables/BasicTable2";

import BlogPostImageCard from "@Components/UI/ImageCards/BlogPostImageCard";
import Image from "next/image";
import grillImage from "@TataImages/colored-grille.jpg";
import ledlight from "@TataImages/full-led-projector-head-lamp-27-23.jpg";
import fullLedProjectorImage from "@TataImages/full-led-projector-head-lamp-27-23.jpg";
import connectedLEDDRLs from "@TataImages/end-to-end-led-drl-27-23.jpg";
import signatureLedTailLamp from "@TataImages/signature-end-to-end-led-tailamp-27-23.jpg";
import alloyWheels from "@TataImages/alloy-wheels.jpg";
import singatureMascot from "@TataImages/safari-mascot-on-door-27-23.jpg";
import roofRails from "@TataImages/iconic-roof-rails-with-chrome-inserts-27-23.jpg";
import interiorTheme from "@TataImages/interior-theme-27-23.jpg";
import safariPersona from "@TataImages/new-wood-finish-dashboard-27-23.jpg";
import safariSteeringWheel from "@TataImages/steering-wheel-angle-27-23.jpg";
import safariSeats from "@TataImages/oyster-white-leatherette-seats.jpg";
import gncapImage from "@TataImages/tata-safari-pole-impact.jpg";
import tataOmegarc from "@TataImages/omegarc-27-23.jpg";
import tataAirBags from "@TataImages/7-airbags-27-23.jpg";
import tataesp from "@TataImages/esp-27-23.jpg";
import tataEmergency from "@TataImages/e-call-b-call-27-23.jpg";
import epb from "@TataImages/epb-27-23.jpg";
import svsImage from "@TataImages/360-svs-27-23.jpg";
import seatBelt from "@TataImages/seat-reminder-safari-2023.jpg";
import hillHoldImage from "@TataImages/hill-hold-control-27-23.jpg";
import adaptiveImage from "@TataImages/adaptive-cruise-control-2023-safari.jpg";
import emergencyBraking from "@TataImages/autonomous-braking-system-safar-2023.jpg";
import forwardCollisionImage from "@TataImages/forward-collision-safari-2023.jpg";
import rearCollisionImage from "@TataImages/rear-collision-safari-2023.jpg";
import trafficSingImage from "@TataImages/traffic-sign-recognisation.jpg";
import highBeamAssistImage from "@TataImages/high-beam-assist.jpg";
import laneDepartureImage from "@TataImages/lane-departure-warning.jpg";
import blindSpotImage from "@TataImages/blind-spot-detection.jpg";
import laneChangeImage from "@TataImages/lane-change-alert.jpg";
import rearCrossImage from "@TataImages/rear-cross-traffic-alert.jpg";
import doorOpenAlertImage from "@TataImages/open-door-alert.jpg";
import harmanTouchImage from "@TataImages/in-vogue-technology-27-23.jpg";
import instrumentClusterImage from "@TataImages/instrument-cluster-27-23.jpg";
import connectedTechnologyImage from "@TataImages/connected-car-technology.jpg";
import jblMusicImage from "@TataImages/jbl-music-system-with-10-jbl-speakers.jpg";
import harmanAudioImage from "@TataImages/harman-audio-worx.jpg";
import androidAutoImage from "@TataImages/android-auto-apple-carplay.jpg";
import voiceAssistantImage from "@TataImages/alexa.jpg";
import kryotechImage from "@TataImages/ph2-diesel-engine-27-23.jpg";
import smartShifterImage from "@TataImages/smart-e-shifter-27-23.jpg";
import paddleShifterImage from "@TataImages/paddle-shifters-27-23.jpg";
import bejwaldImage from "@TataImages/bejeweled-terrain-response.jpg";
import multiDriveImage from "@TataImages/multi-drive-modes-27-23.jpg";
import panoramicSunroofImage from "@TataImages/voice-activated-panoramic-sunroof.jpg";
import gestureTailgateImage from "@TataImages/headline-powered-tail-gate.jpg";
import dualZoneImage from "@TataImages/dual-zone-fatc.jpg";
import ventilatedSeatsImage from "@TataImages/ventilated-seats-27-23.jpg";
import poweredSeatsImage from "@TataImages/6-way-powered-diver-seat-22-23.jpg";
import electricBossImage from "@TataImages/electric-boss-mode-27-23.jpg";
import headRestImage from "@TataImages/2nd-row-comfort-headrest.jpg";
import luxuriousRowImage from "@TataImages/luxurious-3rd-row-seats.jpg";
import acVentsImage from "@TataImages/3rd-row-ac-vents.jpg";
import intelligentSpacesImage from "@TataImages/intelligent-spaces-27-23.jpg";
import airPurifierImage from "@TataImages/headline-air-purifier-27-23.jpg";
import wirelessChargingImage from "@TataImages/wirless-45w-charger.jpg";
import frontArmrestImage from "@TataImages/front-arm-rest-with-cooled-storage.jpg";
import headlampsImage from "@TataImages/auto-headlamps-and-rain-sensing-wipers-27-23.jpg";

interface TableOfContentsListProps {
  id: string;
  title: string;
  targetElement: string;
}

interface ArticleDetailsListProps {
  id: string;
  title: string;
}

export const TableOfContentsList: TableOfContentsListProps[] = [
  { id: "1", title: "This Is One", targetElement: "lastItem" },
  { id: "2", title: "This Is Two", targetElement: "headingNumberOne" },
  { id: "3", title: "This Is Three", targetElement: "lastItem" },
];

export const ArticleDetailsList: ArticleDetailsListProps[] = [
  { id: "1", title: "Published By: Karunakar Patel" },
  { id: "2", title: "Last Updated On: Karunakar Patel" },
  { id: "3", title: "Read Time: 3mins" },
];

export const BlogPostTags: { id: string }[] = [{ id: "One" }];

const TataSafari: NextPageWithLayout = () => {
  const scrollIntoView = () => {
    window.scrollTo({
      top: 0,
      left: window.innerHeight,
      behavior: "smooth",
    });
  };

  const pageUrl = useRouter();
  const url = "https://www.vehiclemasti.com/";
  const completeURL = url + pageUrl.asPath;

  return (
    <>
      <HeaderSection
        title={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.title}
        description={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.description!}
        // image={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.featuredImage}
        image="https://raw.githubusercontent.com/karunakarpatel-kp/Blogging-2022/main/public/nextjs_install.png"
        url={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.absoluteURL}
        publishedTime={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.publishedTime}
        lastUpdatedTime={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.lastUpdateTime}
      />

      <Box sx={{ mt: { xs: 1, sm: 1, md: 4, lg: 4 } }}>{/* Added Extra Space Under Toolbar */}</Box>

      <Grid container direction="row" sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
        <Grid item md={10} lg={8}>
          <HeadingOne title={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.title} id="title" />
          <Subtitle text={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.description!} />
          <LastUpdateTags
            lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.lastUpdateTime)}
            tags={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.tags!}
          />
          {/* Image For Desktop Screens */}
          <HeaderImageFullBlogPost
            image={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.featuredImage}
            alt={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.featuredImageAltText}
          />
        </Grid>
        <Grid item md={2} lg={4}>
          {/* Empty Space */}
        </Grid>
      </Grid>

      <Divider sx={{ mt: 4, mb: 4 }} />

      <Grid
        container
        direction="row"
        spacing={3}
        sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}
      >
        <Grid item md={8} lg={8}>
          <Paragraph id="introduction">
            Hi, in this blog post, you will learn everything about the{" "}
            <HighlightText>new safari facelift 2023</HighlightText> from the overview, reviews, variants, mileage,
            on-road price, etc. This is the best place to get a complete overview or information about Tata Safari Car
            2023.
          </Paragraph>
          <Paragraph>
            Tata Automobiles launched a brand-new SUV named Tata Safari Facelift 2023 car earlier this year in October.
            Tata Safari is one of the most iconic SUVs in India as it has been manufacturing branded cars for over two
            decades in India. The safari had evolved from off-road cars to sophisticated or feature-rich family cars. If
            you are looking for a hot, modern, safest, best build quality, feature-hit branded SUV, then Tata Safari is
            the best choice.
          </Paragraph>

          <HeadingTwo id="tata-safari-key-features" title="Tata Safari Key Features:" />
          <Paragraph>
            However, the Tata Safari facelift comes with a hot stylish design, a feature-rich infotainment system,
            advanced safety features, a spacious cabin, and a powerful diesel engine. It is the best choice for those
            who want a family car that can also handle adventure.
          </Paragraph>
          <Paragraph>
            Ok wait, let’s check into some detailed key features and highlights of Tata Safari facelift 2023.
          </Paragraph>

          <HeadingThree id="the-grand-design" title="The Grand Design:" />
          <Paragraph>
            Tata Safari facelift comes with new noticeable cosmetic changes that will give a more contemporary look to
            this branded new SUV. Below is a list of key design updates.
          </Paragraph>

          <HeadingThree id="new-parametric-grill" title="New Parametric Grill:" />

          <BlogPostImageCard
            paragraphText="
            The Safari comes with a new parametric grill which applies a stunning look to the SUV where we cannot stop looking at it. 
          "
            imageSrc={grillImage}
            imageAltText="tata-safari-parametric-grill-image"
            imageAlignment="left"
          />

          <HeadingThree id="bi-led-projector-headlights" title="BI-LED Projector Headlights:" />

          <BlogPostImageCard
            paragraphText="
            It has Bi-functional LED projector headlights that apply a good throw of light ahead. It also has a safari branding strip below the projector lamps.
          "
            imageSrc={fullLedProjectorImage}
            imageAltText="tata-safari-bi-led-projector-headlights"
            imageAlignment="right"
          />

          <HeadingThree id="end-to-end-connected-LED-DRLS" title="End-to-end connected LED DRLs:" />

          <BlogPostImageCard
            paragraphText="
           The new Safari has vertically oriented LED headlights and a connected DRL setup that runs across the width of the bonnet. It comes with a welcome light when you unlock your car. 
          "
            imageSrc={connectedLEDDRLs}
            imageAltText="end-to-end-connected-led-drls-tata-safari"
            imageAlignment="left"
          />

          <HeadingThree id="signature-connected-led-taillamp" title="Signature Connected LED Taillamp:" />

          <BlogPostImageCard
            paragraphText="
           It has a new signature connected LED taillamp where it runs all over the rearview. It has a stunning look from the rear view during nights when the LED taillamp is functional.
          "
            imageSrc={signatureLedTailLamp}
            imageAltText="signature-connected-led-taillamp"
            imageAlignment="right"
          />

          <HeadingThree id="new-r19-dual-tone-spider-alloys" title="New R19 Dual Tone Spider Alloys:" />

          <BlogPostImageCard
            paragraphText="
           The New Safari has 19-inch alloy wheels with a stunning design that applies great aerodynamics which results in great stability and durability of this SUV.
          "
            imageSrc={alloyWheels}
            imageAltText="tata-safari-alloy-image"
            imageAlignment="left"
          />

          <HeadingThree id="signature-safari-mascot-on-doors" title="Signature Safari Mascot on Doors:" />

          <BlogPostImageCard
            paragraphText="
           The new safari has the “safari” signature badging on all doors as shown in the image. It applies a great look to the SUV even from the left and right view of the car.
          "
            imageSrc={singatureMascot}
            imageAltText="tata-safari-signature-mascot"
            imageAlignment="right"
          />

          <HeadingThree id="iconic-roof-rails-with-chrome-inserts" title="Iconic Roof rails with chrome Inserts:" />

          <BlogPostImageCard
            paragraphText="
           New It comes with Roof rails on the top of the SUV. It just applies a good look but who else uses these rails for carrying luggage on top of a family SUV? It is very useful for those who go on adventures frequently.
          "
            imageSrc={roofRails}
            imageAltText="tata-safari-iconic-roof-rails-image"
            imageAlignment="left"
          />

          <HeadingThree
            id="oyster-white-and-titan-brown-interior-theme"
            title="Oyster white and Titan Brown Interior Theme:"
          />

          <BlogPostImageCard
            paragraphText="
           You would fall in love with this branded new SUV once you step into it. As of now, it has the best interior theme where you will feel diligent and happy without any reason.
          "
            imageSrc={interiorTheme}
            imageAltText="tata-safari-interior-theme"
            imageAlignment="right"
          />

          <HeadingThree id="persona-based-interior-themes" title="Persona Based Interior Themes:" />

          <BlogPostImageCard
            paragraphText="
           The new safari has a customizable ambient light feature where you can manually set the ambient lights depending on your mood using the infotainment system. You automatically elevate your luxurious feeling with persona-based interior themes.
          "
            imageSrc={safariPersona}
            imageAltText="tata-safari-persona-image"
            imageAlignment="left"
          />

          <HeadingThree
            id="steering-wheel-illuminated-logo"
            title="New Dual Tone 4 Spoke steering wheel with Illuminated Logo:"
          />

          <BlogPostImageCard
            paragraphText="
           The new Safari facelift comes with a dual-tone 4-spoke steering wheel with an illuminated “Tata” logo on it. It has a crystal clear steering wheel, but upon using it there may be a chance of scratches. But, it’s ok to live with it.
          "
            imageSrc={safariSteeringWheel}
            imageAltText="steering-wheel-illuminated-logo"
            imageAlignment="right"
          />

          <HeadingThree id="safari-seats" title="Benecke Kaliko Oyster white Leatherette seats:" />

          <BlogPostImageCard
            paragraphText="
          It comes with ultra-premium seats with the deco stitch that elegantly ties comfort with styles. You feel “Reserved only for you” once you sit in this comfortable seat.
          
          "
            imageSrc={safariSeats}
            imageAltText="tata-safari-seats-image"
            imageAlignment="left"
          />
          <HeadingTwo id="the-safest-space" title="The Safest Space:" />

          <HeadingThree id="gncap-5-start-rating" title="GNCAP 5-Star Rating" />

          <Paragraph>
            As we already know the Global New Car Assessment Programme (GNCAP) conducts crash tests on newly launched
            vehicles and provides safety ratings based on the results achieved. The 5-star safety rating is the highest
            in GNCAP.
          </Paragraph>

          <BlogPostImageCard
            paragraphText="The new Tata Safari comes with a 5-star GNCAP rating which has been named the title for this car “Safest vehicle in India”. It comes with a 5-star safety rating with an Adult rating of 33.05 out of a max of 34.00 and a child rating of 45.00 out of a max of 49.00."
            imageSrc={gncapImage}
            imageAltText="tata-safari-gncap-image"
            imageAlignment="left"
          />

          <HeadingThree id="pedigree-of-omegarc" title="Pedigree of OMEGARC" />

          <BlogPostImageCard
            paragraphText="Optimal Modular Efficient Global Advanced Architecture (OMEGA) which was derived from Land Rover’s D8 platform provides full safety, and high dynamics which ensures complete protection and peace of mind. "
            imageSrc={tataOmegarc}
            imageAltText="tata-safari-pedigree-omegarc"
            imageAlignment="right"
          />

          <HeadingThree id="7-airbags" title="7 Airbags" />
          <Paragraph>
            Currently, the new safari has a total of 7 Airbags which provides complete protection not only to the driver
            but also to the passengers.
          </Paragraph>
          <BlogPostImageCard
            paragraphText=" It provides complete protection to the Driver, passengers, Curtain, driver knee, driver side, and front passenger side. This is one of the safest reasons why GNCAP has provided a 5-star rating to the new safari.  "
            imageSrc={tataAirBags}
            imageAltText="tata-safari-airbags-image"
            imageAlignment="left"
          />
          <HeadingThree id="advanced-esp" title="Advanced ESP with 17 Features" />
          <Paragraph>
            The New Safari comes with Advanced ESP features. For those who do not know what it is, the Electronic
            Stability Program (ESP) is a safety technology that combines an anti-lock braking system (ABS) and a
            traction control system (TCS).
          </Paragraph>
          <BlogPostImageCard
            paragraphText=" This technology helps in detecting and reducing loss of traction which prevents tires from skidding, reduces engine power, breaks the inside rear wheel to help steer the car, and many more. The new safari is equipped with all the ESP features.  "
            imageSrc={tataesp}
            imageAltText="tata-safari-esp"
            imageAlignment="right"
          />
          <HeadingThree id="emergency-call" title="Emergency call/ Breakdown call" />
          <Paragraph>
            The new safari facelift has provided with you an emergency call system in the overhead console.
          </Paragraph>
          <BlogPostImageCard
            paragraphText="During the emergency, by pressing the SOS button, the system will send your vehicle location and direction of travel to an operator, and the operator will contact you through the vehicle speaker system so, you can safely get out of the emergency situation.   "
            imageSrc={tataEmergency}
            imageAltText="tata-safari-emergency"
            imageAlignment="left"
          />

          <HeadingThree id="epb" title="Electronic Parking Brake (EPB) with Auto Hold" />
          <BlogPostImageCard
            paragraphText="Tata Safari is also equipped with an electronic parking brake (EPB) with Auto hold which helps you to go forward without going backward. "
            imageSrc={epb}
            imageAltText="tata-safari-epb"
            imageAlignment="right"
          />
          <HeadingThree id="360" title="360 Surround View System" />
          <Paragraph>
            It comes with 360-degree surround view cameras which capture a complete spherical view of the surroundings
            from the sky to the ground level.
          </Paragraph>
          <BlogPostImageCard
            paragraphText="The captured images were projected together which eventually creates a top view of the vehicle. This mostly helps with parking, moving backward, etc. Everything surrounding the vehicle will be shown in the infotainment system in High definition. "
            imageSrc={svsImage}
            imageAltText="tata-safari-360"
            imageAlignment="right"
          />
          <HeadingThree id="seatBelt" title="3PT ELR Seat Belt with Reminder For All occupants" />
          <BlogPostImageCard
            paragraphText="It has a 3pt ELR seat belt with a remainder for not only the driver and co-driver seats but also the passenger seats. With the help of the remainder, it helps us to safeguard our family members. "
            imageSrc={seatBelt}
            imageAltText="tata-safari-seatBelt"
            imageAlignment="left"
          />

          <HeadingThree id="hillHoldControl" title="Hill Hold Control" />

          <BlogPostImageCard
            paragraphText="It comes with a Hill Hold control system which helps us to move forward or backward more confidently even on hills. Please refer to the image below for a better understanding.  "
            imageSrc={hillHoldImage}
            imageAltText="tata-safari-hillHoldControl"
            imageAlignment="right"
          />

          <HeadingThree id="ADAS" title="ADAS:" />
          <Paragraph>
            Advanced Driver Assistance System (ADAS) includes different types of technologies that assist drivers in
            safely operating the vehicle. ADAS uses and human-machine interface to improve drivers ability to react to
            unexpected dangers on the road. They just simply detect and object to the surroundings of the vehicle and
            send an alarm to the driver and its position.
          </Paragraph>

          <HeadingThree id="adaptiveCruiseControl" title="Adaptive Cruise Control" />
          <Paragraph>
            The new safari has an Adaptive cruise control system which helps the driver to set the maximum speed limit
            and cruise at the same speed if there are no vehicles upfront.
          </Paragraph>
          <BlogPostImageCard
            paragraphText="If there is any vehicle in front then the vehicle automatically detects the speed of the front vehicle and adapts its speed to the front vehicle with the safe distance set by the driver. In highways and expressways, this is the best feature which helps the drivers travel more distances without any tiredness."
            imageSrc={adaptiveImage}
            imageAltText="tata-safari-hillHoldControl"
            imageAlignment="left"
          />
          <HeadingThree id="emergencyBraking" title="Autonomous Emergency Braking" />

          <Paragraph>
            When you are travelling on roads, This ADAS system monitors the surrounding of the vehicle and identifies
            the possible collision scenarios with the vehicle, kids, pedestrians or any other object on the front of the
            vehicle.
          </Paragraph>

          <BlogPostImageCard
            paragraphText=" If required, breaks are applied automatically by this Autonomous Emergency Braking system to ensure that you and others stay safe from harm."
            imageSrc={emergencyBraking}
            imageAltText="tata-safari-emergency"
            imageAlignment="right"
          />

          <HeadingThree id="forwardCollision" title="Forward Collision Warning" />
          <BlogPostImageCard
            paragraphText=" With the help of this forward collision warning feature, it gives us an audio and video alert message to the driver if there is any danger in the front of the vehicle. "
            imageSrc={forwardCollisionImage}
            imageAltText="tata-safari-forwardCollision"
            imageAlignment="left"
          />

          <HeadingThree id="rearCollisionWarning" title="Rear Collision Warning" />
          <BlogPostImageCard
            paragraphText=" This ADAS Rear Collision Warning system monitors and gives and audio and video message to the driver if there is any incoming speeding vehicle in the rear view. It also warns the driver to take any necessary actions by blinking of the hazard lamps. "
            imageSrc={rearCollisionImage}
            imageAltText="tata-safari-rearCollision"
            imageAlignment="right"
          />
          <HeadingThree id="trafficSign" title="Traffic Sign Recognition" />
          <BlogPostImageCard
            paragraphText=" The new safari recognizes the traffic sign boards like speed limit, no overtaking, right turn, etc., and provides you with inputs so that it helps the driver to take necessary actions if required.  "
            imageSrc={trafficSingImage}
            imageAltText="tata-safari-trafficSign"
            imageAlignment="left"
          />

          <HeadingThree id="highBeamAssist" title="High Beam Assist" />
          <Paragraph>
            At night, it is a hesitant task to switch off and on high beams when a vehicle is approaching the front.
          </Paragraph>
          <BlogPostImageCard
            paragraphText="  So, by using this ADAS High beam assist, it automatically adjusts the headlights from the high beam to the low beam when there are any oncoming vehicles detected. This helps drivers to drive freely on the road without any distractions.  "
            imageSrc={highBeamAssistImage}
            imageAltText="tata-safari-highBeamAssist"
            imageAlignment="right"
          />

          <HeadingThree id="laneDeparture" title="Lane Departure Warning" />
          <BlogPostImageCard
            paragraphText="  So, by using this ADAS High beam assist, it automatically adjusts the headlights from the high beam to the low beam when there are any oncoming vehicles detected. This helps drivers to drive freely on the road without any distractions.  "
            imageSrc={laneDepartureImage}
            imageAltText="tata-safari-laneDepartureImage"
            imageAlignment="left"
          />
          <HeadingThree id="blindSpotDetection" title="Blind Spot Detection" />
          <BlogPostImageCard
            paragraphText="The new safari has a Blind spot detection feature that helps the driver to warn about any blind spots and warns you through audio-visual warnings so that it helps you to take necessary actions to prevent any harm to you and others. "
            imageSrc={blindSpotImage}
            imageAltText="tata-safari-blindSpotImage"
            imageAlignment="right"
          />

          <HeadingThree id="lanechangealert" title="Lane Change Alert" />
          <BlogPostImageCard
            paragraphText="Your car now helps you to stay alert on the road by informing you about the things that you were unaware of. The ADAS Lane change alert monitors the surroundings and warns you of any dangerous lane change.  "
            imageSrc={laneChangeImage}
            imageAltText="tata-safari-langeChange"
            imageAlignment="left"
          />
          <HeadingThree id="rearcross" title="Rear Cross Traffic Alert" />
          <BlogPostImageCard
            paragraphText="While you are reversing the vehicle, this feature helps you from getting startled by any objects approaching or present in the rear blind spot of any vehicle and alerts you through audio-visual alerts which helps us in easy and safe reversing of the vehicle.  "
            imageSrc={rearCrossImage}
            imageAltText="tata-safari-rearCrossImage"
            imageAlignment="right"
          />
          <HeadingThree id="dooropenalert" title="Door open alert" />
          <BlogPostImageCard
            paragraphText="The new safari comes with a door open alert which helps in ensuring safe door opening by alerting the driver or passenger of any imminent dangers through alerts."
            imageSrc={doorOpenAlertImage}
            imageAltText="tata-safari-dooropenalertimage"
            imageAlignment="left"
          />
          <HeadingTwo id="the-tech-appeal" title="The Tech Appeal:" />
          <HeadingThree id="harman-touch" title="31.24 cm Harman Touch Screen Infotainment." />
          <BlogPostImageCard
            paragraphText="The new safari comes with a 31.24 cm Harman Touch Screen Infotainment system, transforming the safari into a cinematic cockpit."
            imageSrc={harmanTouchImage}
            imageAltText="tata-safari-harmanTouch"
            imageAlignment="left"
          />
          <HeadingThree id="digital-instrument-cluster" title="26.03 Digital Instrument Cluster: " />
          <BlogPostImageCard
            paragraphText="It has a 26.03 digital instrument cluster which helps us to read the information easily and navigate through different options in the cluster. "
            imageSrc={instrumentClusterImage}
            imageAltText="tata-safari-instrumentCluster"
            imageAlignment="right"
          />

          <HeadingThree id="connected-vehicle-technology" title="Connected Vehicle Technology with IRA 2.0" />
          <BlogPostImageCard
            paragraphText="This feature helps us to connect with the vehicle via a mobile app and get the real-time location of the car. You can just start, stop, on/off AC, get the real-time live location of the vehicle, and perform many more actions via mobile application."
            imageSrc={connectedTechnologyImage}
            imageAltText="tata-safari-connectedVehicleTechnology"
            imageAlignment="left"
          />

          <HeadingThree id="jbl-music-system" title="JBL Music System with 10 speakers:" />
          <BlogPostImageCard
            paragraphText="The new safari facelift comes with 10 speakers of JBL Music system which provides an acoustic experience inside the cabin. "
            imageSrc={jblMusicImage}
            imageAltText="tata-safari-jblmusic"
            imageAlignment="right"
          />

          <HeadingThree id="harman-audio" title="Harman Advanced Audio Work with 13 JBL modes: " />
          <BlogPostImageCard
            paragraphText="JBL music system provides JBL modes within the cabin where we can select the different modes from the list of JBL music systems and enjoy the adventure sound system within the new Safari facelift cabin. "
            imageSrc={harmanAudioImage}
            imageAltText="tata-safari-harmanAudio"
            imageAlignment="left"
          />

          <HeadingThree id="android-auto" title="Android Auto and Apple Car Play Over Wi-Fi: " />
          <BlogPostImageCard
            paragraphText="Stay connected wirelessly with your car by pairing your devices with Android Auto and Apple Car Play wireless and stay connected on the go. "
            imageSrc={androidAutoImage}
            imageAltText="tata-safari-androidAuto"
            imageAlignment="right"
          />

          <HeadingThree id="voice-assistants" title="Multiple voice assistants including Alexa:" />
          <Paragraph>
            The new safari has over 150 voice commands integrated into any language of your choice provided by the
            system.
          </Paragraph>
          <BlogPostImageCard
            paragraphText=" Select your preferred language and start commanding the new safari without pressing any buttons manually. Just give a command saying “Open Sunroof” in your preferred language and enjoy the elegant features of the new Safari. "
            imageSrc={voiceAssistantImage}
            imageAltText="tata-safari-voiceAssistantImage"
            imageAlignment="left"
          />
          <HeadingTwo id="the-power-play" title="The Power Play:" />

          <HeadingThree id="kryotech" title="Kryotech 170 ps BS6 PH2 Diesel Engine:" />

          <BlogPostImageCard
            paragraphText=" Elevate your driving experience with a kryotech 170 ps BS6 ph2 diesel engine with 170PS power and 350Nm torque."
            imageSrc={kryotechImage}
            imageAltText="tata-safari-kryotech"
            imageAlignment="left"
          />

          <HeadingThree id="smart_e_shifter" title="Smart E-Shifter: " />
          <BlogPostImageCard
            paragraphText=" The new safari has a new style of e-shifters which gives a stunning look inside the cabin as shown in the image. "
            imageSrc={smartShifterImage}
            imageAltText="tata-safari-smart-shifter"
            imageAlignment="right"
          />

          <HeadingThree id="Paddle Shifter" title="Paddle Shifter:" />
          <BlogPostImageCard
            paragraphText=" The new safari has a new style of e-shifters which gives a stunning look inside the cabin as shown in the image. "
            imageSrc={paddleShifterImage}
            imageAltText="tata-safari-paddle-shifter"
            imageAlignment="left"
          />

          <HeadingThree id="terrain-response" title="Bejweld Terrain Response Modes With Display: " />
          <BlogPostImageCard
            paragraphText="For your adventure on the road, you just have an easy way to set the mode depending upon the situation to conquer it."
            imageSrc={bejwaldImage}
            imageAltText="tata-safari-bejwald-image"
            imageAlignment="right"
          />

          <HeadingThree id="multi-drive" title="Multi-Drive Modes:  " />
          <BlogPostImageCard
            paragraphText="As shown in the image below, you can directly set the mode of the vehicle depending on the different driving conditions."
            imageSrc={multiDriveImage}
            imageAltText="tata-safari-multi-drive-image"
            imageAlignment="left"
          />
          <HeadingTwo id="the-comfort-zone" title="The Comfort Zone:" />

          <HeadingThree id="panoramic-sunroof" title="Voice Assisted Panoramic Sunroof:  " />
          <BlogPostImageCard
            paragraphText="The new safari has voice assisted panoramic sunroof along with an anti-pinch function which helps in child safety and also makes you a star of every journey."
            imageSrc={panoramicSunroofImage}
            imageAltText="tata-safari-panoramic-sunroof"
            imageAlignment="left"
          />

          <HeadingThree id="gesture-tailgate" title="Gesture Controlled Power Tailgate:  " />
          <BlogPostImageCard
            paragraphText="If your hands are occupied with everything else, don’t worry the new Tata Safari is equipped with gesture control opening which allows you to open the tailgate of the vehicle without any button or anything else."
            imageSrc={gestureTailgateImage}
            imageAltText="tata-safari-gesture-tailgate"
            imageAlignment="right"
          />

          <HeadingThree id="dual-zone" title="Dual Zone Fully Automatic Temperature Control:  " />
          <BlogPostImageCard
            paragraphText="We can enjoy 2 climate zones within the safari. You can directly set up a temperature high with the co-driver zone and a temperature low to the driver zone and enjoy two different zones within the car at the same time. "
            imageSrc={dualZoneImage}
            imageAltText="tata-safari-dualZone"
            imageAlignment="left"
          />

          <HeadingThree id="ventilated-seats" title="1st and 2nd Row Ventilated Seats" />
          <BlogPostImageCard
            paragraphText="The new Safari has 1st and 2nd row ventilated seats. You can sit down and truly relax with a cool and comforting airflow system.  "
            imageSrc={ventilatedSeatsImage}
            imageAltText="tata-safari-ventilated-seats"
            imageAlignment="right"
          />

          <HeadingThree id="powered-seats" title="6-Way Powered Driver Seats with memory and welcome Function:" />
          <BlogPostImageCard
            paragraphText="With the help of this feature, the new Tata safari welcomes you with your own customized powered driver seats with ready-to-drive. Each end every time, you step into the vehicle it welcomes you every time."
            imageSrc={poweredSeatsImage}
            imageAltText="tata-safari-powered-seats"
            imageAlignment="left"
          />

          <HeadingThree id="powered-seats-electric" title="4-Way powered co-driver seat with electric boss mode:" />
          <BlogPostImageCard
            paragraphText="If you need more legroom for 2nd row of seats, don’t worry the new safari is equipped with powered seats."
            imageSrc={electricBossImage}
            imageAltText="tata-safari-electric-boss"
            imageAlignment="right"
          />

          <HeadingThree id="comfort-head-rest" title="2nd row comfort Head rest & Rear sun shades:" />
          <BlogPostImageCard
            paragraphText="If you are very much interested in 2nd row, enjoy the comfort and luxury from the backseat with a comfortable headrest and rear sun shades."
            imageSrc={headRestImage}
            imageAltText="tata-safari-head-rest"
            imageAlignment="left"
          />

          <HeadingThree id="luxurious-3rd-row" title="Luxurious 3rd row seats:" />
          <BlogPostImageCard
            paragraphText="You will be stunned by the comfort and luxury of the vehicle even in the 3rd row."
            imageSrc={luxuriousRowImage}
            imageAltText="tata-safari-3rd-row"
            imageAlignment="right"
          />

          <HeadingThree id="luxurious-3rd-row-ac-vents" title="3rd row AC Vents:" />
          <BlogPostImageCard
            paragraphText="Do you know that the new Tata Safari 2021 is equipped with AC Vents even in the 3rd row?"
            imageSrc={acVentsImage}
            imageAltText="tata-safari-3rd-row-ac-vents"
            imageAlignment="left"
          />

          <HeadingThree id="intelligent-spaces" title="Intelligent Spaces:" />
          <BlogPostImageCard
            paragraphText="For all the things even if it is big or small, there’s a special place in the New Safari.."
            imageSrc={intelligentSpacesImage}
            imageAltText="tata-safari-intelligent-spaces"
            imageAlignment="right"
          />

          <HeadingThree id="air-purifier" title="Air Purifier:" />
          <BlogPostImageCard
            paragraphText="It comes with an Air Purifier, this is the best place to breathe in fresh air and breath out all worries. "
            imageSrc={airPurifierImage}
            imageAltText="tata-safari-air-purifier"
            imageAlignment="left"
          />

          <HeadingThree id="wireless-charging" title="Wireless charger & 45W USB C Fast charger:" />
          <BlogPostImageCard
            paragraphText="It comes with an Air Purifier, this is the best place to breathe in fresh air and breath out all worries. "
            imageSrc={wirelessChargingImage}
            imageAltText="tata-safari-wireless-charging"
            imageAlignment="right"
          />

          <HeadingThree id="front-armrest" title="Front armrest with cooled storage:" />
          <BlogPostImageCard
            paragraphText=""
            imageSrc={frontArmrestImage}
            imageAltText="tata-safari-front-armrest"
            imageAlignment="left"
          />

          <HeadingThree id="front-armrest" title="Auto Headlamps & Rain Sensing Wipers:" />
          <BlogPostImageCard
            paragraphText="The new Tata Safari has auto headlamps and rain-sensing wipers where you can drive effortlessly without any distractions even in rain or subways."
            imageSrc={headlampsImage}
            imageAltText="tata-safari-head-lamps"
            imageAlignment="right"
          />
        </Grid>

        <Grid item md={4} lg={4} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
          <Box position="sticky" top={70}>
            <Box mb={1} pl={2}>
              <Typography variant="body2" fontSize="large">
                CONTENTS
              </Typography>
            </Box>
            <Box pl={2}>
              <Scrollspy
                items={[
                  "introduction",
                  "tata-safari-key-features",
                  "the-grand-design",
                  "the-safest-space",
                  "ADAS",
                  "the-tech-appeal",
                  "the-power-play",
                  "the-comfort-zone",
                ]}
                currentClassName="activeScrollItem"
                componentTag="ol"
                style={{ listStyle: "none" }}
              >
                <li className="listItemContent">
                  <a href="#introduction" onClick={scrollIntoView} className="listItemLinkContent">
                    Introduction
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#tata-safari-key-features" onClick={scrollIntoView} className="listItemLinkContent">
                    Tata Safari Key Features
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#the-grand-design" onClick={scrollIntoView} className="listItemLinkContent">
                    The Grand Design
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#the-safest-space" onClick={scrollIntoView} className="listItemLinkContent">
                    The Safest Space
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#ADAS" onClick={scrollIntoView} className="listItemLinkContent">
                    ADAS
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#the-tech-appeal" onClick={scrollIntoView} className="listItemLinkContent">
                    The Tech Appeal
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#the-power-play" onClick={scrollIntoView} className="listItemLinkContent">
                    The Power Play
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#the-comfort-zone" onClick={scrollIntoView} className="listItemLinkContent">
                    The Comfort Zone
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#" onClick={scrollIntoView} className="listItemLinkContent">
                    Specifications
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#" onClick={scrollIntoView} className="listItemLinkContent">
                    Colors
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#" onClick={scrollIntoView} className="listItemLinkContent">
                    Persona
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#" onClick={scrollIntoView} className="listItemLinkContent">
                    Price
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#" onClick={scrollIntoView} className="listItemLinkContent">
                    Downloads
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#" onClick={scrollIntoView} className="listItemLinkContent">
                    Discussions
                  </a>
                </li>
              </Scrollspy>

              {/* Social Sharing Icons Are below */}
              <Box>
                <Sharing url={completeURL} title={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.title} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default TataSafari;

TataSafari.getLayout = function getLayout(page) {
  return (
    <>
      <FullPageBlogPostLayout>{page}</FullPageBlogPostLayout>
    </>
  );
};
