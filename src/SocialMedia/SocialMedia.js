import React, { Component } from 'react';

class SocialMedia extends Component {
  static brandInfo = [
    {
      name: 'Facebook',
      link: 'https://readify.net/links/facebook',
      image:
        'https://readifysignatures.blob.core.windows.net/images/image002.png',
      alt: 'Readify on Facebook'
    },
    {
      name: 'Twitter',
      link: 'https://readify.net/links/twitter',
      image:
        'https://readifysignatures.blob.core.windows.net/images/image003.png',
      alt: 'Readify on Twitter'
    },
    {
      name: 'LinkedIn',
      link: 'https://readify.net/links/linkedin',
      image:
        'https://readifysignatures.blob.core.windows.net/images/image004.png',
      alt: 'Readify on LinkedIn'
    },
    {
      name: 'YouTube',
      link: 'https://readify.net/links/youtube',
      image:
        'https://readifysignatures.blob.core.windows.net/images/image005.png',
      alt: 'Readify on YouTube'
    }
  ];

  static htmlLinks = () =>
    SocialMedia.brandInfo.map((mediaObj, index, arr) => (
      <span key={mediaObj.name}>
        <a
          style={{ display: 'inline-block', width: '28px', height: '28px' }}
          href={mediaObj.link}
        >
          <img width="28" height="28" src={mediaObj.image} alt={mediaObj.alt} />
        </a>
        {index < arr.length - 1 ? <span>&nbsp;&nbsp;</span> : null}
      </span>
    ));

  render() {
    return <p style={{ marginBottom: '0' }}>{SocialMedia.htmlLinks()}</p>;
  }
}

export default SocialMedia;
