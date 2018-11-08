import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import './App.css';

class SocialMedia extends Component {
  static brandInfo = [
    {
      name: 'FaceBook',
      link: 'https://readify.net/links/facebook',
      image: 'https://readifysignatures.blob.core.windows.net/images/image002.png',
      alt: 'Readify on FaceBook',
    },
    {
      name: 'Twitter',
      link: 'https://readify.net/links/twitter',
      image: 'https://readifysignatures.blob.core.windows.net/images/image003.png',
      alt: 'Readify on Twitter',
    },
    {
      name: 'LinkedIn',
      link: 'https://readify.net/links/linkedin',
      image: 'https://readifysignatures.blob.core.windows.net/images/image004.png',
      alt: 'Readify on LinkedIn',
    },
    {
      name: 'Youtube',
      link: 'https://readify.net/links/youtube',
      image: 'https://readifysignatures.blob.core.windows.net/images/image005.png',
      alt: 'Readify on Youtube',
    },
  ];

  static htmlLinks = () => SocialMedia.brandInfo.map(
    (mediaObj, index, arr) => (
      <span key={mediaObj.name}>
          <a style={{ display: 'inline-block', width: '28px', height: '28px' }}
             href={mediaObj.link}>
          <img
            width="28" height="28"
            src={mediaObj.image}
            alt={mediaObj.alt}/>
        </a>{index < (arr.length - 1) ? <span>&nbsp;&nbsp;</span> : null}
        </span>
    ));

  render() {
    return (<p style={{ marginBottom: '0' }}>{SocialMedia.htmlLinks()}</p>);
  }
}

const SignatureHtml = props => {
  const {
    brandLogo,
    name,
    placeholders,
    brandName,
    title,
    isSupport,
    qualifications,
    mobileHtml,
    supportMobile,
    emailHtml,
    supportEmail,
    twitterHtml,
    brandLink,
    brandLinkName,
  } = props;
  return <div>
    <table border="0" cellSpacing="0" cellPadding="0" width="100%"
           style={{
             color: '#3D5567',
             fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
             fontSize: '10.5pt'
           }}>
      <tr>
        <td valign="top" style={{ borderRight: '1px solid #3D5567', paddingRight: '20px', width: '76px' }}>
          <img
            width="73" height="53"
            src={brandLogo.link}
            alt={brandLogo.alt}/>
        </td>
        <td valign="top" style={{ paddingLeft: '20px' }}>
          <p style={{ marginBottom: '10px' }}>
            <b>{name || placeholders.name}</b>
            <br/>
            {brandName}&nbsp;|&nbsp;{title || placeholders.title}
          </p>
          {qualifications ? <p style={{ marginBottom: '10px' }}>{qualifications}</p> : null}
          <p style={{ marginBottom: '20px' }}>
                <span>
                  <b>M</b>
                  &nbsp;{mobileHtml}
                  &nbsp;{supportMobile}
                </span>
            {isSupport ? null : <span>&nbsp;&nbsp;</span>}
            <span>
                  <b>E</b>
              &nbsp;{emailHtml}
              &nbsp;{supportEmail}
                </span>
            {twitterHtml}
            <span>
                  <b>W</b>&nbsp;
              <a href={brandLink}>{brandLinkName}</a>
                </span>
          </p>
          <SocialMedia/>
        </td>
      </tr>
    </table>
  </div>;
};

const RepliesAndForwards = props => {
  const {
    name,
    placeholders,
    brandName,
    title,
    isSupport,
    mobileHtml,
    emailHtml,
    twitterHtml,
    brandLink,
    brandLinkName,
  } = props;
  const styleObj = {
    color: '#3D5567',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    fontSize: '10.5pt'
  };
  return <div>
    <p style={styleObj}>
      --<br/>
      <b>{name || placeholders.name}&nbsp;|&nbsp;{brandName} {title || placeholders.title}</b><br/>
      <b>M</b>&nbsp;&nbsp;{mobileHtml}&nbsp;|&nbsp;
      <b>E</b>&nbsp;&nbsp;{emailHtml}&nbsp;|&nbsp;
      {twitterHtml ? <span>{twitterHtml}|&nbsp;</span> : null}
      <b>W</b> <a href={brandLink}>{brandLinkName}</a>
      {isSupport ? <span>
        <br/><b>Support&nbsp;Hotline</b>&nbsp;<span
        dangerouslySetInnerHTML={{ __html: Signature.brandInfo.supportMobile }}/>&nbsp;|&nbsp;
        <b>Support&nbsp;Email</b>&nbsp;{Signature.brandInfo.supportEmail}
      </span> : null}
    </p>
  </div>;
};

