import React from 'react';
import { Link } from 'react-router-dom';
import eca from './eca.jpeg';
import schematic from './schematic1.png';
import pin from './Pin1.png';
// material-ui
import './lica.css';
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

// ==============================|| SAMPLE PAGE ||============================== //
const Eca = () => {
  const handleDownload = (filename) => {
    // Get the URL of the PDF file using its relative path in the public directory
    const url = process.env.PUBLIC_URL + '/' + filename;
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || 'ECA.pdf'; // Set the default filename if not provided
    link.target = '_blank'; // Open the file in a new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Remove the anchor element after download
  };
  return (
    <>
      <Breadcrumb title=" ELECTRONICS CIRCUITS AND ANALYSIS">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          ECE
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          ECA
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
              <li ><a href='#INTRODUCTION' style={{textDecoration:"none"}}>INTRODUCTION </a></li>
              <li ><a href='#BASIC EQUIPMENT' style={{textDecoration:"none"}}>BASIC EQUIPMENT</a></li>
              <li ><a href='#LIST OF EXPERIMENTS' style={{textDecoration:"none"}}>LIST OF EXPERIMENTS</a></li>
              <ol>
                <li><a href='#twostage' style={{textDecoration:"none"}}>Two Stage RC Coupled Amplifier</a></li>
                <li><a href='#voltage' style={{textDecoration:"none"}}>Voltage Series Feedback Amplifier</a></li>
                <li><a href='#rcphase' style={{textDecoration:"none"}}>RC Phase Shift Oscillator using BJT</a></li>
                <li><a href='#classa' style={{textDecoration:"none"}}>Class-A Power Amplifier</a></li>
                <li><a href='#singletuned' style={{textDecoration:"none"}}>Single Tuned Amplifier</a></li>
                <li><a href='#twostageps' style={{textDecoration:"none"}}>Two Stage RC Coupled Amplifier in pspice</a></li>
                <li><a href='#voltageps' style={{textDecoration:"none"}}>Voltage Series Feedback Amplifier in pspice</a></li>
                <li><a href='#rcphaseps' style={{textDecoration:"none"}}>RC Phase Shift Oscillator using BJT in pspice</a></li>
                <li><a href='#classaps' style={{textDecoration:"none"}}>Class-A Power Amplifier in pspice</a></li>
                <li><a href='#singletunedps' style={{textDecoration:"none"}}>Single Tuned Amplifier in pspice</a></li>
                <li><a href='#threestage' style={{textDecoration:"none"}}>Three Stage RC Coupled Amplifier</a></li>
                <li><a href='#darlington' style={{textDecoration:"none"}}>Darlington Pair Amplifier</a></li>
                <li><a href='#colpitts' style={{textDecoration:"none"}}>Colpitt’s Oscillator using BJT</a></li>
                <li><a href='#bootstrap' style={{textDecoration:"none"}}>Bootstrapped Emitter Follower</a></li>
              </ol>
              <li ><a href='#LIST OF EXPERIMENTS' style={{textDecoration:"none"}}>LAB MANUAL</a></li>
             </ul>
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
                <Typography component="div" className="card-header"  id = "INTRODUCTION">
                  INTRODUCTION
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
              The main objective is to introduce different types of AMPLIFIERS and study their characteristics. With this 
              knowledge students will be able to do mini-projects with the help of diodes and transistors.
              Circuit analysis, or solving a circuit, means figuring out voltages and currents in each element. Heres an overview of circuit analysis, with some 
              context for the various tools and methods we use to analyze circuits.
               <br/>
              <center><img src = {eca} alt=''/></center>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Breadcrumb title=" ">
        {/* <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          
        </Typography> 
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          
        </Typography>  */}
      </Breadcrumb>
      <Grid container spacing={gridSpacing}>
        <Grid item>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header" id = "BASIC EQUIPMENT" style={{scrollBehavior:"smooth"}}>
                  BASIC EQUIPMENT
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='a'>
              <h3>1.IC 741 OP-Amp:</h3>
              {/* <img src = {ic} alt =""/> */}
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
              <h3>2.IC 565 (Phase locked loop):</h3>
              <ul>
                <li>A phase-locked loop or phase lock loop (PLL) is a control system that generates an output signal whose phase is fixed relative to the phase of an input signal.</li>
                <li>keeping the input and output frequencies the same, thus a phase-locked loop can also track an input frequency.</li>
                <li>Applications: frequency multiplication, signal conditioning, clock synchronization, demodulation</li>
                <li>Applications: Used to do mathematical operations(integration, addition).</li>
              </ul>
              <h3>Applications</h3>
              <ul>
                <li>It is one kind of IC (integrated circuits).</li>
              </ul>  
           
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid><br/>
      <Grid container spacing={gridSpacing}>
        <Grid item>
          <Card>
            <CardHeader
              title={
                <Typography component="div" className="card-header"  id = "LIST OF EXPERIMENTS" style={{scrollBehavior:"smooth"}}>
                 LIST OF EXPERIMENTS
                </Typography>
              }
            />
            <Divider />
            <CardContent>
              <Typography variant="body2" className='b'>
             <ol>
             <h3 id = "twostage"><li>Two Stage RC Coupled Amplifier &emsp;<a href = "https://youtu.be/0RexJow7suA">LINK</a> </li></h3>
                <p>
                A two-stage RC coupled amplifier is a type of electronic amplifier circuit commonly used 
                in audio applications. It consists of two amplifier stages connected together through capacitors (C)
                 and resistors (R), hence the term RC coupled.
                </p>
                <p>
                    <h4>ADVANTAGES</h4>
                    <ol>
                        <li>High Voltage Gain</li>
                        <li>Improved Linearity</li>
                        <li>Ease of Design and Implementation</li>
                        <li>Frequency Response Control</li>
                    </ol>
                    <h4>DISADVANTAGES</h4>
                    <ol>
                        <li>Limited Bandwidth</li>
                        <li>Signal Degradation</li>
                        <li>Sensitivity to Component Variations</li>
                        <li>DC Coupling Limitation</li>
                    </ol>
                    <h4>REAL-TIME APPLICATIONS</h4>
                    <ol>
                        <li>Audio Amplification</li>
                        <li>Radio Frequency (RF) Amplification</li>
                        <li>Instrumentation and Measurement Systems</li>
                        <li>Communications Systems</li>
                    </ol>
                </p>
                <h3 id = "voltage" style={{scrollBehavior:"smooth"}}><li>Voltage Series Feedback Amplifier &emsp;<a href = "https://youtu.be/2YOhnF9TU8Y?si=zhb1dibc6I9pt88O">LINK</a></li></h3>
                <p>
                A voltage series feedback amplifier is a type of electronic amplifier
                 circuit in which the feedback signal is taken from the output of the amplifier 
                 and applied in series (or in-line) with the input signal.

                </p>
                <p>
                    <h4>ADVANTAGES</h4>
                    <ol>
                        <li>Increased Stability</li>
                        <li>Improved Linearity</li>
                        <li>Enhanced Frequency Response</li>
                        <li>Lower Output Impedance</li>
                        <li>Control Over Gain</li>
                    </ol>
                    <h4>DISADVANTAGES</h4>
                    <ol>
                        <li>Reduced Bandwidth</li>
                        <li>Increased Complexity</li>
                        <li>Potential Instability</li>
                        <li>Noise</li>
                    </ol>
                    <h4>REAL-TIME APPLICATIONS</h4>
                    <ol>
                        <li>Audio Amplifiers</li>
                        <li>Instrumentation Amplifiers</li>
                        <li>Control Systems</li>
                        <li>Communications Systems</li>
                    </ol>
                </p>
                <h3 id = "rcphase"><li>RC Phase Shift Oscillator using BJT &emsp;<a href = "https://youtu.be/eg884iSHGok?si=xct9IpupbqD_CdS7">LINK</a></li></h3>
                <p>
                An RC phase shift oscillator is a type of electronic 
                oscillator circuit that generates sinusoidal oscillations using a network of resistors (R) and capacitors (C).
                </p>
                <p>
                    <h4>ADVANTAGES</h4>
                    <ol>
                        <li>Simple Circuit</li>
                        <li>Stable Frequency</li>
                        <li>Wide Frequency Range</li>
                        <li>Low Cost</li>
                    </ol>
                    <h4>DISADVANTAGES</h4>
                    <ol>
                        <li>Limited Amplitude</li>
                        <li>Limited Frequency Stability</li>
                        <li>Limited Power Handling</li>
                        {/* <li></li> */}
                    </ol>
                    <h4>REAL-TIME APPLICATIONS</h4>
                    <ol>
                        <li>Signal Generators</li>
                        <li>Frequency Synthesis</li>
                        <li>Audio Applications</li>
                    </ol>
                </p>
                <h3 id = "classa"><li>Class-A Power Amplifier &emsp;<a href = "https://youtu.be/0RexJow7suA">LINK</a></li></h3>
                <p>
                A Class-A power amplifier is a type of electronic amplifier that conducts
                 throughout the entire cycle (360 degrees) of the input signal waveform.
                </p>
                <p>
                    <h4>ADVANTAGES</h4>
                    <ol>
                        <li>Linearity</li>
                        <li>Low Distortion</li>
                        <li>Simple Design</li>
                        <li>High-Quality Sound</li>
                        <li>No Crossover Distortion</li>
                    </ol>
                    <h4>DISADVANTAGES</h4>
                    <ol>
                        <li>Low Efficiency</li>
                        <li>Heat Generation</li>
                        <li>Limited Power Output</li>
                        <li>More Cost</li>
                    </ol>
                    <h4>REAL-TIME APPLICATIONS</h4>
                    <ol>
                        <li>Audio Amplification</li>
                        <li>Instrumentation</li>
                        <li>Radio Frequency (RF) Amplification</li>
                        <li>Microwave Amplification</li>
                    </ol>
                </p>
     <h3 id="singletuned"><li>Single Tuned Amplifier &emsp;<a href = "https://youtu.be/0RexJow7suA">LINK</a></li></h3>
                <p>
                A single-tuned amplifier is a type of tuned amplifier circuit that is designed to amplify signals 
                within a narrow frequency range centered around the resonant frequency of the tuned circuit. 
                </p>
                <p>
                    <h4>ADVANTAGES</h4>
                    <ol>
                        <li>Frequency Selectivity</li>
                        <li>Simplicity</li>
                        <li>Efficiency</li>
                        <li>Low Noise</li>
                    </ol>
                    <h4>DISADVANTAGES</h4>
                    <ol>
                        <li>Limited Bandwidth</li>
                        <li>Frequency Drift</li>
                        <li>Sensitivity to Component Variations</li>
                        <li>Loading Effect</li>
                    </ol>
                    <h4>REAL-TIME APPLICATIONS</h4>
                    <ol>
                        {/* <li></li> */}
                        <li>Radio Receivers</li>
                        <li>Signal Processing</li>
                        <li>Communication Systems</li>
                    </ol>
                </p>
                
                <h3 id="twostageps"><li>Two Stage RC Coupled Amplifier in pspice &emsp;<a href = "https://youtu.be/401pZY_V5zY?si=SvIRu33agR7GEbKc">LINK</a></li></h3>
                <p>
                In PSpice, a two-stage RC-coupled amplifier can be simulated to 
                analyze its performance characteristics, frequency response, and gain.
                </p>
                <p>
                    <h4>ADVANTAGES</h4>
                    <ol>
                        <li>High Gain</li>
                        <li>Improved Frequency Response</li>
                        <li>Low Distortion</li>
                        <li>Flexibility</li>
                    </ol>
                    <h4>DISADVANTAGES</h4>
                    <ol>
                        <li>Complexity</li>
                        <li>Component Matching</li>
                        <li>Bandwidth Limitations</li>
                        <li>More Costly</li>
                    </ol>
                    <h4>REAL-TIME APPLICATIONS</h4>
                    <ol>
                        <li>Audio Amplification</li>
                        <li>Instrumentation Amplifiers</li>
                        <li>RF Amplifiers</li>
                        <li>Signal Proceesing</li>
                    </ol>
                </p>
                <h3 id="voltageps"><li>Voltage Series Feedback Amplifier in pspice &emsp;<a href = "https://youtu.be/V0lIpr3KBp0?si=DC7hx1frt_ARpAhV">LINK</a></li></h3>
                <p>
                In PSpice, a voltage series feedback amplifier can be simulated to 
                analyze its performance, stability, and other characteristics.
                </p>
                <p>
                    <h4>ADVANTAGES</h4>
                    <ol>
                        <li>Improved Stability</li>
                        <li>Enhanced Linearity</li>
                        <li>Extended Frequency Response</li>
                        <li>Control Over Gain</li>
                    </ol>
                    <h4>DISADVANTAGES</h4>
                    <ol>
                        <li>Complexity</li>
                        <li>Bandwidth Limitations</li>
                        <li>Noise Sensitivity</li>
                        <li>Potential for Instability</li>
                    </ol>
                    <h4>REAL-TIME APPLICATIONS</h4>
                    <ol>
                        <li>Audio Amplifiers</li>
                        <li>Instrumentation Amplifiers</li>
                        <li>Control Systems</li>
                        <li>Communication Systems</li>
                    </ol>
                </p>
                <h3 id="rcphaseps"><li>RC Phase Shift Oscillator using BJT in pspice &emsp;<a href = "https://youtu.be/uEz3u7NAPK8?si=UWrLf7uPqNCkw9Vp">LINK</a></li></h3>
                <p>
                In PSpice, an RC phase shift oscillator can be simulated to study its oscillation frequency, stability, and other performance characteristics. 
                </p>
                <p>
                    <h4>ADVANTAGES</h4>
                    <ol>
                        <li>Simple Design</li>
                        <li>Stable Oscillation</li>
                        <li>Frequency Tunability</li>
                        <li>Low Cost</li>
                    </ol>
                    <h4>DISADVANTAGES</h4>
                    <ol>
                        <li>Limited Frequency Range</li>
                        <li>Sensitivity to Component Variations</li>
                        <li>Limited Output Amplitude</li>
                        <li>Potential for Harmonic Distortion</li>
                    </ol>
                    <h4>REAL-TIME APPLICATIONS</h4>
                    <ol>
                        <li>Signal Generators</li>
                        <li>Clock Circuits</li>
                        <li>Audio Oscillators</li>
                        <li>Amplitude Modulation (AM) Circuits</li>
                    </ol>
                </p>
                <h3 id="classaps"><li>class-A Power Amplifier in pspice &emsp;<a href = "https://youtu.be/ezzzJXyKG8I?si=Ze06y5xeaRBUiFc1">LINK</a></li></h3>
                <p>
                In PSpice, a Class-A power amplifier can be simulated to understand its behavior, performance characteristics, and efficiency.
                </p>
                <p>
                    <h4>ADVANTAGES</h4>
                    <ol>
                        <li>Simple Design</li>
                        <li>Low Distortion</li>
                        <li>High Gain</li>
                        <li>High Linearity</li>
                    </ol>
                    <h4>DISADVANTAGES</h4>
                    <ol>
                        <li>Low Efficiency</li>
                        <li>Heat Generation</li>
                        <li>Limited Power Handling</li>
                        {/* <li></li> */}
                    </ol>
                    <h4>REAL-TIME APPLICATIONS</h4>
                    <ol>
                        <li>Audio Amplification</li>
                        <li>Instrumentation</li>
                        <li>Radio Frequency (RF) Applications</li>
                        <li></li>
                    </ol>
                    

                </p>
                <h3 id="singletunedps"><li>Single Tuned Amplifier in pspice &emsp;<a href = "https://youtu.be/uEz3u7NAPK8?si=UWrLf7uPqNCkw9Vp">LINK</a></li></h3>
                <p>
                A single-tuned amplifier is a type of resonant circuit used for amplifying signals within
                 a narrow frequency range. When analyzed in PSpice (a simulation software for electronic circuits), 
                it allows engineers to model and study the behavior of the circuit before physically building it.
                </p>
                <p>
                    <h4>ADVANTAGES</h4>
                    <ol>
                        <li>Simulation Capabilities</li>
                        <li>Parameter Sensitivity Analysis</li>
                        <li>Design Optimization</li>
                        <li>Time and Cost Savings</li>
                    </ol>
                    <h4>DISADVANTAGES</h4>
                    <ol>
                        <li>Model Accuracy</li>
                        <li>Complexity</li>
                        <li>Verification Required</li>
                    </ol>
                    <h4>REAL-TIME APPLICATIONS</h4>
                    <ol>
                        <li>Frequency Response Analysis</li>
                        <li>Filter Design</li>
                        <li>RF Circuit Design</li>
                        {/* <li></li> */}
                    </ol>
                </p>
                <h3 id="threestage"><li>Three Stage RC Coupled Amplifier in pspice &emsp;<a href = "https://youtu.be/uEz3u7NAPK8?si=UWrLf7uPqNCkw9Vp">LINK</a></li></h3>
                <p>
                In PSpice, a three-stage RC-coupled amplifier can be simulated to study its performance, gain, frequency response, and other characteristics.
                </p>
                <p>
                    <h4>ADVANTAGES</h4>
                    <ol>
                        <li>High Gain</li>
                        <li>Improved Frequency Response</li>
                        <li>Flexibility</li>
                        <li>Low Distortion</li>
                    </ol>
                    <h4>DISADVANTAGES</h4>
                    <ol>
                        <li>Complexity</li>
                        <li>Component Matching</li>
                        <li>Bandwidth Limitations</li>
                    </ol>
                    <h4>REAL-TIME APPLICATIONS</h4>
                    <ol>
                        <li>Audio Amplification</li>
                        <li>Instrumentation Amplifiers</li>
                        <li>RF Amplifiers</li>
                    </ol>
                </p>
                <h3 id="darlington"><li>Darlington Pair Amplifier &emsp;<a href = "https://youtu.be/Qgqy7QUQu44?si=OaNr6aEhTEGyNZOC">LINK</a></li></h3>
                <p>
                A Darlington amplifier is a configuration commonly used to achieve high current gain in
                 electronic circuits. It consists of two transistors connected in a specific way to amplify a signal
                </p>
                <p>
                    <h4>ADVANTAGES</h4>
                    <ol>
                        <li>High Current Gain</li>
                        <li>High Input Impedance</li>
                        <li>Low Saturation Voltage</li>
                        <li>Ease of Use</li>
                    </ol>
                    <h4>DISADVANTAGES</h4>
                    <ol>
                        <li>Slow Response</li>
                        <li>High Input Voltage Offset</li>
                        <li>Thermal Stability</li>
                        {/* <li></li> */}
                    </ol>
                    <h4>REAL-TIME APPLICATIONS</h4>
                    <ol>
                        <li>Audio Amplifiers</li>
                        <li>Power Supplies</li>
                        <li>Switching Circuits</li>
                        <li>Instrumentation</li>
                    </ol>
                </p>
                <h3 id="colpitts"><li>Colpitt’s Oscillator using BJT &emsp;<a href = "https://youtu.be/bra8cV6sHaY?si=rOxPQopZ_dvljpsX">LINK</a></li></h3>
                <p>
                The Colpitts oscillator is a type of LC oscillator circuit 
                used to generate sinusoidal oscillations at radio frequencies.
                </p>
                <p>
                    <h4>ADVANTAGES</h4>
                    <ol>
                        <li>High Frequency Stability</li>
                        <li>Tunable Frequency</li>
                        <li>Simplicity</li>
                        <li>Low Harmonic Distortion</li>
                    </ol>
                    <h4>DISADVANTAGES</h4>
                    <ol>
                        <li>Sensitivity to Component Tolerances</li>
                        <li>Limited Power Output</li>
                        <li>Spurious Modes</li>
                        <li>Noise Susceptibility</li>
                    </ol>
                    <h4>REAL-TIME APPLICATIONS</h4>
                    <ol>
                        <li>Radio Frequency (RF) Transmitters and Receivers</li>
                        <li>Frequency Synthesizers</li>
                        <li>Voltage Controlled Oscillators (VCOs)</li>
                        <li>Test and Measurement Equipment</li>
                    </ol>
                </p>
                <h3 id="bootstrap"><li>Bootstrapped Emitter Follower &emsp;<a href = "https://youtu.be/bra8cV6sHaY?si=rOxPQopZ_dvljpsX">LINK</a></li></h3>
                <p>
                A bootstrapped emitter follower is a variation of the standard emitter follower amplifier configuration.
                In this circuit, the emitter resistor is bypassed by a capacitor, and the voltage across the capacitor is used to enhance the circuit performance.
                </p>
                <p>
                    <h4>ADVANTAGES</h4>
                    <ol>
                        <li>High Input Impedance</li>
                        <li>Improved Linearity</li>
                        <li>Enhanced Voltage Swing</li>
                        <li>Lower Output Impedance</li>
                        <li>Reduced Power Dissipation</li>
                    </ol>
                    <h4>DISADVANTAGES</h4>
                    <ol>
                        <li>Complexity</li>
                        <li>Sensitivity to Component Tolerances</li>
                        <li>Limited Frequency Response</li>
                        <li>Higher Cost</li>
                    </ol>
                    <h4>REAL-TIME APPLICATIONS</h4>
                    <ol>
                        <li>Audio Amplifiers</li>
                        <li>Buffer Stages</li>
                        <li>Voltage Followers</li>
                        <li>Switching Circuits</li>
                    </ol>
                </p>
             </ol>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid>
      <div>
        <h1>PDF Viewer</h1>
        {/* <iframe src="/manual.docx"
            title="Embedded Content"
            width="600"
            height="400"
            style={{ border: 0 }}
            allowFullScreen></iframe> */}
        {/* <a href="/manual.docx" download>Download PDF</a> */}
      </div>
    </Grid>
    <div>
      <button onClick={() => handleDownload('ECA.docx')}>
        Download PDF
      </button>
    </div>
    </>
  );
};

export default Eca;
