class SocialMedia extends React.Component {
  render() {
    const brandInfo = [
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

    const links = brandInfo.map(
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
    return (<p>{links}</p>);
  }
}

class Signature extends React.Component {
  constructor(props) {
    super(props);
    this.parseMobile = this.parseMobile.bind(this);
  }

  parseMobile(mobileNum) {
    if (mobileNum === undefined) return null;

    const multiSplice = (toAddIndexes, val, array) => toAddIndexes.forEach((index) => array.splice(index, 0, val));

    const mobileFormatted = mobileNum.replace(/\s/g, '');
    const numberArr = mobileFormatted.split('');

    if (mobileFormatted.length === 10) {
      multiSplice([4, 8], '&nbsp;', numberArr);
    }
    else if (mobileNum.length === 11) {
      numberArr.splice(0, 0, '+');
      multiSplice([3, 7, 11], '&nbsp;', numberArr);
    } else if (mobileNum.length === 12) {
      multiSplice([3, 7, 11], '&nbsp;', numberArr);
    }
    else {
      return mobileFormatted;
    }
    return numberArr.join('');
  };

  render() {
    const brandInfo = {
      brandName: 'Readify',
      brandLink: 'https://readify.net',
      brandLinkName: 'readify.net',
      brandLogo: {
        link: 'https://readifysignatures.blob.core.windows.net/images/image001.png',
        alt: 'Readify a Telstra Company'
      },
    };

    const { name, title, qualifications, mobile, email, twitter, isSupport } = this.props;

    const placeholders = this.props.placeholders;

    let mobileHtml;
    if (mobile !== '') {
      mobileHtml = <a href={`tel:${this.parseMobile(mobile).replace(/&nbsp;/g, '')}`}
                      dangerouslySetInnerHTML={{ __html: this.parseMobile(mobile) }}/>;
    } else {
      mobileHtml = placeholders.mobile;
    }

    const emailHtml = <a href={`mailto:${email || placeholders.email}`}>{email || placeholders.email}</a>;

    let supportMobile, supportEmail = <span>&nbsp;&nbsp;</span>;
    if (isSupport) {
      supportMobile = <span>
        |&nbsp;<b>Support&nbsp;Hotline</b>&nbsp;1800&nbsp;READIFY<br/>
      </span>;
      supportEmail = <span>
        |&nbsp;<b>Support&nbsp;Email</b>&nbsp;<a href={'mailto:support@readify.net'}>support@readify.net</a><br/>
      </span>;
    }

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
                src={brandInfo.brandLogo.link}
                alt={brandInfo.brandLogo.alt}/>
            </td>
            <td valign="top" style={{ paddingLeft: '20px' }}>
              <p style={{ marginBottom: '10px' }}>
                <b>{name || 'Graeme Strange'}</b>
                <br/>
                {brandInfo.brandName} | {title || placeholders.title}
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
                  <a href={brandInfo.brandLink}>{brandInfo.brandLinkName}</a>
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
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title: '',
      qualifications: '',
      mobile: '',
      email: '',
      twitter: '',
      isSupport: false,
    };
    this.handleChange = this.handleChange.bind(this);
    Form.copySignature = Form.copySignature.bind(this);
  }

  handleChange(stateObj) {
    this.setState(stateObj);
  }

  static copySignature(props) {
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
  }

  render() {
    const labels = {
      name: 'Your Name:',
      title: 'Job Title:',
      email: 'Email:',
      mobile: 'Mobile:',
      twitter: 'Twitter: (Optional)',
      qualifications: 'Qualifications: (Optional)',
      isSupport: 'Are you Readify Support?'
    };

    const placeholders = {
      name: 'Graeme Strange',
      title: 'Senior Consultant',
      email: 'graeme.strange@readify.net',
      mobile: '+61 400 111 222',
      twitter: '@myTwitter',
      qualifications: 'Jedi Master | PSM I'
    };

    const inputs = Object.keys(this.state).map(
      (inputName) => (<tr key={inputName}>
        <td className="col-md-4">{labels[inputName]}</td>
        <td className="col-md-4">
          <input className={inputName === 'isSupport' ? '' : 'form-control'}
                 placeholder={placeholders[inputName]}
                 style={{ width: '300px' }}
                 value={this.state[inputName] || ''}
                 {...(inputName === 'isSupport' ? { type: 'checkbox' } : {})}
                 onChange={(e) => this.handleChange({ [inputName]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })}/>
        </td>
      </tr>)
    );

    return (<form>
      <div className="form-group">
        <div className="col-md-8">
          <table className="table table-striped">
            <tbody>
            {inputs}
            </tbody>
          </table>
          <button type="button" className="btn btn-primary"
                  onClick={() => Form.copySignature({ ...this.state, placeholders })}>Copy Signature
          </button>
          <hr/>
          <Signature {...this.state} placeholders={placeholders}/>
        </div>
        <div className="col-md-4"/>
      </div>
    </form>);
  }
}

class Header extends React.Component {
  render() {
    const brandInfo = {
      appName: 'Readify Outlook Signature',
      brandLink: 'https://readify-signatures.azurewebsites.net/'
    };

    return (<div>
      <div id="Header" className="col-md-12">
        <div className="row">
          <div className="col-md-2"/>
          <div className="col-md-10" style={{ paddingLeft: '0px' }}>
            <a className="navbar-brand" href={brandInfo.brandLink}>{brandInfo.appName}</a>
          </div>
        </div>
        <div className="navbar-collapse collapse"/>
      </div>
    </div>);
  }
}

class Info extends React.Component {
  render() {
    return (<div>
      <h3>Create your signature</h3>
      <ol>
        <li>Enter your details.</li>
        <li>Click the "Copy Signature" button</li>
        <li>Open outlook</li>
        <li>
          <a
            href="https://support.office.com/en-us/article/create-and-add-a-signature-to-messages-8ee5d4f4-68fd-464a-a1c1-0e1c80bb27f2"
            target="_blank">
            Paste selection into signature editor
          </a>
        </li>
      </ol>
      <br/>
    </div>);
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
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
  }
}

ReactDOM.render(<App/>
  ,
  document.getElementById('app')
);