class Signature extends Component {
  static brandInfo = {
    brandName: 'Readify',
    brandLink: 'https://readify.net',
    brandLinkName: 'readify.net',
    brandLogo: {
      link: 'https://readifysignatures.blob.core.windows.net/images/image001.png',
      alt: 'Readify a Telstra Company'
    },
    supportEmail: 'support@readify.net',
    supportMobile: '&nbsp;1800&nbsp;READIFY'
  };

  static parseMobile = (mobileNum) => {
    if (mobileNum === undefined) return null;

    const multiSplice = (toAddIndexes, val, array) => toAddIndexes.forEach((index) => array.splice(index, 0, val));

    const mobileFormatted = mobileNum.replace(/[\s|+]/g, '');
    const numberArr = mobileFormatted.split('');

    if (mobileFormatted.length === 10) {
      multiSplice([4, 8], '&nbsp;', numberArr);
    }
    else if (mobileFormatted.length === 11) {
      numberArr.splice(0, 0, '+');
      multiSplice([3, 7, 11], '&nbsp;', numberArr);
    } else if (mobileFormatted.length === 12) {
      multiSplice([3, 7, 11], '&nbsp;', numberArr);
    }
    else {
      return mobileFormatted;
    }
    return numberArr.join('');
  };

  static defaultButtonText = {
    text: 'Copy text only',
    html: 'Copy Signature'
  };

  constructor(props) {
    super(props);
    this.state = {
      button: {
        buttonClassHtml: 'btn btn-primary',
        buttonTextHtml: Signature.defaultButtonText.html,
        buttonClassTextSig: 'btn btn-default',
        buttonTextTextSig: Signature.defaultButtonText.text,
        buttonClassTextRAF: 'btn btn-default',
        buttonTextTextRAF: Signature.defaultButtonText.text,
        buttonClassRAF: 'btn btn-primary',
        buttonTextRAF: Signature.defaultButtonText.html,
      },
    };
  }

  renderSupportFields = () => {
    const { mobile, email, placeholders, isSupport } = this.props;

    const generateMobileHtml = (number) => <a
      href={`tel:${Signature.parseMobile(number).replace(/&nbsp;/g, '')}`}
      dangerouslySetInnerHTML={{ __html: Signature.parseMobile(number) }}
    />;

    const mobileHtml = generateMobileHtml(mobile !== '' ? mobile : placeholders.mobile);

    const emailHtml = <a href={`mailto:${email || placeholders.email}`}>{email || placeholders.email}</a>;

    const supportHtml = [
      <span>
        |&nbsp;<b>Support&nbsp;Hotline</b><span
        dangerouslySetInnerHTML={{ __html: Signature.brandInfo.supportMobile }}/><br/>
      </span>,
      <span>
        |&nbsp;<b>Support&nbsp;Email</b>&nbsp;<a
        href={`mailto:${Signature.brandInfo.supportEmail}`}>{Signature.brandInfo.supportEmail}</a><br/>
      </span>
    ];

    const [supportMobile, supportEmail] = isSupport ? supportHtml : [<span>&nbsp;&nbsp;</span>,
      <span>&nbsp;&nbsp;</span>];

    return { mobileHtml, emailHtml, supportMobile, supportEmail };
  };

  setStateFunctionMaker = (beforeState, afterState) => () => this.setState(
    (state) => ({
      ...state,
      button: {
        ...state.button,
        ...beforeState
      }
    }),
    () => setTimeout(() => this.setState(state => ({
      button: {
        ...state.button,
        ...afterState
      }
    })), 1000));

  copyText = (text) => {
    const container = document.createElement('textarea');
    container.value = text;
    document.body.appendChild(container);
    container.select();
    document.execCommand('copy');
    document.body.removeChild(container);
  };

  copySignatureText = (props) => {
    const { name, title, qualifications, mobile, email, twitter, isSupport } = props;
    const mobileText = Signature.parseMobile(mobile).replace(/&nbsp;/g, ' ');

    const textArr = [
      '--',
      '',
      name ? name : null,
      title ? `Readify | ${title}` : null,
      qualifications ? `${qualifications}` : null,
      '',
      mobileText ? `M ${mobileText}${isSupport ? ` | Support hotline${Signature.brandInfo.supportMobile.replace(/&nbsp;/g, ' ')}` : ''}` : null,
      email ? `E ${email}${isSupport ? ` | Support email ${Signature.brandInfo.supportEmail}` : ''}` : null,
      twitter ? `T ${twitter}` : null,
      'W readify.net',
      '',
      'Find us on: Twitter | LinkedIn | Facebook | Youtube'
    ];

    this.copyText(textArr.filter(val => val !== null).join('\n'));

    this.setStateFunctionMaker(
      {
        buttonClassTextSig: 'btn btn-success fadeColor',
        buttonTextTextSig: 'Copied!'
      },
      {
        buttonClassTextSig: 'btn btn-default',
        buttonTextTextSig: Signature.defaultButtonText.text
      }
    )();
  };

