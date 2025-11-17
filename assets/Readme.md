# Electronics & Computer Engineer Portfolio

A modern, responsive personal portfolio website showcasing skills, projects, and expertise in electronics engineering and software development.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth scrolling navigation
- Searchable projects section
- Professional animations and transitions
- Static contact form (ready for backend integration)
- GitHub Pages compatible

## File Structure

portfolio/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # All styling
│   ├── js/
│   │   └── script.js      # All JavaScript functionality
│   └── img/               # Images folder
└── README.md              # This file

## Setup

1. Clone or download this repository
2. Update personal information in `index.html`
3. Add your images to `assets/img/`
4. Test locally by opening `index.html` in a browser

## Deploy to GitHub Pages

1. Create a GitHub repository named `yourusername.github.io`
2. Push your files to the repository
3. Go to Settings > Pages
4. Select "main" branch as source
5. Your site will be live at `https://yourusername.github.io`

## Customization

- **Colors**: Edit CSS variables in `style.css` under `:root`
- **Content**: Update text in `index.html`
- **Projects**: Add/remove project cards in the Projects section
- **Social Links**: Update URLs in the Contact section

## Contact Form Integration

To make the contact form functional, integrate with:

- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Netlify Forms](https://www.netlify.com/products/forms/)

## 📝 License

Free to use for personal portfolios.


## FINAL CHECKLIST

### What You Need to Do:

1. Create the folder structure:

   portfolio/
   ├── index.html
   ├── assets/
   │   ├── css/
   │   │   └── style.css
   │   ├── js/
   │   │   └── script.js
   │   └── img/
   └── README.md


   PROJECTS SECTION;
     <!-- Projects Carousel with 2 Rows -->
    <div class="carousel-wrapper">
        <!-- Row 1 - Scrolls Left to Right -->
        <div class="carousel-track" id="carouselRow1">
            <div class="carousel-row-content">
                <!-- Project 1 -->
                <div class="project-card" data-keywords="robot embedded control arduino sensors balance gyroscope">
                    <h3 class="project-title">Self-Balancing Robot</h3>
                    <p class="project-description">
                        Designed and implemented a two-wheeled self-balancing robot using PID control algorithms.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">Arduino</span>
                        <span class="project-tag">PID Control</span>
                        <span class="project-tag">IMU Sensors</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>

                <!-- Project 2 -->
                <div class="project-card" data-keywords="security vehicle gps gsm iot theft detection tracking">
                    <h3 class="project-title">Vehicle Theft Detection System</h3>
                    <p class="project-description">
                        Developed an intelligent vehicle security system combining GPS tracking and GSM communication.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">GPS/GSM</span>
                        <span class="project-tag">IoT</span>
                        <span class="project-tag">Embedded Systems</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>

                <!-- Project 3 -->
                <div class="project-card" data-keywords="machine learning ml water leak detection ai sensor python">
                    <h3 class="project-title">ML-Based Water Leak Detection</h3>
                    <p class="project-description">
                        Created a machine learning system for early detection of water leaks using acoustic sensors.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">Python</span>
                        <span class="project-tag">Machine Learning</span>
                        <span class="project-tag">TensorFlow</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>

                <!-- Project 4 -->
                <div class="project-card" data-keywords="solar energy automation mppt power renewable">
                    <h3 class="project-title">Solar Energy Automation</h3>
                    <p class="project-description">
                        Engineered an automated solar tracking system with MPPT charge controller integration.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">Solar MPPT</span>
                        <span class="project-tag">Power Electronics</span>
                        <span class="project-tag">Automation</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>

                <!-- Project 5 -->
                <div class="project-card" data-keywords="web application react nodejs fullstack database api">
                    <h3 class="project-title">Full-Stack Web Application</h3>
                    <p class="project-description">
                        Built a responsive web application featuring authentication and real-time data processing.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">React</span>
                        <span class="project-tag">Node.js</span>
                        <span class="project-tag">MongoDB</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>

                <!-- Project 6 -->
                <div class="project-card" data-keywords="pcb design kicad altium hardware electronics circuit">
                    <h3 class="project-title">Custom PCB Development</h3>
                    <p class="project-description">
                        Designed multiple custom printed circuit boards for sensor modules and power supplies.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">PCB Design</span>
                        <span class="project-tag">KiCad</span>
                        <span class="project-tag">Altium</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>
            </div>
            
            <!-- Duplicate for seamless loop -->
            <div class="carousel-row-content" aria-hidden="true">
                <!-- Same 6 projects repeated -->
                <div class="project-card" data-keywords="robot embedded control arduino sensors balance gyroscope">
                    <h3 class="project-title">Self-Balancing Robot</h3>
                    <p class="project-description">
                        Designed and implemented a two-wheeled self-balancing robot using PID control algorithms.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">Arduino</span>
                        <span class="project-tag">PID Control</span>
                        <span class="project-tag">IMU Sensors</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>
                <div class="project-card" data-keywords="security vehicle gps gsm iot theft detection tracking">
                    <h3 class="project-title">Vehicle Theft Detection System</h3>
                    <p class="project-description">
                        Developed an intelligent vehicle security system combining GPS tracking and GSM communication.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">GPS/GSM</span>
                        <span class="project-tag">IoT</span>
                        <span class="project-tag">Embedded Systems</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>
                <div class="project-card" data-keywords="machine learning ml water leak detection ai sensor python">
                    <h3 class="project-title">ML-Based Water Leak Detection</h3>
                    <p class="project-description">
                        Created a machine learning system for early detection of water leaks using acoustic sensors.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">Python</span>
                        <span class="project-tag">Machine Learning</span>
                        <span class="project-tag">TensorFlow</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>
                <div class="project-card" data-keywords="solar energy automation mppt power renewable">
                    <h3 class="project-title">Solar Energy Automation</h3>
                    <p class="project-description">
                        Engineered an automated solar tracking system with MPPT charge controller integration.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">Solar MPPT</span>
                        <span class="project-tag">Power Electronics</span>
                        <span class="project-tag">Automation</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>
                <div class="project-card" data-keywords="web application react nodejs fullstack database api">
                    <h3 class="project-title">Full-Stack Web Application</h3>
                    <p class="project-description">
                        Built a responsive web application featuring authentication and real-time data processing.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">React</span>
                        <span class="project-tag">Node.js</span>
                        <span class="project-tag">MongoDB</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>
                <div class="project-card" data-keywords="pcb design kicad altium hardware electronics circuit">
                    <h3 class="project-title">Custom PCB Development</h3>
                    <p class="project-description">
                        Designed multiple custom printed circuit boards for sensor modules and power supplies.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">PCB Design</span>
                        <span class="project-tag">KiCad</span>
                        <span class="project-tag">Altium</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>
            </div>
        </div>

        <!-- Row 2 - Scrolls Right to Left -->
        <div class="carousel-track carousel-track-reverse" id="carouselRow2">
            <div class="carousel-row-content">
                <!-- Project 7 -->
                <div class="project-card" data-keywords="rf wireless antenna radio communication esp32">
                    <h3 class="project-title">RF Communication Boards</h3>
                    <p class="project-description">
                        Developed experimental RF circuits and wireless communication modules.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">RF Design</span>
                        <span class="project-tag">Wireless</span>
                        <span class="project-tag">ESP32</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>

                <!-- Project 8 -->
                <div class="project-card" data-keywords="mobile app android react native application">
                    <h3 class="project-title">Mobile Application</h3>
                    <p class="project-description">
                        Created cross-platform mobile apps for IoT device control and data visualization.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">React Native</span>
                        <span class="project-tag">Mobile Dev</span>
                        <span class="project-tag">Bluetooth</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>

                <!-- Project 9 -->
                <div class="project-card" data-keywords="internship industrial automation plc scada">
                    <h3 class="project-title">Industrial Automation Internship</h3>
                    <p class="project-description">
                        Contributed to industrial automation projects involving PLC programming and SCADA systems.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">PLC</span>
                        <span class="project-tag">SCADA</span>
                        <span class="project-tag">Industrial</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>

                <!-- Project 10 -->
                <div class="project-card" data-keywords="computer vision opencv image processing python">
                    <h3 class="project-title">Computer Vision Applications</h3>
                    <p class="project-description">
                        Developed image processing applications for object detection and tracking.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">OpenCV</span>
                        <span class="project-tag">Python</span>
                        <span class="project-tag">Computer Vision</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>

                <!-- Project 11 -->
                <div class="project-card" data-keywords="home automation iot smart home esp8266">
                    <h3 class="project-title">Smart Home Automation</h3>
                    <p class="project-description">
                        Designed a cost-effective home automation system with smartphone control.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">IoT</span>
                        <span class="project-tag">ESP8266</span>
                        <span class="project-tag">MQTT</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>

                <!-- Project 12 -->
                <div class="project-card" data-keywords="data acquisition sensor logging monitoring">
                    <h3 class="project-title">Data Acquisition System</h3>
                    <p class="project-description">
                        Built a versatile system for sampling multiple analog and digital sensors.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">Embedded C</span>
                        <span class="project-tag">ADC</span>
                        <span class="project-tag">Sensors</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>
            </div>
            
            <!-- Duplicate for seamless loop -->
            <div class="carousel-row-content" aria-hidden="true">
                <!-- Same 6 projects repeated -->
                <div class="project-card" data-keywords="rf wireless antenna radio communication esp32">
                    <h3 class="project-title">RF Communication Boards</h3>
                    <p class="project-description">
                        Developed experimental RF circuits and wireless communication modules.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">RF Design</span>
                        <span class="project-tag">Wireless</span>
                        <span class="project-tag">ESP32</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>
                <div class="project-card" data-keywords="mobile app android react native application">
                    <h3 class="project-title">Mobile Application</h3>
                    <p class="project-description">
                        Created cross-platform mobile apps for IoT device control and data visualization.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">React Native</span>
                        <span class="project-tag">Mobile Dev</span>
                        <span class="project-tag">Bluetooth</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>
                <div class="project-card" data-keywords="internship industrial automation plc scada">
                    <h3 class="project-title">Industrial Automation Internship</h3>
                    <p class="project-description">
                        Contributed to industrial automation projects involving PLC programming and SCADA systems.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">PLC</span>
                        <span class="project-tag">SCADA</span>
                        <span class="project-tag">Industrial</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>
                <div class="project-card" data-keywords="computer vision opencv image processing python">
                    <h3 class="project-title">Computer Vision Applications</h3>
                    <p class="project-description">
                        Developed image processing applications for object detection and tracking.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">OpenCV</span>
                        <span class="project-tag">Python</span>
                        <span class="project-tag">Computer Vision</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>
                <div class="project-card" data-keywords="home automation iot smart home esp8266">
                    <h3 class="project-title">Smart Home Automation</h3>
                    <p class="project-description">
                        Designed a cost-effective home automation system with smartphone control.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">IoT</span>
                        <span class="project-tag">ESP8266</span>
                        <span class="project-tag">MQTT</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>
                <div class="project-card" data-keywords="data acquisition sensor logging monitoring">
                    <h3 class="project-title">Data Acquisition System</h3>
                    <p class="project-description">
                        Built a versatile system for sampling multiple analog and digital sensors.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">Embedded C</span>
                        <span class="project-tag">ADC</span>
                        <span class="project-tag">Sensors</span>
                    </div>
                    <a href="#" class="project-link">View Details →</a>
                </div>
            </div>
        </div>
    </div>