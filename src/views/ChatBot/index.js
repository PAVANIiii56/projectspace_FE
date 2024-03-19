import React, { useState } from 'react';
// import '../App.css';
import './app.css'
import axios from 'axios';
import './chat.css';
// import './search.css'
import Header from '../big/SearchBox/Header/Header';
// import App from '../big/SearchBox/Header/App/App'
// import Breadcrumb from 'component/Breadcrumb';
// import { gridSpacing } from 'config.js';
// import Search from 'views/SearchBox/Search';
import { Card, CardHeader, CardContent, Divider,  Typography } from '@mui/material';
function ChatBot() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [dataContains, setDataContains] = useState(true);
  const [loading, setLoading] = useState(false);
  // const apiUrl = 'https://api.openai.com/v1/chat/completions';

  const handleSearch = () => {
    setLoading(true);
    console.log(searchTerm);
    if (searchTerm.length > 0) {
      setSearchResults('');
      const requestData = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: searchTerm }],
        temperature: 0.7,
      };
      const headers = {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer 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',
      };
      axios.post(apiUrl, requestData, { headers })
        .then(response => {
          const generatedText = response.data.choices[0].message.content;
          setSearchResults(generatedText);
          console.log('Generated Text:', generatedText);
        })
        .catch(error => {
          console.error('Error:', error.response ? error.response.data : error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setDataContains(false);
    }
  };
  const [Mystate, update] = useState(
    {
        exp: true,
    })
const handleChange = (inputtext) => {
    update({ exp: inputtext.length === 0 ? true : false })
    // onChange={inputtext => setSearchTerm(inputtext)}
    setSearchTerm(inputtext)
}

  return (
    <>
    {/* <Header/> */}
    {/* <App/> */}
    <Header exp={Mystate.exp} />
    <div className="app">
      <div className="search-results">
        {/* <h2>QUESTION</h2> */}
        {/* <div className='' style={{ background: '#E2CFDD' }}>
          <span className='rdata'>Question: </span>
          {dataContains ? <p className='resault-data'>{searchTerm}</p> : <><p style={{ color: 'red' }}>Enter valid question</p></>}
        </div> */}
        <Card className='card'> 
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  Question:
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2">
              {dataContains ? <p className='resault-data'>{searchTerm}</p> : <><p style={{ color: 'red' }}>Enter valid question</p></>}
              </Typography>
            </CardContent>
          </Card>
        {loading ? 
          <div className="loader-container">
            <div className="loader"></div>
          </div> : 
          <div className='result'>
            <p className='result-data'>
          <Card className='card'> 
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  RESULT:
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2">
              {searchResults}
              </Typography>
            </CardContent>
          </Card>
            </p>
          </div>
        }
      </div>
      <br/>
      {/* <Search/> */}
      <div className="search-container">
        {/* <input  handleChange={handleChange} className='text-input' type="text" placeholder="Search..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />&emsp;&emsp;&emsp;&emsp; */}
        {/* <Search  handleChange={handleChange} className='text-input' type="text" placeholder="Search..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}   /> */}
        
        <div className="Search-container">
            <input onChange={(e) => handleChange(e.target.value)}
                type="text" placeholder="Type Keywords" className="Search-input" />&emsp;&emsp;&emsp;&emsp;
                 <button className='text-input' onClick={handleSearch}>Search</button>
        </div>

      </div>
      
    </div>
    </>
  );
}

export default ChatBot;