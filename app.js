class SocialMedia extends React.Component {
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
    return (<p>{SocialMedia.htmlLinks()}</p>);
  }
}

class Signature extends React.Component {
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

  constructor(props) {
    super(props);
  }

  parseMobile = (mobileNum) => {
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

  renderSupportFields = () => {
    const { mobile, email, placeholders, isSupport } = this.props;

    const generateMobileHtml = (number) => <a
      href={`tel:${this.parseMobile(number).replace(/&nbsp;/g, '')}`}
      dangerouslySetInnerHTML={{ __html: this.parseMobile(number) }}
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

  render() {
    const { brandName, brandLink, brandLinkName, brandLogo } = Signature.brandInfo;

    const { name, title, qualifications, twitter, isSupport, placeholders } = this.props;

    const { mobileHtml, emailHtml, supportMobile, supportEmail } = this.renderSupportFields();

    const twitterLink = <a href={`https://twitter.com/${twitter.replace('@', '')}`} target="_blank">{twitter}</a>;
    const twitterHtml = twitter ? <span><b>T</b>&nbsp; {twitterLink}&nbsp;&nbsp;&nbsp;</span> : null;

    // Note: css classes do not work for email so you need to use inline styles!
    // Adding a tbody causes the email sig to break in certain clients :'(
    return (
      <div>
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
                {brandName} | {title || placeholders.title}
              </p>
              {qualifications ? <p style={{ marginBottom: '10px' }}>{qualifications}</p> : null}
              <p style={{ marginBottom: '10px' }}>
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
      </div>
    );
  }
}

class Form extends React.Component {
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
      button: { buttonClass: 'btn btn-primary', buttonText: 'Copy Signature' },
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

  copySignature = (props) => {
    // You need to copy the signature as richtext html if you want it to paste nicely into outlook
    // credit: https://stackoverflow.com/questions/34191780/javascript-copy-string-to-clipboard-as-text-html
    const html = ReactDOMServer.renderToStaticMarkup(<Signature {...props}/>);

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

    this.setState(() => ({
      ...this.state,
      button: { buttonClass: 'btn btn-success fadeColor', buttonText: 'Copied!' }
    }), () => setTimeout(() => this.setState({
      button: {
        buttonClass: 'btn btn-primary',
        buttonText: 'Copy Signature'
      }
    }), 1000));
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
    const { buttonClass, buttonText } = this.state;

    return (<form>
      <div className="form-group">
        <div className="col-md-8">
          <table className="table table-striped">
            <tbody>
            {inputs}
            </tbody>
          </table>
          <button type="button" className={buttonClass}
                  onClick={() => (this.copySignature({ ...formInputs, placeholders: Form.placeholders }))}>
            {buttonText}
          </button>
          <hr/>
          <Signature {...formInputs} placeholders={Form.placeholders}/>
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
        <div className="col-md-2"/>
        <div className="col-md-10" style={{ paddingLeft: '0px' }}>
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
      <div className="col-md-2"/>
      <div className="col-md-8">
        <Info/>
        <Form/>
      </div>
      <div className="col-md-2"/>
    </div>
  </div>
);

ReactDOM.render(<App/>,document.getElementById('app'));