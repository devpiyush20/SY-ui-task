import React from "react";
import "./home.css";
import waveImage from "../assets/img/waveImage.png";
import kapilaImage from "../assets/img/kapilaImage.jpeg";
import brandImage from "../assets/img/brandName.jpeg";
import Card from "./Card";
import CatogreyCard from "./CatogreyCard";
import chefImage from "../assets/img/chefImage.png";
import guruji from "../assets/img/guruji.png";
import randamLadki from "../assets/img/randamLadki.png";
import ranverbaba from "../assets/img/ranveerbaba.png";
import { BsArrowUpRight } from "react-icons/bs";
import arrow from "../assets/img/arrow.png";
import AvatarSingle from "../assets/img/Avatarsingle.jpeg";
import multiAvatar from "../assets/img/multiAvatar.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
import stall from "../assets/img/stall.jpeg";
import iphone from "../assets/img/iphone.jpeg";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import info from "../assets/img/info.jpeg"
import Carousel from "./Carousel";
import logos from "../assets/img/logos.png"
import lastImage from "../assets/img/lastImage.png"







const Home = () => {

   

  return (
    <div className="homeBody">
      <div className="section1">
        <div className="subsection1">
          <img src={waveImage} alt="waveImage" className="waveImage" />
          <div className="subsectionHeading">
            <h1> Simplifying Influencer </h1>
            <h1>Marketing For You!</h1>
          </div>
          <div className="paragraphSubsection">
            <h4>
              Explore creators across YouTube, Instagram & Facebook to curate
              unique content for your brand
            </h4>
          </div>

          <div className="inputAndSarchBox">
            <div className="selectBox">
              <select name="social media" id="socialMedia">
                <option value={"Facebook"}>Facebook</option>
                <option value={"Instagram"}>Instagram</option>
                <option value={"Snapchat"}>Snapchat</option>
                <option value={"Youtube"}>Youtube</option>
              </select>
            </div>

            <div className="selectBox">
              <select name="social media" id="socialMedia">
                <option value={"Facebook"}>Facebook</option>
                <option value={"Instagram"}>Instagram</option>
                <option value={"Snapchat"}>Snapchat</option>
                <option value={"Youtube"}>Youtube</option>
              </select>
            </div>

            <button>Search</button>
          </div>
          <img src={brandImage} className="brandImage" alt="brand" />
        </div>
        <div className="subsection2">
          <img src={kapilaImage} alt="" />
        </div>
      </div>

      <div className="section2">
        <div className="headingSection">
          <div className="headingText">
            <h1>The OG Creators</h1>
            <h4> Lorem ipsum dolor sit amet, consectetur adipiscing</h4>
          </div>
          <button className="ViewButton">View All</button>
        </div>

        <div className="ogCards">
          <Card
            image={
              "https://yt3.googleusercontent.com/UnHiAzDe4BrX1crihFtyFV2IM2a12i0sj41153RUIoCkazMbVX4otYdmFAKmaxO4psixK9Sriw=s160-c-k-c0x00ffffff-no-rj"
            }
            name={"Tanmay Bhatt"}
            userName={"tanmaybhat"}
            followers={"1.9M"}
          />

          <Card
            image={"https://thebiodiary.com/uploads/bio/kusha_kapila-1.jpg"}
            name={"Kusha Kapila"}
            userName={"kushakapila"}
            followers={"3.7M"}
          />
          <Card
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2gXm8G6synGIggtosV_XAXu9aHOX6iX1_pFjZlGZ1RYJXStKF"
            }
            name={"Rohan Joshi"}
            userName={"mojorojo"}
            followers={"597K"}
          />
          <Card
            image={
              "https://iansportalimages.s3.amazonaws.com/thumbnails/202401103103550.jpeg"
            }
            name={"Bhuvan Bam"}
            userName={"bhuvan.bam22"}
            followers={"19.4M"}
          />
        </div>
      </div>

      <div className="section3">
        <div className="headingSection">
          <div className="headingText3">
            <h1> Categories</h1>
          </div>
          <button className="ViewButton">View All</button>
        </div>

        <div className="catogriesCard">
          <CatogreyCard catogery={"Foodies"} img={chefImage} color={"orange"} />
          <CatogreyCard catogery={"Techies"} img={guruji} color={"green"} />
          <CatogreyCard
            catogery={"Fashionistas"}
            img={randamLadki}
            color={"blue"}
          />
          <CatogreyCard
            catogery={"Podcasters"}
            img={ranverbaba}
            color={"red"}
          />
        </div>
      </div>

      {/* section4*/}
      <div className="section2">
        <div className="headingSection">
          <div className="headingText">
            <h1>In The Spotlight</h1>
            <h4> Lorem ipsum dolor sit amet, consectetur adipiscing</h4>
          </div>
          <button className="ViewButton">View All</button>
        </div>

        <div className="ogCards">
          <Card
            image={
              "https://cms-article.forbesindia.com/media/digital-stars/Sharan_Hegde_H.webp"
            }
            name={"Sharan Hegde"}
            userName={" financewithsharan"}
            followers={"2.6M"}
          />

          <Card
            image={
              "https://m.media-amazon.com/images/M/MV5BMWExMjk0MjQtYTI4NS00NTJjLTkyMDItMWY4OWM2MzY0NzE5XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg"
            }
            name={"Dolly Singh"}
            userName={"dollysingh"}
            followers={"1.6M"}
          />
          <Card
            image={
              "https://cdn0.weddingwire.in/article/1605/original/1280/jpg/105061-kritika-khurana-10.jpeg"
            }
            name={"kritika Khurana"}
            userName={"thatbohogirl"}
            followers={"1.8M"}
          />
          <Card
            image={
              "https://iansportalimages.s3.amazonaws.com/thumbnails/202401103103550.jpeg"
            }
            name={"Bhuvan Bam"}
            userName={"bhuvan.bam22"}
            followers={"19.4M"}
          />
        </div>
      </div>

      <div className="section4">
        <div className="leftSec4">
          <div className="leftBox">
            <div>
              <h4>Meet</h4>
              <h1> The Design </h1>
              <h1>Creator</h1>
            </div>
            <div className="readMore">
              <h4>
                Read More <BsArrowUpRight />
              </h4>
            </div>
          </div>
          <img src={arrow} alt="arrowImage" />
        </div>
        <div className="rightsec4">
          <h1>Aman k.</h1>
          <div className="rsSub">
            <img src={AvatarSingle} alt="avtar" />
            <h3>Design Creator</h3>
          </div>
          <h4>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad min
          </h4>
          <img src={multiAvatar} alt="avatar" />
        </div>
      </div>

      {/* section5*/}
      <div className="section2">
        <div className="headingSection">
          <div className="headingText">
            <h1>On The Rise</h1>
            <h4> Lorem ipsum dolor sit amet, consectetur adipiscing</h4>
          </div>
          <button className="ViewButton">View All</button>
        </div>

        <div className="ogCards">
          <Card
            image={
              "https://yt3.googleusercontent.com/UnHiAzDe4BrX1crihFtyFV2IM2a12i0sj41153RUIoCkazMbVX4otYdmFAKmaxO4psixK9Sriw=s160-c-k-c0x00ffffff-no-rj"
            }
            name={"Tanmay Bhatt"}
            userName={"tanmaybhat"}
            followers={"1.9M"}
          />

          <Card
            image={"https://thebiodiary.com/uploads/bio/kusha_kapila-1.jpg"}
            name={"Kusha Kapila"}
            userName={"kushakapila"}
            followers={"3.7M"}
          />
          <Card
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2gXm8G6synGIggtosV_XAXu9aHOX6iX1_pFjZlGZ1RYJXStKF"
            }
            name={"Rohan Joshi"}
            userName={"mojorojo"}
            followers={"597K"}
          />
          <Card
            image={
              "https://iansportalimages.s3.amazonaws.com/thumbnails/202401103103550.jpeg"
            }
            name={"Bhuvan Bam"}
            userName={"bhuvan.bam22"}
            followers={"19.4M"}
          />
        </div>
      </div>

      <div className="section5">
        <div className="topsec5">
          <div className="ts5l">
            <h4> Join As a Brand</h4>
            <h1> Interdum et malesuada fames ac</h1>
            <h2>
              Join as a Brand <FaArrowRightLong />
            </h2>
            <img src={stall} alt="bj" />
          </div>
          <div className="ts5l">
            <h4> Join As a Creator</h4>
            <h1> Interdum et malesuada fames ac</h1>
            <h2>
              Join as a Creator <FaArrowRightLong />
            </h2>
            <img src={iphone} alt="bjk" />
          </div>
        </div>
        <div className="bottomsec5">
          <div className="leftbs5">
            <div className="socialIcons">
              <FaYoutube />
              <AiFillInstagram />
              <FaFacebook />
              <FaTiktok />
              <FaSnapchat />
            </div>
            <h2>Phasellus accumsan imperdiet tempor. Cras tincidunt, arcu</h2>
            <p2>
              Integer id augue iaculis, iaculis orci ut, blandit quam. Donec in
              elit auctor, finibus quam in, phar
            </p2>
          </div>

          <img src={info}alt="info" />
        </div>
      </div>

      <div className="section6">
      <div className="subsectionHeading">
            <h1> Live Campaigns</h1>

          </div>
          <Carousel />
      </div>
    

      {/* section6*/}
      <div className="section2">
        <div className="headingSection">
          <div className="headingText">
            <h1>UGC</h1>
            <h4> Lorem ipsum dolor sit amet, consectetur adipiscing</h4>
          </div>
          <button className="ViewButton">View All</button>
        </div>

        <div className="ogCards">
          <Card
            image={
              "https://yt3.googleusercontent.com/UnHiAzDe4BrX1crihFtyFV2IM2a12i0sj41153RUIoCkazMbVX4otYdmFAKmaxO4psixK9Sriw=s160-c-k-c0x00ffffff-no-rj"
            }
            name={"Tanmay Bhatt"}
            userName={"tanmaybhat"}
            followers={"1.9M"}
          />

          <Card
            image={"https://thebiodiary.com/uploads/bio/kusha_kapila-1.jpg"}
            name={"Kusha Kapila"}
            userName={"kushakapila"}
            followers={"3.7M"}
          />
          <Card
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2gXm8G6synGIggtosV_XAXu9aHOX6iX1_pFjZlGZ1RYJXStKF"
            }
            name={"Rohan Joshi"}
            userName={"mojorojo"}
            followers={"597K"}
          />
          <Card
            image={
              "https://iansportalimages.s3.amazonaws.com/thumbnails/202401103103550.jpeg"
            }
            name={"Bhuvan Bam"}
            userName={"bhuvan.bam22"}
            followers={"19.4M"}
          />
        </div>
      </div>

      <div className="section7">
       <h1 className="subsectionHeading"> Associated Brands</h1>
      <h6> Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
      <img src={logos} alt="" />
      </div>

      <div className="section7">
      <h1 className="subsectionHeading">How it works</h1>
      <img src={lastImage} alt="" />
      <div className="lasttext">
      <div className="text1">
      <h5> Search</h5>
      <p> Search through thousands of creators 
      for free and find the one best suited 
      for the campaign.</p>
      </div>
      <div className="text1">
      <h5>  Share & Review</h5>
      <p> Search through thousands of creators 
      for free and find the one best suited 
      for the campaign.</p>
      </div>
      <div className="text1">
      <h5> Pay Securly  </h5>
      <p> Search through thousands of creators 
      for free and find the one best suited 
      for the campaign.</p>
      </div>

      
      </div>
      
      </div>




    </div>
  );
};

export default Home;
