
import Lottie from "lottie-react";
import snoopy from "../../images/play/snoopy/snoopy.json";
import snoopy_hi from "../../images/play/snoopy/snoopy_hi.json";
import snoopy_wave from "../../images/play/snoopy/snoopy_wave.json";
import card_front from "../../images/play/birthday/card_front.jpg";
import card_back from "../../images/play/birthday/card_back.jpg";

export const snoopyImages = [{ 
    component: (
        <div style={{ backgroundColor: '#FFE5DF', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
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
        <div style={{ backgroundColor: '#E0ECD9', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Lottie 
            animationData={snoopy_wave} 
            loop={true}
            style={{maxWidth: '800px', maxHeight: '300px'}}
          />
        </div>
    )
  },
  {
    src: card_front,
    alt: "card front"
  },
  {
    src: card_back,
    alt: "card back"
  },]