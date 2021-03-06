import React from 'react';
import './css/MainBody.css'
import Image from './images/google-play-badge.png';

import {gsap} from 'gsap';

function MainBody () {
    return(
        
        <div>
        <svg className="top-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3a3a3a" fill-opacity="1" d="M0,0L60,16C120,32,240,64,360,74.7C480,85,600,75,720,96C840,117,960,171,1080,213.3C1200,256,1320,288,1380,304L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            <div class="phone-container">
            <div class="phone"></div>
            <div class="screen"></div>
            <div class="back"></div>

            <div class="message-1"></div>
            <div class="inner-text-1"></div>
            <div class="inner-text-2"></div>
            <div class="message-2"></div>
            <div class="message-red"></div>
            <div class="message-blue"></div>
                
            <div class="button"></div>
            <div class="side-button"></div>
            </div>

            <div class="shadow"></div>
        <div className="description">
            <h2>simplicity is best</h2>
            <h4>
                daily life is frustrating. Why should your budgeting app <br />
                be too? with us, you won't ever have to wonder what this or that is. <br />
                <br />
                <br />
                Intuitive -- that's our goal.
            </h4>
        </div>
        
        
        <svg className="middle-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3a3a3a" fill-opacity="1" d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,26.7C1200,21,1320,11,1380,5.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        <div className='graph'>
        </div>
        <svg class='graph-container' width="529px" height="286px" viewBox="30 27 529 286" version="1.1">
            <defs></defs>
            <g id="graph-copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(30.000000, 27.000000)">
                <g id="y_axis" font-size="11.0833333" font-family=".HelveticaNeueDeskInterface-Regular, .Helvetica Neue DeskInterface" fill="#000000" opacity="0.4" font-weight="normal">
                    <text id="0">
                        <tspan x="25.3008249" y="264.333333">0</tspan>
                    </text>
                    <text id="200">
                        <tspan x="12.7757572" y="232.666667">200</tspan>
                    </text>
                    <text id="400">
                        <tspan x="12.7757572" y="201">400</tspan>
                    </text>
                    <text id="600">
                        <tspan x="12.7757572" y="169.333333">600</tspan>
                    </text>
                    <text id="800">
                        <tspan x="12.7757572" y="137.666667">800</tspan>
                    </text>
                    <text id="1000">
                        <tspan x="6.51322328" y="106">1000</tspan>
                    </text>
                    <text id="1200">
                        <tspan x="6.51322328" y="74.3333333">1200</tspan>
                    </text>
                    <text id="1400">
                        <tspan x="6.51322328" y="42.6666667">1400</tspan>
                    </text>
                    <text id="1600">
                        <tspan x="6.51322328" y="11">1600</tspan>
                    </text>
                </g>
                <g id="GRAPHS" transform="translate(64.000000, 16.000000)" stroke-linecap="round" stroke-width="8" stroke-linejoin="round">
                    <polyline id="Banks" stroke="#5BCAC1" points="0 1 88.0438662 1 128.985782 137 180.170616 137 224.189573 182 256.947867 91 301.990521 137 346.009479 91 392.087202 91 429.952607 179"></polyline>
                    <polyline id="Bridge" stroke="#81DEFF" points="2.04739336 183 54.2559242 227 96.2274882 47 133.080569 1 302.018438 1 346.680361 44.6280822 386.957346 0 427.905213 43"></polyline>
                    <polyline id="PayPal" stroke="#F6F5A6" points="2.04739336 180 53.273159 180 99.2985782 91 137.175355 47 219.077488 47 256.947867 90 301.990521 47 349.080569 137 398.228672 137 432 91"></polyline>
                </g>
                <g id="x_axis" transform="translate(71.974046, 271.541667)" font-size="11.0833333" font-family=".HelveticaNeueDeskInterface-Regular, .Helvetica Neue DeskInterface" fill="#000000" opacity="0.4" font-weight="normal">
                    <text id="1">
                        <tspan x="0.396183206" y="11">1</tspan>
                    </text>
                    <text id="2">
                        <tspan x="39.2603361" y="11">2</tspan>
                    </text>
                    <text id="3">
                        <tspan x="78.8786567" y="11">3</tspan>
                    </text>
                    <text id="4">
                        <tspan x="118.496977" y="11">4</tspan>
                    </text>
                    <text id="5">
                        <tspan x="158.115298" y="11">5</tspan>
                    </text>
                    <text id="6">
                        <tspan x="197.733619" y="11">6</tspan>
                    </text>
                    <text id="7">
                        <tspan x="237.351939" y="11">7</tspan>
                    </text>
                    <text id="8">
                        <tspan x="276.97026" y="11">8</tspan>
                    </text>
                    <text id="9">
                        <tspan x="316.58858" y="11">9</tspan>
                    </text>
                    <text id="10">
                        <tspan x="359.229833" y="11">10</tspan>
                    </text>
                    <text id="11">
                        <tspan x="400.036703" y="11">11</tspan>
                    </text>
                    <text id="12">
                        <tspan x="438.466474" y="11">12</tspan>
                    </text>
                </g>
                <g id="grid" transform="translate(46.618321, 4.750000)" stroke="#000000" stroke-linecap="square" opacity="0.0800000057">
                    <path d="M0.396183206,1.1875 L478.991396,1.1875" id="Line"></path>
                    <path d="M0.396183206,32.8541667 L478.991396,32.8541667" id="Line"></path>
                    <path d="M0.396183206,64.5208333 L478.991396,64.5208333" id="Line"></path>
                    <path d="M0.396183206,96.1875 L478.991396,96.1875" id="Line"></path>
                    <path d="M0.396183206,127.854167 L478.991396,127.854167" id="Line"></path>
                    <path d="M0.396183206,159.520833 L478.991396,159.520833" id="Line"></path>
                    <path d="M0.396183206,191.1875 L478.991396,191.1875" id="Line"></path>
                    <path d="M0.396183206,222.854167 L478.991396,222.854167" id="Line"></path>
                    <path d="M0.396183206,254.520833 L478.991396,254.520833" id="Line"></path>
                </g>
            </g>
        </svg>

        <h2 className="real-time"> real time graphs</h2>
        <h4 className="real-time-desc"> 
            we offer the mudd experience with our lightning fast <br />
            graphics for all your analytical needs.
        
        </h4>

        <svg className="last-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3a3a3a" fill-opacity="1" d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,26.7C1200,21,1320,11,1380,5.3L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

        <h2 className="ending"> 
            that's not all that we offer <br  />
            so we'll leave the rest for you to explore
        </h2>

        <img id="google"src={Image} width="250" height="100" alt="google-play"/>
</div>
    
    )
}


export default MainBody