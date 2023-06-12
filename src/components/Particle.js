import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };
    return (
        <div className="App">

            <Particles
                id="tsparticles"
                init={particlesInit}

                options={{
                    "fullScreen": {
                        "enable": false,
                        "zIndex": 1
                    },
                    "particles": {
                        "number": {
                            "value": 8,
                            "density": {
                                "enable": false,
                                "value_area": 800
                            }
                        },
                        "color": {
                            value: ["#FFC122", "#FFE000", "#D93C3C", "#1BB85A", "#20BFF7"]
                        },
                        "shape": {
                            "type": "circle",
                            "options": {
                                "sides": 4
                            }
                        },
                        "opacity": {
                            "value": 0.8,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 20,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 15,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "rotate": {
                            "value": 0,
                            "random": true,
                            "direction": "clockwise",
                            "animation": {
                                "enable": true,
                                "speed": 5,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": false,
                            "distance": 600,
                            "color": "#03E6B6",
                            "opacity": 0.4,
                            "width": 2
                        },
                        "move": {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": ["grab"]
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "bubble"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 600,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 600,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true,
                    "background": {
                        "color": "",
                        "image": "",
                        "position": "50% 50%",
                        "repeat": "no-repeat",
                        "size": "cover",
                    }
                }}
            />

        </div>
    );
}

export default Particle;
