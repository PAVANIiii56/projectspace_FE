import React from 'react';
import { Link } from 'react-router-dom';
import ic from './Ic.png';
import schematic from './schematic1.png';
import pin from './Pin1.png';
// material-ui
import lica from './lica.jpeg'
import pic2 from './pic2.png';
import './lica.css';
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

// ==============================|| SAMPLE PAGE ||============================== //
const Lica = () => {
  const handleDownload = (filename) => {
    // Get the URL of the PDF file using its relative path in the public directory
    const url = process.env.PUBLIC_URL + '/' + filename;
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || 'LICA.pdf'; // Set the default filename if not provided
    link.target = '_blank'; // Open the file in a new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Remove the anchor element after download
  };
  return (
    <>
      <Breadcrumb title=" LINEAR INTEGRATED CIRCUIT ANALYSIS">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          ECE
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          LICA
        </Typography>
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header">
                  INDEX
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
             <ul>
              <li ><a href='#INTRODUCTION'>INTRODUCTION</a></li>
              <li ><a href='#BASIC EQUIPMENT'>BASIC EQUIPMENT</a></li>
             </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <br/>
      <Grid container spacing={gridSpacing} id = "INTRODUCTION" style={{scrollBehavior:"smooth"}}>
        <Grid item>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header" >
                  INTRODUCTION
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              This Digital circuits lab  provides an introduction to digital logic, starting with simple gates and building up to state machines. Students should have a solid understanding of algebra as well as a rudimentary
               understanding of basic electricity including voltage, current, resistance, capacitance, inductance and how they relate to direct current circuits. Labs will be built utilizing the following hardware:
            breadboards with associated items required such as wire, wire strippers and cutters
            some basic discrete components such as transistors, resistors and capacitors
            basic 7400 series logic chips.
            <center><img src = {lica} alt=''/></center>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
     <br/>
      <Grid container spacing={gridSpacing}>
        <Grid item>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header" id = "BASIC EQUIPMENT">
                  BASIC EQUIPMENT
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='a'>
              <h3>1.IC 741 OP-Amp:</h3>
              <img src = {ic} alt =""/>
              <img src = {schematic} alt =""/>
              <img src = {pin} alt =""/>
              <ul>
                <li>It is one kind of IC (integrated circuits).</li>
                <li>An op-amp is a DC-coupled high gain voltage amplifier with a differential i/p and a single o/p.</li>
                <li>It generates an o/p potential that is usually many times larger than the potential difference between its i/p terminals.</li>
                <li>Applications: Used to do mathematical operations(integration, addition).</li>
              </ul>
              <h3>Applications</h3>
              <ul>
                <li>It is one kind of IC (integrated circuits).</li>
              </ul>
              </Typography>
              <Typography variant="body2" className='b'>
              <h3>2.IC 565 (Phase locked loop):</h3>
              <ul>
                <li>A phase-locked loop or phase lock loop (PLL) is a control system that generates an output signal whose phase is fixed relative to the phase of an input signal.</li>
                <li>keeping the input and output frequencies the same, thus a phase-locked loop can also track an input frequency.</li>
              </ul>
              <h3>Applications</h3>
              <ul>
                <li>frequency multiplication, signal conditioning, clock synchronization, demodulation.</li>
              </ul>  
              <img src={pic2} alt='' className='center'/>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid>
      <div>
        <h1>PDF Viewer</h1>
       </div>
    </Grid>
      <div>
      <button onClick={() => handleDownload('LICA.pdf')}>
        Download PDF
      </button>
    </div>
    </>
  );
};

export default Lica;
// @media screen and (min-width: 770px) {
// }
// @media screen and (max-width: 769px) {
//   .a .img {
//     width: 180px;
//   }
//   .CoordinatorForm .input label{
      
//       max-width: 180px;
//   }
// }