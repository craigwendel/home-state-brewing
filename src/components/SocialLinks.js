import React from 'react';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';

export default function SocialLinks({ color, youTube, email }) {
  return (
    <div>
      <IconButton>
        <Link href="https://facebook.com" target="_blank">
          <FacebookIcon color={color} />
        </Link>
      </IconButton>
      <IconButton>
        <Link href="https://www.instagram.com/homestatebrewing" target="_blank">
          <InstagramIcon color={color} />
        </Link>
      </IconButton>
      <IconButton>
        <Link href="https://twitter.com/HomeStateBrew" target="_blank">
          <TwitterIcon color={color} />
        </Link>
      </IconButton>
      {youTube && (
        <IconButton>
          <Link href="https://youtube.com" target="_blank">
            <YouTubeIcon color={color} />
          </Link>
        </IconButton>
      )}
      {email && (
        <IconButton>
          <Link>
            <EmailIcon color={color} />
          </Link>
        </IconButton>
      )}
    </div>
  );
}
