import { useState } from 'react'
import './SampleCards.css'

const SampleCards = () => {

    const sampleData = [
        {
            name: 'Crosswind Lake',
            sampleNumber: 'Sample No. 1',
            featureName: 'Observation Mountain',
            rockType: 'Rock Type: Mixed',
            imageUrl: '../../img/Mars_Perseverance_NRF_0639_0723682394_977ECM_N0310000NCAM00709_01.png',
            stopColor: "#FF6678",
        },
        {
            name: 'Roubion',
            sampleNumber: 'Sample No. 2',
            featureName: 'Roubion',
            rockType: 'Rock Type: n/a',
            imageUrl: '../../img/Mars_Perseverance_FRF_0667_0726154941_130ECM_N0320494FHAZ08111_06.png',
            stopColor: "#FF6666",
        },
        {
            name: 'Montdenier',
            sampleNumber: 'Sample No. 3',
            featureName: 'Rochette',
            rockType: 'Rock Type: Igneous',
            imageUrl: '../../img/1_-_PIA24805_-_Navcam_of_Borehole_-_Sol190_Navcam_borehole.jpg',
            stopColor: "#FF8266",
        },
        {
            name: 'Montagnac',
            sampleNumber: 'Sample No. 4',
            featureName: 'Rochette',
            rockType: 'Rock Type: Igneous',
            imageUrl: '../../img/Mars_Perseverance_NRF_0196_0684353674_409EBY_N0070000NCAM00705_03.png',
            stopColor: "#FF9466",
        },
        {
            name: 'Salette',
            sampleNumber: 'Sample No. 5',
            featureName: 'Brac',
            rockType: 'Rock Type: Igneous',
            imageUrl: '../../img/PIA24940-Watsons_View_of_Dourbes.png',
            stopColor: "#FFA666",
        },
        {
            name: 'Robine',
            sampleNumber: 'Sample No. 6',
            featureName: 'Issole',
            rockType: 'Rock Type: Igneous',
            imageUrl: '../../img/Mars_Perseverance_ZR0_0298_0693396851_894EBY_N0090000ZCAM08323_0340LMJ.png',
            stopColor: "#FFB966",
        },
        {
            name: 'Swift Run',
            sampleNumber: 'Sample No. 7',
            featureName: "Skinner Ridge",
            rockType: 'Rock Type: Sedimentary',
            imageUrl: '../../img/Mars_Perseverance_NLF_0490_0710456117_926ECM_N0261004NCAM00709_01_095J.png',
            stopColor: "#FFD466",
        },
    ];

    return (
        <div>
            <h1 style={{width: "100%", textAlign: "center", marginBottom: "3%"}}>Samples from Mars</h1>
            <div className='sampleCards'>

                <div className='scroll-comp'>
                    {sampleData.map((sample) => (
                        <svg xmlns="http://www.w3.org/2000/svg" width="230" height="400" viewBox="0 0 230 400" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0H220C225.523 0 230 4.47715 230 10V178L206.948 191.346C200.295 195.197 200.295 204.803 206.948 208.654L230 222V390C230 395.523 225.523 400 220 400H10C4.47715 400 0 395.523 0 390V222L23.0517 208.654C29.7046 204.803 29.7046 195.197 23.0517 191.346L0 178V10Z" fill="#1C1C1C" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0H220C225.523 0 230 4.47715 230 10V178L206.948 191.346C200.295 195.197 200.295 204.803 206.948 208.654L230 222V390C230 395.523 225.523 400 220 400H10C4.47715 400 0 395.523 0 390V222L23.0517 208.654C29.7046 204.803 29.7046 195.197 23.0517 191.346L0 178V10Z" fill="url(#paint0_radial_8_3)" />
                            <defs>
                                <radialGradient id="paint0_radial_8_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(57 400) rotate(14.8001) scale(309.26 357.965)">
                                    <stop stopColor={sample.stopColor} />
                                    <stop offset="1" stopColor="#1C1C1C" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                            <circle cx="115" cy="100" r="70" fill="white" />
                            <mask id="circle-mask">
                                <circle cx="115" cy="100" r="70" fill="white" />
                            </mask>
                            <image href={sample.imageUrl} x="45" y="30" width="140" height="140" mask="url(#circle-mask)" />
                            <text x="115" y="250" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">{sample.name}</text>
                            <text x="115" y="270" fill="white" fontSize="14" fontWeight="normal" textAnchor="middle" dominantBaseline="middle">{sample.featureName}</text>
                            <text x="115" y="320" fill="white" fontSize="16" fontWeight="normal" textAnchor="middle" dominantBaseline="middle">{sample.sampleNumber}</text>
                            <text x="115" y="350" fill="white" fontSize="16" fontWeight="normal" textAnchor="middle" dominantBaseline="middle">{sample.rockType}</text>

                        </svg>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SampleCards
