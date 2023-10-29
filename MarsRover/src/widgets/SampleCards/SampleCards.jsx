import { useState } from 'react'
import './SampleCards.css'

import Welcome from '../../widgets/Welcome/Welcome'
import AboutPage from '../../widgets/AboutPage/AboutPage'
import { Footer } from '../../widgets/Footer/Footer'

const SampleCards = () => {
    return (
        <div className='sampleCards'>
            <svg xmlns="http://www.w3.org/2000/svg" width="230" height="400" viewBox="0 0 230 400" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0H220C225.523 0 230 4.47715 230 10V178L206.948 191.346C200.295 195.197 200.295 204.803 206.948 208.654L230 222V390C230 395.523 225.523 400 220 400H10C4.47715 400 0 395.523 0 390V222L23.0517 208.654C29.7046 204.803 29.7046 195.197 23.0517 191.346L0 178V10Z" fill="#1C1C1C" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0H220C225.523 0 230 4.47715 230 10V178L206.948 191.346C200.295 195.197 200.295 204.803 206.948 208.654L230 222V390C230 395.523 225.523 400 220 400H10C4.47715 400 0 395.523 0 390V222L23.0517 208.654C29.7046 204.803 29.7046 195.197 23.0517 191.346L0 178V10Z" fill="url(#paint0_radial_8_3)" />
                <defs>
                    <radialGradient id="paint0_radial_8_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(57 400) rotate(14.8001) scale(309.26 357.965)">
                        <stop stop-color="#FF6666" />
                        <stop offset="1" stop-color="#1C1C1C" stop-opacity="0" />
                    </radialGradient>
                </defs>
                <circle cx="115" cy="100" r="70" fill="white" />
                <mask id="circle-mask">
                    <circle cx="115" cy="100" r="70" fill="white" />
                </mask>
                <image href="../../img/1_-_PIA24805_-_Navcam_of_Borehole_-_Sol190_Navcam_borehole.jpg" x="45" y="30" width="140" height="140" mask="url(#circle-mask)" />
                <text x="115" y="250" fill="white" font-size="20" font-weight="bold" text-anchor="middle" dominant-baseline="middle">Montdenier</text>
                <text x="115" y="270" fill="white" font-size="14" font-weight="normal" text-anchor="middle" dominant-baseline="middle">Sample No. 2</text>
                <text x="115" y="320" fill="white" font-size="16" font-weight="normal" text-anchor="middle" dominant-baseline="middle">Rock Type: Igneous</text>
                <text x="115" y="350" fill="white" font-size="16" font-weight="normal" text-anchor="middle" dominant-baseline="middle">Coords: 356, 754</text>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="230" height="400" viewBox="0 0 230 400" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0H220C225.523 0 230 4.47715 230 10V178L206.948 191.346C200.295 195.197 200.295 204.803 206.948 208.654L230 222V390C230 395.523 225.523 400 220 400H10C4.47715 400 0 395.523 0 390V222L23.0517 208.654C29.7046 204.803 29.7046 195.197 23.0517 191.346L0 178V10Z" fill="#1C1C1C" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0H220C225.523 0 230 4.47715 230 10V178L206.948 191.346C200.295 195.197 200.295 204.803 206.948 208.654L230 222V390C230 395.523 225.523 400 220 400H10C4.47715 400 0 395.523 0 390V222L23.0517 208.654C29.7046 204.803 29.7046 195.197 23.0517 191.346L0 178V10Z" fill="url(#paint0_radial_9_23)" />
                <defs>
                    <radialGradient id="paint0_radial_9_23" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(230 400) rotate(-167.155) scale(344.111 398.305)">
                        <stop stop-color="#FF8266" />
                        <stop offset="1" stop-color="#1C1C1C" stop-opacity="0" />
                    </radialGradient>
                </defs>
                <circle cx="115" cy="100" r="70" fill="white" />
                <mask id="circle-mask">
                    <circle cx="115" cy="100" r="70" fill="white" />
                </mask>
                <image href="../../img/Mars_Perseverance_NLF_0490_0710456117_926ECM_N0261004NCAM00709_01_095J.png" x="45" y="30" width="140" height="140" mask="url(#circle-mask)" />
                <text x="115" y="250" fill="white" font-size="20" font-weight="bold" text-anchor="middle" dominant-baseline="middle">Swift Run</text>
                <text x="115" y="270" fill="white" font-size="14" font-weight="normal" text-anchor="middle" dominant-baseline="middle">Sample No. 10</text>
                <text x="115" y="320" fill="white" font-size="16" font-weight="normal" text-anchor="middle" dominant-baseline="middle">Rock Type: Sedimentary</text>
                <text x="115" y="350" fill="white" font-size="16" font-weight="normal" text-anchor="middle" dominant-baseline="middle">Coords: 530, 145</text>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="230" height="400" viewBox="0 0 230 400" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0H220C225.523 0 230 4.47715 230 10V178L206.948 191.346C200.295 195.197 200.295 204.803 206.948 208.654L230 222V390C230 395.523 225.523 400 220 400H10C4.47715 400 0 395.523 0 390V222L23.0517 208.654C29.7046 204.803 29.7046 195.197 23.0517 191.346L0 178V10Z" fill="#1C1C1C" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0H220C225.523 0 230 4.47715 230 10V178L206.948 191.346C200.295 195.197 200.295 204.803 206.948 208.654L230 222V390C230 395.523 225.523 400 220 400H10C4.47715 400 0 395.523 0 390V222L23.0517 208.654C29.7046 204.803 29.7046 195.197 23.0517 191.346L0 178V10Z" fill="url(#paint0_radial_9_24)" />
                <defs>
                    <radialGradient id="paint0_radial_9_24" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(140 400) rotate(143.185) scale(315.4 365.072)">
                        <stop stop-color="#FF9D66" />
                        <stop offset="1" stop-color="#1C1C1C" stop-opacity="0" />
                    </radialGradient>
                </defs>
                <circle cx="115" cy="100" r="70" fill="white" />
                <mask id="circle-mask">
                    <circle cx="115" cy="100" r="70" fill="white" />
                </mask>
                <image href="../../img/Mars_Perseverance_ZL0_0379_0700576749_723EBY_N0110108ZCAM08408_1100LMJ.png" x="45" y="30" width="140" height="140" mask="url(#circle-mask)" />
                <text x="115" y="250" fill="white" font-size="20" font-weight="bold" text-anchor="middle" dominant-baseline="middle">Atsá</text>
                <text x="115" y="270" fill="white" font-size="14" font-weight="normal" text-anchor="middle" dominant-baseline="middle">Sample No. 9</text>
                <text x="115" y="320" fill="white" font-size="16" font-weight="normal" text-anchor="middle" dominant-baseline="middle">Rock Type: Igneous</text>
                <text x="115" y="350" fill="white" font-size="16" font-weight="normal" text-anchor="middle" dominant-baseline="middle">Coords: 576, 320</text>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="230" height="400" viewBox="0 0 230 400" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0H220C225.523 0 230 4.47715 230 10V178L206.948 191.346C200.295 195.197 200.295 204.803 206.948 208.654L230 222V390C230 395.523 225.523 400 220 400H10C4.47715 400 0 395.523 0 390V222L23.0517 208.654C29.7046 204.803 29.7046 195.197 23.0517 191.346L0 178V10Z" fill="#1C1C1C" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0H220C225.523 0 230 4.47715 230 10V178L206.948 191.346C200.295 195.197 200.295 204.803 206.948 208.654L230 222V390C230 395.523 225.523 400 220 400H10C4.47715 400 0 395.523 0 390V222L23.0517 208.654C29.7046 204.803 29.7046 195.197 23.0517 191.346L0 178V10Z" fill="url(#paint0_radial_9_25)" />
                <defs>
                    <radialGradient id="paint0_radial_9_25" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30.5 400) rotate(-4.58153) scale(300.46 347.779)">
                        <stop stop-color="#FFA666" />
                        <stop offset="1" stop-color="#1C1C1C" stop-opacity="0" />
                    </radialGradient>
                </defs>
                <circle cx="115" cy="100" r="70" fill="white" />
                <mask id="circle-mask">
                    <circle cx="115" cy="100" r="70" fill="white" />
                </mask>
                <image href="../../img/Mars_Perseverance_NRF_0634_0723238492_135ECM_N0310000NCAM00709_01_095J.png" x="45" y="30" width="140" height="140" mask="url(#circle-mask)" />
                <text x="115" y="250" fill="white" font-size="20" font-weight="bold" text-anchor="middle" dominant-baseline="middle">Atmo Mountain</text>
                <text x="115" y="270" fill="white" font-size="14" font-weight="normal" text-anchor="middle" dominant-baseline="middle">Sample No. 17</text>
                <text x="115" y="320" fill="white" font-size="16" font-weight="normal" text-anchor="middle" dominant-baseline="middle">Rock Type: Mixed</text>
                <text x="115" y="350" fill="white" font-size="16" font-weight="normal" text-anchor="middle" dominant-baseline="middle">Coords: 856, 1754</text>
            </svg>
        </div>
    )
}

export default SampleCards
