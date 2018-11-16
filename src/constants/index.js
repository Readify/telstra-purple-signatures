export const readify = {
  brandInfo: {
    brandName: 'Readify',
    brandLink: 'https://readify.net',
    brandLinkName: 'readify.net',
    brandLogo: {
      link:
        'https://readifysignatures.blob.core.windows.net/images/image001.png',
      alt: 'Readify a Telstra Company'
    },
    supportEmail: 'support@readify.net',
    supportMobile: '&nbsp;1800&nbsp;READIFY'
  },

  placeholders: {
    name: 'Your Name',
    title: 'Job Title',
    email: 'your.name@readify.net',
    mobile: '+61 111 222 333',
    twitter: '@myTwitter',
    qualifications: 'Jedi Master | PSM I'
  }
};

export const btsDigital = {
  brandInfo: {
    brandName: 'Business Technology Services - Digital',
    brandSecondaryText: 'Telstra Enterprise',
    brandLink: 'https://telstra.com/enterprise',
    brandLinkName: 'telstra.com/enterprise',
    brandImages: {
      readify: {
        width: 38,
        link: 'https://readify.net',
        img:
          'https://readifysignatures.blob.core.windows.net/images/readify.png',
        alt: 'Readify'
      },
      kloud: {
        width: 32,
        link: 'https://www.kloud.com.au',
        img: 'https://readifysignatures.blob.core.windows.net/images/kloud.png',
        alt: 'Kloud'
      },
      telstra: {
        width: 24,
        link: 'https://telstra.com/enterprise',
        img:
          'https://readifysignatures.blob.core.windows.net/images/telstra.png',
        alt: 'Telstra'
      }
    }
  },

  placeholders: {
    name: 'Your Name',
    title: 'Job Title',
    email: 'your.name@team.telstra.com',
    mobile: '+61 111 222 333',
    phone: '+61 8 1234 5678',
    twitter: '@myTwitter',
    qualifications: 'Sith Lord'
  }
};

export default { btsDigital, readify };
