/*
  EDIT THIS FILE FIRST.
  Nearly all text/content on the site lives here.
  Keep image files in /assets/images and reference them below.
*/
window.PORTFOLIO = {
  person: {
    name: "Jarret Dlugy",
    role: "Mechanical Engineer",
    school: "University of Massachusetts Amherst",
    graduation: "December 2026",
    location: "Massachusetts",
    email: "jdlex926@gmail.com",
    linkedin: "https://www.linkedin.com/in/jarret-dlugy/",
    heroKicker: "Mechanical Engineering Portfolio",
    heroTitle: "Jarret Dlugy",
    heroCopy: "University of Massachusetts Amherst · December 2026",
    aboutTitle: "From Lexington, Massachusetts to UMass Amherst.",
    aboutTitle: "From Lexington, Massachusetts to UMass Amherst.",
    aboutCopy: "I grew up in Lexington, Massachusetts and am currently finishing my mechanical engineering degree at UMass Amherst. I like engineering most when I can actually build something, whether that means CAD, machining, prototyping, testing, or fixing something that did not work the first time. Outside of engineering, I enjoy strength training, running, hiking year-round, and traveling. I have visited Hungary, Vietnam, Switzerland, Bosnia, Cambodia, and Chile."
  },

  projects: [
    {
      id: "battery-organizer",
      label: "Amel Energy · 2025",
      title: "Battery Testing Chamber Organizer",
      cardDescription: "A 24-position, 3D-printed organization system for a growing battery test chamber.",
      deck: "A low-cost, rapidly manufacturable fixture that transformed an increasingly crowded battery test chamber into a more organized, traceable setup.",
      hero: "assets/images/battery-installed.jpg",
      heroAlt: "Completed red 24-position battery organizer installed inside a metal battery testing chamber.",
      heroCaption: "Final organizer installed in the battery testing chamber.",
      tags: ["SolidWorks", "3D Printing", "DFMA", "Battery Testing"],
      facts: {
        Role: "Battery Engineer Intern",
        Organization: "Amel Energy",
        Tools: "SolidWorks, FDM 3D printing",
        Output: "24-position test organizer"
      },
      sections: [
        {
          title: "Problem",
          body: "The chamber initially supported eight independent battery test channels with electrical leads hanging freely from the ceiling. With sixteen additional channels planned, the existing layout would increase cable congestion, make channel identification harder, and slow setup and troubleshooting."
        },
        {
          title: "Design response",
          body: "Designed a custom organizer in SolidWorks with 24 isolated compartments. Velcro-lined positions secure cells while keeping them removable, and integrated hooks allow the assembly to attach to existing lab equipment without a major chamber modification."
        },
        {
          title: "Manufacturing",
          body: "The component was designed as a low-cost, rapidly manufacturable solution and fabricated in PLA using FDM 3D printing. The geometry was developed around the existing chamber and test hardware rather than forcing a new lab layout."
        },
        {
          title: "Result",
          body: "The finished organizer reduces cable congestion, improves channel traceability, and makes connecting and disconnecting coin-cell batteries more efficient during test operations."
        }
      ],
      gallery: [
        { src: "assets/images/battery-before.jpg", alt: "Battery testing chamber before the organizer, with electrical leads hanging freely.", caption: "Before: cable leads suspended freely inside the chamber." },
        { src: "assets/images/battery-cad.jpg", alt: "SolidWorks CAD model of the 24-position battery organizer.", caption: "CAD development of the 24-position organizer." }
      ]
    },
    {
      id: "crankshaft-adapter",
      label: "UMass Mass Mileage · 2025–2026",
      title: "Crankshaft Adapter",
      cardDescription: "A custom drivetrain interface supporting a centrifugal clutch and engine timing gear.",
      deck: "A compact shaft adapter designed around torque transmission, concentric alignment, timing accuracy, and existing drivetrain geometry.",
      hero: "assets/images/crankshaft-assembly.jpg",
      heroAlt: "Small engine assembly on a workbench with a custom shaft adapter installed at the output shaft.",
      heroCaption: "Adapter integrated with the engine and drivetrain hardware.",
      tags: ["SolidWorks", "Mechanical Design", "Drawings", "Prototyping"],
      facts: {
        Role: "Drivetrain Team Co-Lead",
        Organization: "UMass Mass Mileage Club",
        System: "Vehicle drivetrain",
        Focus: "Power transmission + timing alignment"
      },
      sections: [
        {
          title: "Need",
          body: "The team selected a Noram Cheetah centrifugal clutch for its efficiency, reliability, and usability. A custom interface was required to connect the clutch to the existing drivetrain while also supporting and accurately locating the engine timing gear."
        },
        {
          title: "Requirements",
          body: "The adapter had to transmit drivetrain torque, maintain concentric alignment, preserve timing accuracy, and remain structurally sound under operating loads while fitting around existing OEM and team-designed hardware."
        },
        {
          title: "Design",
          body: "Reverse engineered relevant drivetrain geometry, created the shaft adapter in SolidWorks, and documented the part with an engineering drawing. The adapter provides axial positioning for the timing gear and interfaces with a modified manufacturer-supplied component using four fasteners."
        },
        {
          title: "Integration",
          body: "The completed design was assembled on the engine, providing a practical interface between the centrifugal clutch, engine output shaft, and timing system as part of the club's broader drivetrain-efficiency work."
        }
      ],
      gallery: [
        { src: "assets/images/crankshaft-clutch.jpg", alt: "Noram Cheetah centrifugal clutch.", caption: "Selected Noram Cheetah centrifugal clutch." },
        { src: "assets/images/crankshaft-drawing.jpg", alt: "Engineering drawing of the custom crankshaft adapter.", caption: "Engineering drawing used to define the custom adapter." }
      ]
    },
    {
      id: "cnc-standoff",
      label: "Manufacturing Project · 2025",
      title: "CNC Standoff Mount",
      cardDescription: "A constrained aluminum PCB mount designed for repeatable two-axis CNC manufacturing.",
      deck: "A manufacturing-focused term project balancing fixed interface geometry, PCB keep-out zones, tooling limits, and repeatable machining.",
      hero: "assets/images/cnc-parts.jpg",
      heroAlt: "Four machined aluminum standoff mounts lined up on a workbench.",
      heroCaption: "Four completed aluminum standoff mounts after CNC machining.",
      tags: ["CNC Mill", "DFMA", "GD&T", "Engineering Drawings"],
      facts: {
        Role: "CNC Machining Team Lead",
        Process: "Two-axis CNC milling",
        Material: "Aluminum",
        Tooling: "1/2-inch end mill"
      },
      sections: [
        {
          title: "Context",
          body: "The standoff mount supports a PCB and display mounting plate at a specified height while maintaining positional alignment in a larger assembly. Several dimensions and PCB no-touch zones were fixed, while the remaining geometry could be optimized by the team."
        },
        {
          title: "DFMA",
          body: "The part was designed around the available process and tooling. Geometry requiring tighter tolerances and repeatability was assigned to the CNC team, while other features were intentionally left for a downstream manual-machining group."
        },
        {
          title: "Machining",
          body: "All CNC features were programmed and machined on a two-axis CNC mill using a 1/2-inch end mill. Keeping one primary tool reduced tool changes and cycle time while complying with the project's manufacturing constraints."
        },
        {
          title: "Documentation",
          body: "The manufacturing drawing uses ordinate dimensioning to simplify CNC programming. Comprehensive manuacturing plan was submitted to professor for review."
        }
      ],
      gallery: [
        { src: "assets/images/cnc-assembly-drawing.jpg", alt: "Engineering drawing of the full PCB mounting assembly.", caption: "PCB mounting assembly and component relationships." },
        { src: "assets/images/cnc-part-drawing.jpg", alt: "Engineering drawing of the standoff mount geometry.", caption: "Part definition and constrained geometry." },
        { src: "assets/images/cnc-manufacturing-drawing.jpg", alt: "Manufacturing drawing of the standoff mount with dimensions and section view.", caption: "Manufacturing drawing prepared for CNC programming." }
      ]
    },
    {
      id: "fluid mechanics research",
      label: "Independent Study",
      title: "Elevated Jet in Crossflow Research",
      cardDescription: "Research project investigating the behavior of an common fluid dynamics structure",
      deck: "A research project documenting the dynamic behavior of a structure in both laminar and turbulent flow",
      hero: "assets/images/BetterzoomU1f1.png",
      heroAlt: "Elevated Jet in Crossflow",
      heroCaption: "Counter Rotating Vortex Pairs",
      tags: ["High Speed Videography","Experimental Research", "Fluid Mechanics", "3D Printing","Image Processing"],
      facts: {
        Role: "Research Assistant",
        Course: "Independent Study",
        Software: "MATLAB, SolidWorks, LaTeX",
        Output: "Formal document clearly highlighting research process"
      },
      sections: [
        {
          title: "Objective",
          body: "Generate high speed flow-field images capturing coherent fluid structures in laminar and turbulent regimes to develop a training dataset for machine learning model for reconstructing and simulating fluid velocity fields. The dataset will also support analysis and identification of established flow structures and their underlying fluid-dynamic characteristics."
        },
        {
          title: "First steps",
          body: "Ensured agreement between experimental and simulation conditions to generate representative training data for machine-learning models. Collaborated closely with the machine-learning team to define simulation boundary conditions and flow characteristics. A FDM 3D printed flow constriction was designed, prototyped, and manufactured in order to re-create simulation conditions."
        },
        {
          title: "Data Collection",
          body: "Utilized a Chronos high speed camera with optimized imaging parameters for image-based analysis. Experimentally evaluated both elevated jets in crossflow and conventional jets in crossflow across laminar and turbulent flow regimes. Replicated literature-reported flow conditions and scenario specific parameters, including flow ratios, to achieve representative jet structures and facilitate comparative analysis."
        },
        {
          title: "Final Deliverable",
          body: "Consolidated experimental results into a formal technical research report documenting experimental methodology, flow conditions, observed results, and comparisons with published literature. Processed and presented high speed imaging data to clearly resolve characteristic flow structures and visualize their breakdown with increasing turbulence."
        }
      ],
      gallery: [
        { src: "assets/images/IMG_0466.jpeg", alt: "Downstream image of flow structures behind an elevated jet in crossflow", caption: "Before: Looking upstream at counter rotating vortex pairs behind an elevated jet in crossfow." },
        { src: "assets/images/ChannelConstrictionCAD.png", alt: "Image of flow constriction", caption: "Image of 3D printed flow constriction used to mimic simulated Reynolds number." }
      ]
    },
  ],
    experience: [
    {
      role: "Mechanical Engineering Intern",
      company: "Lexington Medical Inc.",
      summary: "R&D design verification, test-fixture development, quantitative defect characterization, and inspection-method development for a new medical stapler product line.",
      period: "May–Aug 2026"
    },
    {
      role: "Drivetrain Team Co-Lead",
      company: "UMass Mass Mileage Club",
      summary: "Led a four-person drivetrain subteam focused on efficiency, reliability, reverse engineering, and mechanical design for an international fuel-economy competition.",
      period: "Sep 2025–May 2026"
    },
    {
      role: "Battery Engineer Intern",
      company: "Amel Energy",
      summary: "Battery-cell assembly, electrode manufacturing, test-fixture design, 3D printing, battery performance testing, and laboratory process documentation.",
      period: "May–Aug 2025"
    }
  ],

  skills: [
    {
      title: "Design & analysis",
      items: "SolidWorks · Engineering drawings · GD&T · DFMA · MATLAB"
    },
    {
      title: "Manufacturing & prototyping",
      items: "CNC milling · Lathe · FDM 3D printing · General machine-shop tooling · Soldering"
    },
    {
      title: "Testing & engineering workflow",
      items: "Design verification · Test fixtures · PDM/PLM · Excel · Technical documentation"
    }
  ]
};
