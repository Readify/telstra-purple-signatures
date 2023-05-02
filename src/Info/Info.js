import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Container>
          <Box>{children}</Box>
        </Container>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="content info">
      <h3 className="title">Create your signature</h3>
      <ol>
        <li>Enter your details below</li>
        <li>Click the `Copy Signature` button</li>
      </ol>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Outlook instructions" {...a11yProps(0)} />
              <Tab label="Gmail Instructions" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ol>
              <li>Open Outlook</li>
              <li>
                <a
                  style={{ fontWeight: 'bold', textDecoration: 'underline' }}
                  href="https://support.office.com/en-us/article/create-and-add-a-signature-to-messages-8ee5d4f4-68fd-464a-a1c1-0e1c80bb27f2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Follow the instuctions provided by Microsoft.
                </a>
                <ul
                  style={{
                    margin: '0',
                    paddingLeft: '1rem',
                    listStyleType: 'none',
                    paddingTop: '0.5rem',
                  }}
                >
                  <li style={{ marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 'bold' }}>Windows: </span>
                    File > Options > Mail > Signatures
                  </li>
                  <li>
                    <span style={{ fontWeight: 'bold' }}>Mac: </span>
                    Outlook > Preferences > Signatures
                  </li>
                  <li>
                    <span style={{ fontWeight: 'bold' }}>
                      Outlook web access (OWA):{' '}
                    </span>
                    Cog (top-right) > "View all Outlook settings" link (bottom)
                    > Mail > Compose and reply > Email signature
                  </li>
                </ul>
              </li>
            </ol>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ol>
              <li>Open Gmail</li>
              <li>
                <a
                  style={{ fontWeight: 'bold', textDecoration: 'underline' }}
                  href="https://support.google.com/mail/answer/8395?hl=en&co=GENIE.Platform%3DDesktop#:~:text=Add%20or%20change%20a%20signature&text=Open%20Gmail.,or%20changing%20the%20text%20style"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Follow the instuctions provided by Google.
                </a>
                <ul
                  style={{
                    margin: '0',
                    paddingLeft: '1rem',
                    paddingTop: '0.5rem',
                  }}
                >
                  <li style={{ marginBottom: '0.5rem' }}>
                    Settings icon and then See all settings.
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    "Signature" section, add your signature text in the box.
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    At the bottom of the page, click Save Changes.
                  </li>
                </ul>
              </li>
            </ol>
          </TabPanel>
        </Box>
      </ThemeProvider>
    </div>
  );
}