  copyRepliesAndForwardsText = (props) => {
    const { name, title, mobile, email, twitter, isSupport } = props;
    const mobileText = Signature.parseMobile(mobile).replace(/&nbsp;/g, ' ');

    const textArr = [
      '--',
      `${name}, Readify | ${title}`,
      `M ${mobileText} | E ${email}${twitter ? ` | T ${twitter}` : ''} | W ${Signature.brandInfo.brandLinkName}`,
      isSupport ? `Support hotline${Signature.brandInfo.supportMobile.replace(/&nbsp;/g, ' ')} | Support email ${Signature.brandInfo.supportEmail}` : null,
    ];

    this.copyText(textArr.filter(val => val !== null).join('\n'));

    this.setStateFunctionMaker(
      {
        buttonClassTextRAF: 'btn btn-success fadeColor',
        buttonTextTextRAF: 'Copied!'
      },
      {
        buttonClassTextRAF: 'btn btn-default',
        buttonTextTextRAF: Signature.defaultButtonText.text
      }
    )();
  };

  copySignature = (props, SignatureComponent, setStateFunction) => {
    // You need to copy the signature as richtext html if you want it to paste nicely into outlook
    // credit: https://stackoverflow.com/questions/34191780/javascript-copy-string-to-clipboard-as-text-html
    const html = ReactDOMServer.renderToStaticMarkup(<SignatureComponent {...props}/>);

    const container = document.createElement('div');
    container.innerHTML = html;

    container.style.position = 'fixed';
    container.style.pointerEvents = 'none';
    container.style.opacity = '0';

    document.body.appendChild(container);

    window.getSelection().removeAllRanges();

    const range = document.createRange();
    range.selectNode(container);
    window.getSelection().addRange(range);

    document.execCommand('copy');

    document.body.removeChild(container);

    setStateFunction();
  };

  render() {
    const { brandName, brandLink, brandLinkName, brandLogo } = Signature.brandInfo;

    const { name, title, qualifications, twitter, isSupport, placeholders, mobile, email } = this.props;

    const { mobileHtml, emailHtml, supportMobile, supportEmail } = this.renderSupportFields();

    const twitterLink = <a href={`https://twitter.com/${twitter.replace('@', '')}`} target="_blank">{twitter}</a>;
    const twitterHtml = twitter ? <span><b>T</b>&nbsp;{twitterLink}&nbsp;&nbsp;&nbsp;</span> : null;

    const signatureHtmlProps = {
      mobile,
      brandLogo,
      name,
      placeholders,
      brandName,
      title,
      isSupport,
      qualifications,
      mobileHtml,
      supportMobile,
      emailHtml,
      email,
      twitter,
      supportEmail,
      twitterHtml,
      brandLink,
      brandLinkName,
    };


    const setStateFunctionHTML = this.setStateFunctionMaker(
      {
        buttonClassHtml: 'btn btn-success fadeColor',
        buttonTextHtml: 'Copied!'
      },
      {
        buttonClassHtml: 'btn btn-primary',
        buttonTextHtml: Signature.defaultButtonText.html
      }
    );

    const setStateFunctionRAF = this.setStateFunctionMaker(
      {
        buttonClassRAF: 'btn btn-success fadeColor',
        buttonTextRAF: 'Copied!'
      },
      {
        buttonClassRAF: 'btn btn-primary',
        buttonTextRAF: Signature.defaultButtonText.html
      }
    );

    const {
      buttonClassHtml,
      buttonTextHtml,
      buttonClassTextSig,
      buttonTextTextSig,
      buttonClassRAF,
      buttonTextRAF,
      buttonClassTextRAF,
      buttonTextTextRAF
    } = this.state.button;

    const styleRight = { flex: 1, display: 'flex', justifyContent: 'flex-end' };


    // Note: css classes do not work for email so you need to use inline styles!
    // Adding a tbody causes the email sig to break in certain clients :'(
    return <div className="sig-grid">
      <div className="sig-grid row">
        <h3 style={{ margin: '0 1rem 1rem 0' }}>Standard Signature</h3>
        <div style={styleRight}>
          <button type="button" className={buttonClassTextSig}
                  onClick={() => (this.copySignatureText({ ...signatureHtmlProps, placeholders: Form.placeholders }))}>
            {buttonTextTextSig}
          </button>
          <button type="button" className={buttonClassHtml}
                  onClick={
                    () => (this.copySignature({
                        ...signatureHtmlProps,
                        placeholders: Form.placeholders
                      }, SignatureHtml, setStateFunctionHTML)
                    )}>
            {buttonTextHtml}
          </button>
        </div>
      </div>
      <div className="sig-grid row">
        <SignatureHtml {...signatureHtmlProps} />
      </div>
      <div className="sig-grid row" style={{ marginTop: '2rem' }}>
        <h3 style={{ margin: '0 1rem 1rem 0' }}>Replies and Forwards Signature</h3>
        <div style={styleRight}>
          <button type="button" className={buttonClassTextRAF}
                  onClick={() => (this.copyRepliesAndForwardsText({ ...signatureHtmlProps, placeholders: Form.placeholders }))}>
            {buttonTextTextRAF}
          </button>
          <button type="button" className={buttonClassRAF}
                  onClick={
                    () => (
                      this.copySignature({
                        ...signatureHtmlProps,
                        placeholders: Form.placeholders
                      }, RepliesAndForwards, setStateFunctionRAF)
                    )}>
            {buttonTextRAF}
          </button>
        </div>
      </div>
      <div className="sig-grid row">
        <RepliesAndForwards {...signatureHtmlProps} />
      </div>
    </div>;
  }
}

