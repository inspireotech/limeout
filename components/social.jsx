import React from 'react';
import { socialMedia } from 'data\index.ts';

const SocialMediaIcons = () => {
  return (
    <div>
      {socialMedia.map((item) => (
        <a
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 10px' }} // Optional: Add some spacing between icons
        >
          <img
            src={item.img}
            alt={`Social media icon ${item.id}`}
            style={{ width: '30px', height: '30px' }} // Optional: Set icon size
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
