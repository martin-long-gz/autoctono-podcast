import Link from 'next/link';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';

const about = () => {
  return (
    <div className="flex items-center justify-center m-auto bg-black h-24 w-full mt-20">
      <div className="flex items-center justify-between w-52">
        <Link
          href="https://open.spotify.com/show/60sFQiOyol3dXeK6itoXTJ?si=3b5c7d72bda14e1f"
          passHref
        >
          <FaSpotify fill="white" size={33} className="cursor-pointer" />
        </Link>
        <Link href="https://www.instagram.com/autoctono_podcast" passHref>
          <FaInstagram fill="white" size={33} className="cursor-pointer" />
        </Link>
        <Link href="https://www.youtube.com/@Autoctonopodcast" passHref>
          <FaYoutube fill="white" size={33} className="cursor-pointer" />
        </Link>
        <Link href="https://www.tiktok.com/@autoctono" passHref>
          <FaTiktok fill="white" size={33} className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default about;