class Form extends Component {
  static labels = {
    name: 'Your Name:',
    title: 'Job Title:',
    email: 'Email:',
    mobile: 'Mobile:',
    twitter: 'Twitter: (Optional)',
    qualifications: 'Qualifications: (Optional)',
    isSupport: 'Are you Readify Support?'
  };

  static placeholders = {
    name: 'Your Name',
    title: 'Job Title',
    email: 'your.name@readify.net',
    mobile: '+61 111 222 333',
    twitter: '@myTwitter',
    qualifications: 'Jedi Master | PSM I'
  };

  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        name: '',
        title: '',
        qualifications: '',
        mobile: '',
        email: '',
        twitter: '',
        isSupport: false,
      },
    };
  }

  handleChange = (stateObj) => {
    this.setState({ inputs: { ...this.state.inputs, ...stateObj } });
  };

  renderHtmlForInputs = (formInputs) => {
    return Object.keys(formInputs).map(
      inputName => (<tr key={inputName}>
        <td className="col-md-4">{Form.labels[inputName]}</td>
        <td className="col-md-4">
          <input {...(inputName === 'isSupport' ? {} : { className: 'form-control' })}
                 placeholder={Form.placeholders[inputName]}
                 style={{ width: '300px' }}
                 value={formInputs[inputName] || ''}
                 {...(inputName === 'isSupport' ? { type: 'checkbox' } : {})}
                 onChange={(e) => this.handleChange({ [inputName]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })}/>
        </td>
      </tr>)
    );
  };

  render() {
    const formInputs = this.state.inputs;

    const inputs = this.renderHtmlForInputs(formInputs);

    return (<form>
      <div className="form-group">
        <div className="col-md-10">
          <table className="table table-striped">
            <tbody>
            {inputs}
            </tbody>
          </table>
          <hr/>
          <Signature
            {...formInputs}
            placeholders={Form.placeholders}
          />
        </div>
        <div className="col-md-4"/>
      </div>
    </form>);
  }
}

const Header = ({ brandInfo }) => (
  <div>
    <div id="Header" className="col-md-12">
      <div className="row">
        <div className="col-md-1"/>
        <div className="col-md-11" style={{ paddingLeft: '0px' }}>
          <a className="navbar-brand" href={brandInfo.brandLink}>{brandInfo.appName}</a>
        </div>
      </div>
      <div className="navbar-collapse collapse"/>
    </div>
  </div>
);

const Info = () => (
  <div>
    <h3>Create your signature</h3>
    <ol>
      <li>Enter your details.</li>
      <li>Click the "Copy Signature" button</li>
      <li>Open outlook</li>
      <li>
        <a
          style={{ fontWeight: 'bold', textDecoration: 'underline' }}
          href="https://support.office.com/en-us/article/create-and-add-a-signature-to-messages-8ee5d4f4-68fd-464a-a1c1-0e1c80bb27f2"
          target="_blank">
          Paste selection into signature editor
        </a>
        <ul style={{ paddingLeft: '1rem', listStyleType: 'none', paddingTop: '0.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <span style={{ fontWeight: 'bold' }}>Windows: </span>
            Signature > Signatures from the Message menu
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Mac: </span>
            Preferences > Signatures from the Message menu
          </li>
        </ul>
      </li>
    </ol>
    <br/>
  </div>
);

const App = () => (
  <div>
    <Header brandInfo={
      {
        appName: 'Readify Outlook Signature',
        brandLink: 'https://readify-signatures.azurewebsites.net/'
      }
    }/>
    <div>
      <div className="col-md-1"/>
      <div className="col-md-10" style={{paddingBottom: '4rem'}}>
        <Info/>
        <Form/>
      </div>
      <div className="col-md-1"/>
    </div>
  </div>
);

export default App