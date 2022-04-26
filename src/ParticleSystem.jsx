import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import rectangle1 from "./img/rect1.svg";
import rectangle2 from "./img/rect2.svg";
import rectangle3 from "./img/rect3.svg";
import FastCar from './img/nsx341.png'

export default function ParticleSystem() {
  
  const [state, setState] = useState(false);

  const particlesInit = useCallback(async (main) => {
      await loadFull(main);
  });
  
  useEffect(() => {
        let animated = document.querySelector('.img');
        animated.addEventListener('animationend', () => {
          animated.classList.add('img-bounce');
          setState(true);
        });
  });
  // 

  return (
      <div className="hero-section">
      {state &&
        <Particles canvasClassName="particles-canvas"
        options={
          {
              "fullScreen": false,
              "background": {
                "color": {
                  "value": "#00045b"
                }
              },
              "fpsLimit": 90,
              "pauseOnOutsideViewport": true,
              "Life": {
                "count": 1,
                "duration": 2
              },
              "interactivity": {
                "events": {
                  "onClick": {
                    "enable": false,
                    "mode": "push"
                  },
                  "onHover": {
                    "enable": true,
                    "mode": "repulse"
                  },
                  "resize": false
                },
                "modes": {
                  "push": {
                    "quantity": 1
                  },
                  "repulse": {
                    "distance": 150,
                    duration: 0.9,
                    factor: 12
                  }
                }
              },
              "particles": {
                "links": {
                  "enable": false,
                },
                "collisions": {
                  "enable": false
                },
                "move": {
                  "enable": true,
                  "outModes": {
                    "default": "out"
                  },
                  "random": true,
                  "speed": {
                    "min": 12,
                    "max": 18
                  },
                  "straight": true
                },
                "number": {
                  "density": {
                    "enable": true,
                    "value_area": 1500
                  },
                  "value": 40
                },
                "opacity": {
                  "value": 0.9
                },
                "shape": {
                  type: "image",
                  options: {
                    "image": [
                      {
                        "src": rectangle2,
                        "replaceColor": true,
                        "particles": {
                          "color": { value: "#00EDFF" },
                          "move": { direction: "right" }
                        }
                      },
                      {
                        "src": rectangle3,
                        "replaceColor": true,
                        particles: {
                          color: { value: "#0040ff" },
                          move: { direction: "right" }
                        }
                      },
                      {
                        "src": rectangle1,
                        "replaceColor": true,
                        particles: {
                          color: { value: "#c261ff" },
                          move: { direction: "right" }
                        }
                      }
                    ]
                  },
                  "fill": true,
                  "close": true
                },
                "size": {
                  "random": false,
                  "value": {
                    "min": 25,
                    "max": 65
                  }
                }
              },
              "detectRetina": true
              }
            }
            init={particlesInit}
        />
      }
          <div className="hero-remark">
            <h1>Fast!</h1>
            <h1>Did I mention FAST?!</h1>
          </div>
          <div className="img">
            <img src={FastCar} alt="A fast car" />
          </div>
          <div className="features">
            <h2>ULTRA FAST SERVICE + SUBSCRIPTION</h2>
            <h2>AND EVEN MORE SERVICE!!!</h2>
          </div>
      </div>
    )
}