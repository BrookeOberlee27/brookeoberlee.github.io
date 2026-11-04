/*
  EDIT THIS FILE FIRST.
  All text and media for the site lives here, in the same order as the
  table of contents slide. File names must match the files in
  /assets/images exactly, including capitalization (GitHub Pages is
  case-sensitive).

  Each project has "sections" (roughly one per slide). Each section has a
  title, optional intro text, bullets, and a list of media. Media is added
  with the folder helper: FOLDER.m("File name.ext", "Caption", "Alt text").
  Videos (.mp4 / .mov) are detected automatically.
*/
(() => {
  const folder = (name) => ({
    p: (file) => `assets/images/${name}/${file}`,
    m: (file, caption = "", alt = "") => ({
      type: /\.(mp4|mov)$/i.test(file) ? "video" : "image",
      src: `assets/images/${name}/${file}`,
      caption,
      alt: alt || caption
    })
  });

  const REGENT = folder("REGENT");
  const DELSYS = folder("Delsys");
  const REPRIEVE = folder("Reprieve");
  const MAKER = folder("Makerspace");
  const AERO = folder("Aeronautics");
  const BIO = folder("Bioprinter");
  const KNEE = folder("KneeVive");
  const MORRIS = folder("Morris Group");
  const HACK = folder("Hackathons");
  const CLASS = folder("Class Projects");
  const HOBBY = folder("Hobbies");

  window.PORTFOLIO = {
    person: {
      name: "Brooke Oberlee",
      tagline: "Engineering Portfolio",
      intro: [
        "Senior majoring in Mechanical Engineering with a minor in Environmental Science",
        "Commonwealth honors student at UMass Amherst",
        "Graduating Spring 2027"
      ],
      headshot: HOBBY.p("Slide1Headshot.jpg"),
      headshotAlt: "Brooke Oberlee smiling outdoors in front of tall pine trees",
      email: "oberlee27@gmail.com",
      linkedin: "https://www.linkedin.com/in/brooke-oberlee-152735669abc",
      location: "Massachusetts"
    },

    /* Order and grouping match the table of contents slide. "theme" picks the section background. */
    groups: [
      { id: "work", title: "Work experience", theme: "slate", projects: ["regent", "delsys", "reprieve", "makerspace"] },
      { id: "clubs", title: "Clubs and activities", theme: "lilac", projects: ["aeronautics", "bioprinter", "kneevive"] },
      { id: "research", title: "Research", theme: "cream", projects: ["morris-group"] },
      { id: "classes", title: "Class projects", theme: "navy", projects: ["manufacturing", "mechanical-components", "ece-smart-car"] },
      { id: "hackathons", title: "Hackathon projects", theme: "lilac", projects: ["ai-hardware-sorter", "shady-business"] }
    ],

    projects: [
      /* ---------------------------------------------------------------- Work */
      {
        id: "regent",
        title: "REGENT Craft",
        role: "Mechanical Systems Intern, Summer 2026",
        summary: "Redesigned the lower closeout assembly for the main foil, routed sea water intake for battery cooling, and built a litter fixture for a marine medevac demonstration.",
        tags: ["NX and Teamcenter", "Engineering Drawings", "GD&T", "Metal Fabrication", "3D Printing", "DFMA"],
        hero: REGENT.p("InternPhoto.jpg"),
        heroAlt: "REGENT Seaglider inside a hangar",
        sections: [
          {
            title: "Lower closeout assembly",
            bullets: [
              "Redesigned the lower closeout assembly for the fixed main foil with integrated sea water cooling hardware",
              "Made assembly drawings and component drawings with GD&T specifications for custom machined parts"
            ],
            media: [
              REGENT.m("Slide3MainFoil.png", "Location of the lower closeout on the main foil", "CAD of the main foil with the lower closeout location highlighted"),
              REGENT.m("Slide3ExplodedView.png", "Exploded view of the lower closeout assembly", "Exploded CAD view of the lower closeout assembly on the foil"),
              REGENT.m("Slide3Drawing1.png", "Component drawing with GD&T for a custom machined part", "Engineering drawing of a custom machined bracket"),
              REGENT.m("Slide3Drawing2.png", "Component drawing with GD&T for a custom machined part", "Engineering drawing of a custom machined block")
            ]
          },
          {
            title: "Sea water routing for the battery cooling system",
            bullets: [
              "Routed sea water intake tubing up and down the main foil case",
              "Designed mounts and braces for the sea water intake tubing",
              "Modified the catch plate for battery cooling by adding O-rings and sealant",
              "Helped integrate the system into the boat",
              "Made two assembly drawings for installation"
            ],
            media: [
              REGENT.m("Slide4SeawaterCoolingLoop.png", "Sea water cooling loop", "CAD of the sea water cooling tubing loop"),
              REGENT.m("Slide4Catchplate.png", "Catch plate modified with O-rings and sealant", "Exploded view of the modified catch plate"),
              REGENT.m("Slide4SeagliderinHangar.jpeg", "", "REGENT Seaglider inside a hangar"),
              REGENT.m("Slide4CoolingLooponFoil.png", "Mounts and braces for the intake tubing on the main foil case", "CAD of the main foil case with tubing, mounts, and braces")
            ]
          },
          {
            title: "Marine medevac litter demo",
            bullets: [
              "Developed a fixture to secure a stretcher to the Seaglider for a marine medevac demonstration",
              "Iterated the design in response to static structural analysis",
              "Quick turnaround, so custom machined components had to be manufactured within the week",
              "Modified COTS hardware and assembled the fixture in-house"
            ],
            media: [
              REGENT.m("Slide5FullLitterCAD.png", "Full litter and fixture CAD", "CAD of the stretcher mounted on rails with the fixture at each end"),
              REGENT.m("Slide5CloseupofFixture.png", "Close-up of the fixture", "CAD close-up of the litter fixture on the rail"),
              REGENT.m("Slide5CrossSectionView.png", "Cross section of the fixture", "Cross section view of the fixture"),
              REGENT.m("Slide5MCWLDrawing.png", "Assembly drawing", "Engineering assembly drawing of the litter fixture"),
              REGENT.m("Slide5MCWLAlterations.jpeg", "Modifying COTS hardware in the shop", "Workbench with fixture parts being modified"),
              REGENT.m("Slide5MCWLInSeaglider.jpeg", "The litter and fixture in the Seaglider", "Person lying on the stretcher mounted in the Seaglider")
            ]
          }
        ]
      },
      {
        id: "delsys",
        title: "Delsys",
        role: "Hardware and Manufacturing Intern, Summer 2025",
        summary: "Fabricated  PCBs and watertight enclosures on a desktop CNC machine. Helped develop prototypes for a biofeedback device",
        tags: ["PCB Fabrication", "CAM", "CNC Machining", "Rhino CAD"],
        hero: DELSYS.p("Slide6DelsysPCB.jpeg"),
        heroAlt: "Double-sided green PCB fabricated on a desktop CNC machine",
        sections: [
          {
            title: "PCBs and enclosures on a desktop CNC",
            bullets: [
              "Double-sided PCB fabricated on a desktop CNC machine",
              "Created toolpaths in a CAM application",
              {
                text: "Designed and developed prototypes of watertight PCB enclosures (CAD not shown)",
                sub: ["Selecting O-rings", "Reducing mass", "Improving heat dissipation", "Evaluating manufacturability"]
              }
            ],
            media: [
              DELSYS.m("Slide6DelsysPCB.jpeg", "Double-sided PCB fabricated on the desktop CNC machine"),
              DELSYS.m("Slide6DelsysCNCDesktop.MOV", "Aluminum enclosure milled on the desktop CNC machine"),
              DELSYS.m("Slide6DelsysCAM.png", "Toolpaths in the MakeraCAM")
            ]
          },
          {
            title: "Prototyping and supplier drawings",
            bullets: [
              "Prototyped and micro-soldered components for biofeedback devices with IR time-of-flight and pneumatic sensors",
              "Developed drawings and efficiently communicated with suppliers to rework a bellow for compression molding"
            ],
            media: [
              DELSYS.m("Slide7DelsysMicroscope.jpeg", "", "Micro-soldering at the microscope"),
              DELSYS.m("Slide7DelsysSensor.png", "", "Biofeedback device hardware")
            ]
          }
        ]
      },
      {
        id: "reprieve",
        title: "Reprieve Cardiovascular",
        role: "R&D Intern, Summer 2024 and Winter 2025",
        summary: "Conducted software verification tests and assembled a multi-functional test fixture. Collected and analyzed data for conductivity sensor.",
        tags: ["Software Verification", "EMC and ISO Testing", "Test Fixtures", "Regression Analysis"],
        hero: REPRIEVE.p("Slide8ReprieveTestFixture.jpeg"),
        heroAlt: "Multipurpose test fixture with circuit boards, cables, and 3D-printed mounts on a black board",
        sections: [
          {
            title: "Summer 2024: verification and test fixture",
            bullets: [
              {
                text: "Software verification, TIR 101, EMC, and ISO testing",
                sub: ["Diagnosed issues, maintained documentation, and assessed usability"]
              },
              {
                text: "Developed a multipurpose test fixture",
                sub: ["3D-printed mounts, extended cables, and modified an HDPE board"]
              },
              "Flashed software and firmware on system main boards, streamlined the process, and updated the procedure for release"
            ],
            media: [
              REPRIEVE.m("Slide8ReprieveTestFixture.jpeg", "Multipurpose test fixture")
            ]
          },
          {
            title: "Winter 2025: conductivity sensor",
            bullets: [
              "Used a multi-linear regression model to map impedance and temperature to conductivity, enabling the incorporation of the conductivity sensor into the device",
              "Assembled a testing apparatus to collect temperature and conductivity data from the system, a calibrated conductivity meter, and a temperature gauge"
            ],
            media: [
              REPRIEVE.m("ConductivitySensorSetup.jpg", "", "Testing apparatus"),
              REPRIEVE.m("Slide9ReprieveGraph.png", "", "Regression fit")
            ]
          }
        ]
      },
      {
        id: "makerspace",
        title: "UMass All Campus Makerspace",
        role: "Student Staff Member, Part-time",
        summary: "Repair and maintain equipment. Advise on student projects related to 3D printing, laser cutting, manual and CNC machining.",
        tags: ["3D Printing", "CNC Lathe", "Manual Mill", "Laser Cutting"],
        hero: MAKER.p("Slide10ManualMill.jpeg"),
        heroAlt: "Manual mill in the UMass Makerspace",
        sections: [
          {
            title: "What I do",
            bullets: [
              "Repair and advise on student projects related to the CNC mill, CNC lathe, manual mill, 3D printers, and laser cutter",
              "Co-lead for CNC lathe operations"
            ],
            media: [
              MAKER.m("Slide10Lathe.jpeg", "CNC lathe", "CNC lathe in the Makerspace"),
              MAKER.m("YoutubePhoto.png", " ", "Youtube photo"),
              MAKER.m("Slide10Tramming.MOV", "Tramming the vise on the CNC mill as part of regular maintenance duties")
            ]
          }
        ]
      },

      /* --------------------------------------------------------------- Clubs */
      {
        id: "aeronautics",
        title: "UMass Aeronautics",
        role: "Mechanical Systems and Manufacturing, 2023 to 2026",
        summary: "Designing, building, and integrating mission-specific components for our RC airplane and participation in the AIAA Design Build Fly competition.",
        tags: ["Dynamic Mechanisms", "Carbon Fiber Layup", "3D Printing", "ANSYS"],
        hero: AERO.p("Slide11Plane.jpeg"),
        heroAlt: "Black RC airplane with a banner pod under the wing on a hangar floor",
        sections: [
          {
            title: "Mechanical Systems 2025 to 2026",
            intro: "Developed an aerodynamic, external deployment mechanism for a 20 ft banner",
            media: [
              AERO.m("Slide11Plane.jpeg", "Plane at competition with banner release mechanism", "Black RC airplane with a banner pod under the wing"),
              AERO.m("Slide11TeamPicture.JPG", "Team Picture 2026", "The UMass Aeronautics team holding a team banner"),
              AERO.m("Slide11ExplodedView.png", "Exploded view of the final banner deployment mechanism", "Exploded CAD view of the banner deployment pod")
            ]
          },
          {
            title: "Initial design and prototyping",
             bullets: [
              "Finalized banner length and determined that there would not be enough space under the wing, so moved mechanism to be in-line with roll axis.",
              "Second iteration has an open top for quick insertion of banner during ground mission. A servo embedded in the mechanism rotates a door for release. Snap-fit clips on top for quick attachment to fuselage underside.",
              "Altered shape to be more aerodynamic in third iteration but needed gear train to reach hinge rod (and increase torque)",
              "Smaller gears were fragile and the shafts were difficult to align in the 3D printed enclosure so the gears did not mesh properly. In the fourth iteration we sized up the servo and switched to a belt-pulley transmission."
            ],
            media: [
              AERO.m("Slide12FirstBannerRelease.png", "First design for under the wing", "CAD of the first banner release design"),
              AERO.m("Slide12SecondBannerRelease.png", "Second design for under the fuselage", "CAD of the second banner release design"),
              AERO.m("Slide12ThirdDesign.MOV", "Third design with gear train"),
              AERO.m("Slide12FourthDesign.jpeg", "Fourth design with belt and pulleys", "3D-printed fourth design with a belt and pulleys")
            ]
          },
          {
            title: "Analysis and testing",
            bullets: [
              "Static structural analysis in ANSYS verified that the closed door could withstand over 3x the banner load."
            ],
            media: [
              AERO.m("Slide13BannerRelease.MOV", "Banner release"),
              AERO.m("Slide13BannerReleaseCarTesting.MOV", "Banner release car testing"),
              AERO.m("Slide13BannerReleaseClose.MOV", "Close-up of the banner release"),
              AERO.m("Slide13BannerReleaseFEA.png", "Static structural analysis in ANSYS", "ANSYS stress plot of the banner pod"),
              AERO.m("Slide13BannerReleaseHighSpeedTesting.jpeg", "High-speed testing", "Banner pod in high-speed testing")
            ]
          },
          {
            title: "Mechanical Systems 2024 to 2025",
            bullets: ["Developed a lightweight glider attachment and release mechanism"],
            media: [
              AERO.m("Slide14Plane.png", "CAD of the 2025 Plane", "CAD of a red and brown RC airplane"),
              AERO.m("Slide14AeroTeamPicture.jpg", "Team Picture 2025", "The UMass Aeronautics team posing with the aircraft outdoors")
            ]
          },
          {
            title: "Glider release and attachment",
            bullets: [
              "Glider release mechanism on the aircraft side: a micro servo pulls a pin to deploy the glider",
              "Attachment clip on the glider side: designed for quick installation and consistent release; moved from a bistable clip to a \"tree\" snap fit due to printer resolution limitations",
              "Sliding hatch on the aircraft side to cover the connection point"
            ],
            media: [
              AERO.m("Slide15GliderReleaseFEA.png", "Static structural analysis"),
              AERO.m("GliderClipTesting.mov", "Initial testing"),
              AERO.m("PETGClip.jpeg", "Bistable PETG clip"),
              AERO.m("Slide15GliderReleaseTree", "Tree snap fit clip"),
              AERO.m("Slide15GliderReleaseDemo.mp4", "Iteration 2 testing"),
              AERO.m("Slide15GliderReleaseHinge.mp4", "Release mechanism with hinge", "Hinge")
            ]
          },
          {
            title: "Manufacturing 2023 to 2024",
            bullets: [
              "Division goal: create the team's first carbon fiber fuselage and landing gear, establishing a vacuum-bagged, wet-layup protocol"
            ],
            media: [
              AERO.m("Slide16Plane.png", "2024 Airplane CAD", "CAD of an RC airplane with a cutaway fuselage"),
              AERO.m("Slide16WetLayup.png", "Vacuum-bagged wet layup", "Vacuum pump and regulator connected to a vacuum-bagged carbon fiber layup"),
              AERO.m("Slide1PrintedMolds.png", "Encountered challenges with the mold release. Switched from a foam and fiberglass mold to 3D-printed mold sections superglued together, covered in epoxy, and sanded down.", "Two 3D-printed fuselage molds"),
              AERO.m("Slide17LandingGearCAD.png", "Carbon fiber landing gear", "CAD of the carbon fiber landing gear"),
              AERO.m("Slide17FuselageCAD.png", "Carbon fiber fuselage", "CAD of the carbon fiber fuselage")
            ]
          }
        ]
      },
      {
        id: "bioprinter",
        title: "Bioprinter",
        role: "Building a novel, patented bioprinter, 2024 to 2026",
        summary: "Integrating a recoating system into a FRESH bioprinter to increase print volumes and improve print accuracy. Our bioprinter, \"re-Fresh,\" placed first in the 2025 UMass Tech Challenge.",
        tags: ["SolidWorks", "Fusion 360 CAM", "CNC Machining and Plasma Cutting", "Firmware Configuration"],
        hero: BIO.p("Slide18BioprinterRender.png"),
        heroAlt: "Render of the re-Fresh bioprinter with a support bath and recoating system",
        sections: [
          {
            title: "Building a bioprinter, 2024 to 2026",
            intro: "Integrating a recoating system into a FRESH bioprinter to increase print volumes (deeper support baths) and improve print accuracy.",
            bullets: [
              "Longer, unreinforced needles cause unwanted needle deflection at higher speeds",
              "The recoating system allows us to build the support matrix (bath) and the bioink construct layer by layer",
              "Our bioprinter, named \"re-Fresh,\" placed first in the 2025 UMass Tech Challenge",
              "Concurrently, we are filing for a provisional patent (approval pending)"
            ],
            media: [
              BIO.m("Slide18BioprinterRender.png", "", "Render of the re-Fresh bioprinter"),
              BIO.m("Slide18TechChallenge.jpg", "2025 UMass Tech Challenge", "Team holding a large check at the 2025 UMass Tech Challenge")
            ]
          },
          {
            title: "Building bioink and support media extrusion systems",
            bullets: [
              {
                text: "Built a bioink syringe extrusion system capable of temperature sensing and control",
                sub: ["Integrated a Peltier module, heat sink, and thermistor"]
              },
              "Customized the firmware of a Duet 2 Wifi control board for temperature sensing and control",
              "Developed a scissor lift stage lowering mechanism in parallel (not pictured)",
              {
                text: "Helped develop the support media pump mechanism",
                sub: ["A stepper motor attached to a pinion moves along a rack and compresses the syringe containing support media"]
              }
              ],
            media: [
              BIO.m("Slide19BlackAndWhiteSyringeExtruder.jpeg", "V1 of bioink syringe extruder", "Syringe extruder mounted on the printer frame"),
              BIO.m("Slide19InitialPrototypeOfPeltier.jpeg", "Initial prototype of the Peltier module mount for the syringe extruder"),
              BIO.m("Slide19BioprinterV1.jpeg", "V1 of the bioprinter"),
              BIO.m("Slide19CustomizeFirmware.MOV", "Customizing firmware for the Duet 2 Wifi control board"),
              BIO.m("Slide20SupportMediaExtrusion.jpeg", "Support media pump mechanism"),
              BIO.m("Slide20MakingtheSlot.MOV", "Making the slot for the rack to sit in"),
              BIO.m("Slide20V3.jpeg", "V3 of the bioink syringe extruder"),
              BIO.m("Slide20BioinkSyringeExtruder.MOV", "Bioink syringe extruder testing")
            ]
          },
        ]
      },
      {
        id: "kneevive",
        title: "MedTech: KneeVive",
        role: "KneeVive, 2023 to 2024",
        summary: "Building an at-home, affordable osteoarthritis symptom-mitigation device that applies daily vertical traction therapy. Won over $2,000 in the 2024 UMass Tech Challenge.",
        tags: ["Sensing and Actuation", "3D Printing", "OnShape", "Arduino"],
        hero: KNEE.p("Slide31KneeViveBootPrototype.png"),
        heroAlt: "KneeVive prototype built on a walking boot with a thigh plate mounted above",
        sections: [
          {
            title: "The device",
            bullets: [
              "At-home, affordable osteoarthritis symptom-mitigation device",
              "Daily vertical traction therapy shown to relieve pain",
              "Thigh plate and linear actuator system applies pressure to the underside of the knee, simulating the therapy"
            ],
            media: [
              KNEE.m("Slide31KneeViveBootPrototype.png", " ", "KneeVive prototype built on a walking boot"),
              KNEE.m("Slide31Electronics.mp4", "", "Electronics prototype with an Arduino, LCD screen, and force sensor")
            ]
          },
          {
            title: "My contributions",
            bullets: [
              "Modeled and printed the thigh plate, top mounting bracket, remote, and remote holder (and an arm skeleton for a separate project)",
              "Integrated the LCD screen and force sensor failsafe mechanism (alarms when the linear actuator exceeds a force threshold)",
              "Experimented with a force sensor resistor and then transitioned to a 20 kg load cell"
            ],
            media: [
              KNEE.m("Slide32ThighCradle.png", "Thigh plate", "CAD of the thigh plate"),
              KNEE.m("Slide32ArmExoskeleton.png", "Arm skeleton", "CAD of an arm skeleton"),
              KNEE.m("Slide32Remote.png", "Remote", "CAD of the remote"),
              KNEE.m("Slide32SchematicForLCD.png", "Schematic for the LCD screen and force sensor failsafe", "Wiring schematic with an Arduino Uno, LCD, linear actuator, and force sensor"),
              KNEE.m("Slide32SecondSchematicforForceSensor.png", "Schematic for the 20 kg load cell", "Wiring schematic of a load cell and HX711 amplifier with an Arduino Uno")
            ]
          }
        ]
      },

      /* ------------------------------------------------------------ Research */
      {
        id: "morris-group",
        title: "Morris Group Research",
        role: "Polymer Science and Engineering",
        summary: "Helping characterize the stability and selectivity of PET-degrading enzymes for end of life management of plastic water bottles.",
        tags: ["Nanoparticle Precipitation", "High-throughput Protein Expression", "Dynamic Light Scattering", "Enzyme Cooling"],
        hero: MORRIS.p("Slide24GreenBoxOfCells.jpeg"),
        heroAlt: "Green box of cell samples in a grid of small colored tubes",
        sections: [
          {
            title: "Polymer Science and Engineering",
            bullets: [
              "Mechanical recycling of PET (polyethylene terephthalate) is inefficient. Biodegradation is a promising alternative.",
              "Using high-throughput and automated protocol development to screen for PET degradation enzymes",
              "Modulating crystallinity and controlling for surface area of PET nanoparticles to characterize how enzymatic structure affects activity, stability, and selectivity"
            ],
            media: [
              MORRIS.m("Slide23GroupPhoto.png", "Morris Group", "Morris Group members posing in a hallway"),
            ]
          },
          {
            title: "Determining the best expressing conditions for the PET-degrading enzymes of interest",
            bullets: [
              "Cloning (and simulating cloning in ApE)",
              "Growing up and transforming cells",
              "Helping synthesize combinatorial protein expression platforms",
              "Extracting and purifying DNA",
              "Measuring the concentration of nucleic acids with a nanophotometer",
              "Measuring cell concentration with a plate reader (OD600)",
              "Making broths and autoclaving supplies"
            ],
            media: [
              MORRIS.m("Slide24Cloning.png", "Plasmid map from simulated cloning", "Circular plasmid map"),
              MORRIS.m("Slide24GelExtraction.png", "Gel used for DNA extraction", "Gel electrophoresis image with several lanes of DNA bands"),
              MORRIS.m("Slide24GreenBoxOfCells.jpeg", "DNA samples", "Green box of cell samples in a grid of small colored tubes")
            ]
          },
          {
            title: "PET Nanoparticles Precipitation",
            bullets: [
              "Precipitating out PET nanoparticles",
              "Measuring particle size with Dynamic Light Scattering (DLS)",
              "Determining the optimal volume fraction of antisolvent for longer growth periods"
            ],
            media: [
              MORRIS.m("Slide25Precipitating.MOV", "", "Precipitating out PET nanoparticles"),
              MORRIS.m("Slide25Rotovap.jpeg", "", "Rotary evaporator setup in a fume hood"),
              MORRIS.m("Slide25ParticleDiameter.png", "", "Plot of particle diameter distributions from dynamic light scattering"),
              MORRIS.m("Slide25VolumeFraction.png", "", "Plot of normalized absorbance against volume fraction of antisolvent")
            ]
          },
          {
            title: "96-well plate cooling unit",
            bullets: [
              "Developed a 96-well plate cooling unit for the lab robots",
              "Cut and machined features in the aluminum plates and heat sink with fan",
              "Drilled and tapped holes for standoff mounts",
              "Mounted two Peltier modules with thermal paste"
            ],
            media: [
              MORRIS.m("Slide26CoolingUnitMill.jpeg", "Machining the aluminum plate on the mill"),
              MORRIS.m("Slide26CoolingUnit.jpeg", "Assembled cooling unit", "Cooling unit with aluminum plates, a heat sink, and standoffs")
            ]
          }
        ]
      },

      /* ------------------------------------------------------------ Classes */
      {
        id: "manufacturing",
        title: "Manufacturing",
        role: "CNC Machining Team Lead, Fall 2025",
        summary: "Designed and machined five aluminum standoff mounts for a PCB fixture assembly.",
        tags: ["CNC Machining", "Engineering Drawings", "GD&T", "Design for Manufacturing"],
        hero: CLASS.p("CNCCoverPhoto.jpeg"),
        heroAlt: "Five machined aluminum standoff mounts in a row",
        sections: [
          {
            title: "Manufacturing class project",
            bullets: [
              "Goal: design and machine five aluminum standoff mounts for a PCB fixture assembly",
              "Apply GD&T standards to inspection drawings",
              "Determine the appropriate order of operations, tooling specifications, and fixturing",
              "Calculate speeds and feeds, number of passes, and total machining time",
              "Effectively communicate with shop technicians, team members, and other business units"
            ],
            media: [
              CLASS.m("Slide27PCBMountAssembly.png", "Standoff mount in the PCB fixture assembly", "CAD of the PCB fixture assembly with standoff mounts"),
              CLASS.m("Slide27CNCStandoffMount.mp4", "Simulation of toolpaths for the standoff mount"),
              CLASS.m("Slide27StandoffDrawing.png", "Drawing with GD&T", "Engineering drawing of the standoff mount with GD&T"),
              CLASS.m("Slide27MachinedStandoffs.jpeg", "The five finished machined standoff mounts")
            ]
          }
        ]
      },
      {
        id: "mechanical-components",
        title: "Design of Mechanical Components",
        role: "Wrench project and static structural analysis",
        summary: "Designed, fabricated, and tested a lightweight wrench capable of withstanding 290 lb-in of torque. Static structural and contact analysis in ANSYS informed each design iteration.",
        tags: ["ANSYS", "Static Structural and Contact FEA", "MATLAB", "Manual Milling"],
        hero: CLASS.p("Slide28WrenchContactAnalysis.png"),
        heroAlt: "Machined aluminum wrench with a row of circular cutouts",
        sections: [
          {
            title: "Wrench class project",
            bullets: [
              "Goal: design, fabricate, and test a lightweight wrench capable of 290 lb-in torque",
              "Use MATLAB to calculate initial stresses for different shaft cross sections and loading cases",
              {
                text: "Iteratively improve the wrench design and simulate performance in ANSYS Mechanical",
                sub: [
                  "Consider manufacturability",
                  "Reduce mass",
                  "Distinguish stress concentrators from FEA numerical artifacts",
                  "Calculate FOS from the max von Mises equivalent stress",
                  "Conduct contact analysis for the bolt and wrench jaws to reduce the risk of slipping"
                ]
              }
            ],
            media: [
              CLASS.m("Slide28WrenchANSYS.png", "Static structural analysis of the wrench in ANSYS", "ANSYS equivalent stress plot of the wrench jaw"),
              CLASS.m("Slide28WrenchContactAnalysis.png", "Contact analysis of the bolt and wrench jaws", "ANSYS contact analysis of the wrench jaws on a bolt head"),
              CLASS.m("Slide28MachinedWrench.jpeg", "The machined wrench")
            ]
          },
          {
            title: "More static structural analysis",
            intro: "More static structural analysis for design classes, including simulating fatigue and contact responses.",
            media: [
              CLASS.m("Slide29GearsZoomedIn.png", "Gear tooth contact stress plot", "ANSYS equivalent stress plot of meshing gear teeth"),
              CLASS.m("Slide29SafetyFactor.png", "Safety factor contour plot", "ANSYS safety factor plot of a triangular bracket"),
              CLASS.m("Slide29FatigueLife.png", "Fatigue life contour plot", "ANSYS fatigue life plot of a filleted joint")
            ]
          }
        ]
      },
      {
        id: "ece-smart-car",
        title: "ECE Smart Car",
        role: "Arduino circuits and programming",
        summary: "Built a smart-car that detects obstacles or responds to light with movement, by blinking an LED, or emitting a sound.",
        tags: ["Circuit Design", "Arduino IDE"],
        hero: CLASS.p("ECECoverPhoto.jpeg"),
        heroAlt: "Smart car breadboard circuit",
        sections: [
          {
            title: "ECE smart car",
            bullets: [
              "Build a \"smart car\" that detects obstacles or responds to light with movement, by blinking an LED, or by emitting a sound",
              "Program an ATmega328P microcontroller on an Arduino Uno development board",
              "Build circuits with infrasound sensors, photoresistors, piezo speakers, op amps, transistors, capacitors, etc."
            ],
            media: [
              CLASS.m("Slide30Video1.MOV", "Smart car demo 1"),
              CLASS.m("Slide30Video2.MOV", "Smart car demo 2"),
              CLASS.m("Slide30Video3.mov", "Smart car demo 3")
            ]
          }
        ]
      }

    /* --------------------------------------------------------- Hackathons */
      {
        id: "ai-hardware-sorter",
        title: "AI Hardware Sorter",
        role: "UMass Hackathon XII",
        summary: "Helped develop an automatic sorting device that trains an LLM to identify fasteners from a mix of miscellaneous hardware.",
        tags: ["Rapid Prototyping", "CAD", "Wood Working"],
        hero: HACK.p("Slide21AIHardwareSorter.jpg"),
        heroAlt: "Hardware sorter with belt feeds, a purple sorting cylinder, and a wooden frame on a workbench",
        sections: [
          {
            title: "AI Hardware Sorter",
            bullets: [
              "Training an AI model to autonomously identify and sort mechanical fasteners",
              {
                text: "The mechanical components I helped with:",
                sub: [
                  "Two belt feeds: 3D-printed TPU belts, two geared stepper motors rotating recycled spools (our pulleys), and wood and particle board structures",
                  "A vibrating aluminum channel suspended between two posts, with two vibratory motors on either side of the sheet",
                  "A 3D-printed cylinder with dividers attached to a continuous rotation servo to organize the parts",
                  "Wooden frame and ramp"
                ]
              }
            ],
            media: [
              HACK.m("Slide21AIHardwareSorter.jpg", "", "The AI Hardware Sorter at UMass Hackathon XII")
            ]
          }
        ]
      },
      {
        id: "shady-business",
        title: "Shady Business",
        role: "Wind-powered grow light, UMass Hack(H)er413 2025",
        summary: "Helped develop a mini wind turbine that powers a grow light, keeping our plants and energy green!",
        tags: ["Rapid Prototyping", "CAD", "Woodworking"],
        hero: HACK.p("Slide22ShadyBusiness.jpg"),
        heroAlt: "Small wind turbine next to a grow light stand over a potted plant on a wooden board",
        sections: [
          {
            title: "Wind-powered grow light",
            bullets: [
              "Developing a mini wind turbine to power a grow light (keeping our plants and energy green!)",
              {
                text: "The mechanical components:",
                sub: [
                  "Mini wind turbine with removable blades",
                  "Brushless DC motor with a 90:1 gear ratio (necessary to convert the high torque rotation of the blades to high speed rotation of the generator)",
                  "Grow light stand with a removable lid (to access and cover electronics)"
                ]
              }
            ],
            media: [
              HACK.m("Slide22ShadyBusiness.jpg", "", "Shady Business prototype at UMass Hack(H)er413 2025")
            ]
          }
        ]
      },
    ],

    /* Slide: Interests outside of engineering */
    interests: [
      HOBBY.m("Cricket.JPEG", "I love to be outside...gardening, hiking, and appreciating nature."),
      HOBBY.m("Yellowstone.jpeg", "", "Yellowstone picture"),
      HOBBY.m("Slide33Pottery.jpeg", "I recently took a wheel throwing pottery class and loved it!"),
      HOBBY.m("Slide33BlueBowl.jpeg", "", "Blue glazed pottery bowl held over a carpet"),
      HOBBY.m("Slide33Dog.jpg", "Traveling! In January 2026 I volunteered on a bamboo farm in Greece", "Dog resting in a green field on a farm with hills behind"),
      HOBBY.m("Slide33Sushi.jpeg", "...and made my first sushi rolls. I'm learning how to cook and am always willng to try a new recipe!")
    ],

    /* Slide: Skills and contact information */
    skills: [
      { title: "Software", items: "SolidWorks, NX and Teamcenter, Rhino, Onshape, Fusion 360 CAM, Makera CAM, ANSYS Workbench & Mechanical, MATLAB & Simulink, Linux" },
      { title: "Prototyping", items: "CNC Machining (Mill and Lathe), Manual Milling, Laser Cutting, 3D Printing, Plasma Cutting (in training), Saws for Wood and Metal Work (Bandsaw, Cold Saw, Miter Saw, Table Saw), Drill Press, Hand and Power Tools, Composite Part Fabrication (Wet Layup, Vacuum Infusion)" },
      { title: "Electronics", items: "Arduino, Soldering, PCB Fabrication, Debugging and Testing Software" },
      { title: "Documentation", items: "Engineering Drawings, GD&T, Jira, BOM, Microsoft Office (Excel, PowerPoint, Teams, etc.)" },
      { title: "Research", items: "Wet Lab Experience, Scientific Writing, Literature Research" }
    ]
  };
})();
