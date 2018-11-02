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
    const { name, title, qualifications, mobile, email, twitter, isSupport } = this.props;
    return (
      <div>
        <div>
          <table border="0" cellSpacing="0" cellPadding="0" width="100%"
                 style={{
                   color: '#3D5567',
                   fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
                   fontSize: '10.5pt'
                 }}>
            <tbody>
            <tr>
              <td valign="top" style={{ borderRight: '1px solid #3D5567', paddingRight: '20px', width: '76px' }}>
                <img
                  width="73" height="53"
                  src="https://s3-ap-southeast-2.amazonaws.com/readify-signatures/image001.png"
                  alt="Readify a Telstra Company"/>
              </td>

              <td valign="top" style={{ paddingLeft: '20px' }}>
                <p style={{ marginBottom: '10px' }}>
                  <b>{name || 'Graeme Strange'}</b>
                  <br/>
                  Readify | {title || 'Senior Consultant'}
                </p>

                {qualifications ? <p style={{ marginBottom: '10px' }}>{qualifications}</p> : null}

                <p style={{ marginBottom: '10px' }}>
                  <span
                    className="white-space:nowrap;"><b>M</b>&nbsp;{<span
                    dangerouslySetInnerHTML={{ __html: this.parseMobile(mobile) }}/> || '+64 400 111 222'}&nbsp;
                    {isSupport ? <span>|&nbsp;<b>Support Hotline</b>&nbsp;1800&nbsp;READIFY<br/></span> :
                      <span>&nbsp;&nbsp;</span>}</span>
                  <span>
                    <b>E</b>
                    &nbsp;
                    <a
                      href={`mailto:${email || 'graeme.strange@readify.net'}`}>{email || 'graeme.strange@readify.net'}</a>
                    &nbsp;{isSupport ? <span>|&nbsp;<b>Support Email</b>&nbsp;support@readify.net<br/></span> :
                    <span>&nbsp;&nbsp;</span>}
                  </span>
                  {twitter ?
                    <span><b>T</b>&nbsp;{twitter || '@mytwitter'}&nbsp;&nbsp;&nbsp;</span> : null}
                  <span><b>W</b>&nbsp;readify.net</span>
                </p>

                <p>
                  <a style={{ display: 'inline-block', width: '28px', height: '28px' }}
                     href="https://readify.net/links/facebook">
                    <img
                      width="28" height="28"
                      src="https://s3-ap-southeast-2.amazonaws.com/readify-signatures/image002.png"
                      alt="Readify on FaceBook"/>
                  </a>&nbsp;&nbsp;
                  <a style={{ display: 'inline-block', width: '28px', height: '28px' }}
                     href="https://readify.net/links/twitter">
                    <img
                      width="28" height="28"
                      src="https://s3-ap-southeast-2.amazonaws.com/readify-signatures/image003.png"
                      alt="Readify on Twitter"/>
                  </a>&nbsp;&nbsp;
                  <a style={{ display: 'inline-block', width: '28px', height: '28px' }}
                     href="https://readify.net/links/linkedin">
                    <img
                      width="28" height="28"
                      src="https://s3-ap-southeast-2.amazonaws.com/readify-signatures/image004.png"
                      alt="Readify on LinkedIn"/>
                  </a>&nbsp;&nbsp;
                  <a style={{ display: 'inline-block', width: '28px', height: '28px' }}
                     href="https://readify.net/links/youtube">
                    <img
                      width="28" height="28"
                      src="https://s3-ap-southeast-2.amazonaws.com/readify-signatures/image005.png"
                      alt="Readify on YouTube"/>
                  </a>
                </p>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
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
  }

  handleChange(stateObj) {
    this.setState(stateObj);
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
      email: 'joe.bloggs@kloud.com.au',
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
          <hr/>
        </div>
        <Signature {...this.state}/>
        <div className="col-md-4"/>
      </div>
    </form>);
  }
}

ReactDOM.render(<Form/>
  ,
  document.getElementById('app')
);