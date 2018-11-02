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
    const { name, title, qualifications, mobile, email, twitter } = this.props;

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
                    dangerouslySetInnerHTML={{ __html: this.parseMobile(mobile) }}/> || '+64 400 111 222'}&nbsp;&nbsp;&nbsp;</span>
                  <span><b>E</b>&nbsp;<a
                    href={`mailto:${email || 'graeme.strange@readify.net'}`}>{email || 'graeme.strange@readify.net'}</a>&nbsp;&nbsp;&nbsp;</span>
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
      twitter: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(stateObj) {
    this.setState(stateObj);
  }

  render() {
    const { name, title, qualifications, mobile, email, twitter } = this.state;
    return (<form>
      <div className="form-group">
        <div className="col-md-8">
          <table className="table table-striped">
            <tbody>
            <tr>
              <td className="col-md-4">Your Name:</td>
              <td className="col-md-4">
                <input className="form-control"
                       placeholder="Graeme Strange"
                       style={{ width: '300px' }}
                       value={name || ''} onChange={(e) => this.handleChange({ name: e.target.value })}/>
              </td>
            </tr>
            <tr>
              <td className="col-md-4">Job Title:</td>
              <td className="col-md-4">
                <input className="form-control"
                       placeholder="Senior Consultant"
                       style={{ width: '300px' }}
                       value={title || ''} onChange={(e) => this.handleChange({ title: e.target.value })}/>
              </td>
            </tr>
            <tr>
              <td className="col-md-4">Email:</td>
              <td className="col-md-4">
                <input className="form-control"
                       placeholder="joe.bloggs@kloud.com.au"
                       style={{ width: '300px' }}
                       value={email || ''} onChange={(e) => this.handleChange({ email: e.target.value })}/>
              </td>
            </tr>
            <tr>
              <td className="col-md-4">Mobile:</td>
              <td className="col-md-4">
                <input className="form-control"
                       placeholder="+61 400 111 222"
                       style={{ width: '300px' }}
                       value={mobile || ''} onChange={(e) => this.handleChange({ mobile: e.target.value })}/>
              </td>
            </tr>
            <tr>
              <td className="col-md-4">Twitter: (Optional)</td>
              <td className="col-md-4">
                <input className="form-control"
                       placeholder="@myTwitter"
                       style={{ width: '300px' }}
                       value={twitter || ''} onChange={(e) => this.handleChange({ twitter: e.target.value })}/>
              </td>
            </tr>
            <tr>
              <td className="col-md-4">Qualifications: (Optional)</td>
              <td className="col-md-4">
                <input className="form-control"
                       placeholder="Jedi Master | PSM I"
                       style={{ width: '300px' }}
                       value={qualifications || ''}
                       onChange={(e) => this.handleChange({ qualifications: e.target.value })}/>
              </td>
            </tr>
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