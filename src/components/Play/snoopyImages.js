
import Lottie from "lottie-react";
import snoopy from "../../images/play/snoopy/snoopy.json";
import snoopy_hi from "../../images/play/snoopy/snoopy_hi.json";
import snoopy_wave from "../../images/play/snoopy/snoopy_wave.json";
import card_front from "../../images/play/birthday/card_front.jpg";
import sip_crisp from "../../images/play/birthday/sip_crisp.png";
import "./snoopyImages.css";

export const snoopyImages = [{ 
    component: (
        <div style={{ backgroundColor: '#FFE5DF', display: 'flex', justifyContent: 'center', height: '100%' }}>
          <Lottie 
            animationData={snoopy} 
            loop={true}
            style={{ width: '100%', height: 'auto', maxWidth: '200px' }}
          />
        </div>
    )
  },
  { 
    component: (
        <div style={{ backgroundColor: '#E0ECD9', display: 'flex', justifyContent: 'center', height: '100%' }}>
          <Lottie 
            animationData={snoopy_hi} 
            loop={true}
            style={{ width: '100%', height: 'auto', maxWidth: '200px' }}
          />
        </div>
    )
  },
  { 
    component: (
        <div style={{ 
          backgroundColor: '#FFFBE4',
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100%',
          overflow: 'hidden',
          width: '125%', // Compensate for scale(0.8) - 100% / 0.8 = 125%
          marginLeft: '-12.5%' // Center the larger container
        }}>
          <Lottie 
            animationData={snoopy_wave} 
            loop={true}
            style={{
              maxHeight: '180px', 
              width: '100%'
            }}
            className="snoopy-wave-animation"
          />
        </div>
    )
  },
  {
    src: card_front,
    alt: "card front"
  },
  {
    src: sip_crisp,
    alt: "sip & crisp"
  },
]