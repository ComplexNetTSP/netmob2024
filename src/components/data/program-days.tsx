import { link } from "fs";
import { title } from "process";
import React from "react";

export const day1 = [
  { time: "08:00 - 09:00", title: "Registration and Breakfast" },
  { time: "09:00 - 09:30", title: "Welcome" },
  { time: "09:30 - 10:30", title: "Session A: Modelling Human Mobility", link: "#session-a" },
  { time: "10:30 - 10:45", title: "Coffee Break" },
  { time: "10:45 - 11:45", title: "Session B: Urban Segregation and Mobility Barriers", link: "#session-b"},
  { time: "11:45 - 12:45", title: "Session C: Mobility in the Context of Socio-Economic Vulnerability" , link: "#session-c"},
  { time: "12:45 - 14:00", title: "Lunch and Conference Poster Session" },
  { time: "14:00 - 14:45", title: "Keynote: Neave O’Clery: Can we do policy impact evaluation using mobile phone data in low data settings?" },
  { time: "14:45 - 15:00", title: "Coffee Break" },
  { time: "15:00 - 16:00", title: "Session D: Health and Epidemiology", link: "#session-d" },
  { time: "16:00 - 17:00", title: "Session E: Covid 19, human mobility and the distribution of economic activity", link: "#session-e" },
]

export const day2 = [
  { time: "08:00 - 09:00", title: "Breakfast" },
  { time: "09:00 - 10:00", title: "Keynote: Ali Mostafavi: Decoding the Anatomy of Resilient Communities Based on Human Mobility Shifts" },
  { time: "10:00 - 11:00", title: "Session F: Urban Transport Systems", link: "#session-f" },
  { time: "11:00 - 11:15", title: "Coffee Break" },
  { time: "11:15 - 12:15", title: "Session G: AI and machine learning methods applied to studying mobility", link: "#session-g" },
  { time: "12:15 - 13:30", title: "Lunch and Challenge Poster Session" },
  { time: "13:30 - 14:30", title: "Session H: Social Media, ICT and Human Behavior", link: "#session-h" },
  { time: "14:30 - 15:30", title: "Session I: Measuring Mobility with MPD: Methods and Limitations", link: "#session-i" },  
  { time: "15:30 - 15:45", title: "Coffee Break" },
  { time: "15:45 - 16:30", title: "Session J: Policy Application of MPD", link: "#session-j" },
  { time: "16:30 - 17:30", title: "Policymaker Session" },
  { time: "17:30", title: "Reception" },
]

export const day3 = [
  { time: "08:00 - 09:00", title: "Breakfast" },
  { time: "09:00 - 10:00", title: "Data Challenge Session 1", link: "#session-1" },
  { time: "10:00 - 11:00", title: "Data Challenge Session 2", link: "#session-2" },
  { time: "11:00 - 11:15", title: "Coffee Break" },
  { time: "11:15 - 12:15", title: "Data Challenge Session 3", link: "#session-2" },
  { time: "12:15 - 12:45", title: "Awards + Closing" },
]

export const sessionsDay1 = [
  {
    name: "Session A: Modelling Human Mobility", 
    id : "session-a",
    papers: [
      {title: "YJMob100K: City-scale and longitudinal dataset of anonymized human mobility trajectories",
       authors: "Takahiro Yabe, Kota Tsubouchi, Toru Shimizu, Yoshihide Sekimoto, Kaoru Sezaki, Esteban Moro, Alex Pentland"},
      {title: "Decomposing geographical and universal aspects of human mobility", authors: "Louis Boucherie"},
      {title: "One rule does not fit all: deviation from universality in human mobility modelling", authors : "Ludovico Napoli, Marton Karsai, Esteban Moro"},
      {title: "Comparing Fairness of Generative Mobility Models", authors: "Afra Mashhadi, Daniel Wang, Ekin Ugurel"},
    ]
  },{
    name: "Session B: Urban Segregation and Mobility Barriers",
    id : "session-b",
    papers: [
      {title: "Generation gaps in activity space segregations: A case study of Tokyo metropolitan areas using human mobility GPS data",
        authors: "Chenchen Sun, Yuya Shibuya, Yoshihide Sekimoto"}, 
      {title: "Tracing Activity Space Segregation in US Metro Areas Using GPS Data", authors: "Yongjun Zhang"},
      {title: "Unsupervised embedding of mobility reveals invisible barriers in US cities", authors: "Minsuk Kim, Guangyuan Weng, Esteban Moro, Yong-Yeol Ahn"},
      {title: "Urban Segregation and Daily Human Mobility Patterns in Berlin", authors: "Ashish Thampi, Marlli Zambrano Zambrano, Alejandra Rincon, Andrzej Jarynowski, Vitaly Belik, Steven Schulz"},
    ]
  }, {
    name: "Session C: Mobility in the Context of Socio-Economic Vulnerability",
    id : "session-c",
    papers: [
      {title:"What makes for a successful ‘MPD for Policy’ initiative? Lessons learnt and best practice", authors: "Thomas Smallwood, Daniel Power, Sarah Allen, Francky Salomon, Trevor Monroe, Sveta Milusheva, Esperanza Magpantay,Cathy Riley, Sophie Delaporte"},
      {title:"Unconstrained mobility patterns reveal significant gender differencess", authors: "Silvia De Sojo, Sune Lehmann, Laura Alessandretti"},
      {title:"Bias in Smartphone Mobility Estimates in Low Smartphone Penetration Settings", authors: "Sveta Milusheva, Daniel Bjorkegren, Leonardo Viotti"},
      {title:"Mobility and Vulnerability: The Role of Informal Employment", authors: "Ollin Langle Chimal, Marta Gonzalez, Marco Rosas, Christopher Chavez"},
    ]
  }, {
    name: "Session D: Health and Epidemiology",
    id : "session-d",
    papers: [
      {title:"Analysis of performance improvements and bias associated with human mobility data use in COVID-19 case prediction models", authors: "Saad Mohammad Abrar, Naman Awasthi, Daniel Smolyak, Vanessa Frias-Martinez"},
      {title:"Iterating short periods of non-pharmaceutical interventions mitigates loss of adherence to restrictions", authors: "Albano Rikani, Laura Di Domenico, Chiara E. Sabbatini, Victor Navarro, Leo Ferres, Jocelyn Raude, Vittoria Colizza"},
      {title:"Large-scale population mobility data provides meaningful indicators of fast food intake and predicts diet-related diseases across diverse populations", authors: "Abigail Horn, Kayla de la Haye, Esteban Moro, Bernardo Garcia Bulle-Bueno, Mohsen Bahrami, Sandy Pentland, Burcin Bozkaya, Yan Cui, John Wilson"},
    ]
  }, {
    name: "Session E: Covid 19, human mobility and the distribution of economic activity",
    id : "session-e",
    papers: [
      {title:"An assessment of small business impact disparities with respect to ethnorace in metropolitan areas in the US using mobility data", authors: "Saad Mohammad Abrar, Kazi Tasnim Zinat, Naman Awasthi, Vanessa Frias-Martinez"},
      {title:"Job loss disrupts individuals’ mobility and their exploratory patterns", authors: "Simone Centellegher, Marco De Nadai, Marco Tonin, Bruno Lepri, Lorenzo Lucchini"},
      {title:"From Pre to Post-Pandemic: Measuring Shifts in Urban Activity Across 100 US Cities Using Location-Based Services Data", authors: "Michael Leong, Jinhua Zhao, Yixuan Liu, Joy Wang"},
      {title:"Mobility patterns reveal a “doughnut effect\" for activity in large American cities", authors: "Andrew Renninger"},
    ]
  }
]

export const keynoteDay1 = {
  affliation: "Centre for Advanced Spatial Analysis, University College London",
  author: "Neave O’Clery",
  title: "Can we do policy impact evaluation using mobile phone data in low data settings?",
  abstract: " Drawing on experience from two studies focused on Colombia, this talk will discuss the potential and challenges of policy impact evaluation using mobile phone data in low data settings. The first centres on the impact of covid lockdown policies (which varied by city in Colombia) on mobility patterns, and the second on the impact of opening of a new cable car in a poor peripheral area of Bogota.",
  img: "/img/speakers/neave-oclery.png"
}

export const sessionsDay2 = [
  {
    name: "Session F: Urban Transport Systems",
    id : "session-f",
    papers: [
      {title: "Evaluating Local Transport Interventions to Promote Sustainable Mobility", authors: "Xianghui Zhang, Peter Jones, Andy Emmonds, Tao Cheng"},
      {title: "Individual Alternative Routing based on Road Popularity", authors: "Giuliano Cornacchia, Luca Pappalardo"},
      {title: "Unveiling Urban Travel Patterns: A Comparative Analysis of Smart Card and Mobile App Data", authors: "Sveta Milusheva, Wenlan Zhang"},
      {title: "What Can Cellphone Data Tell us About our Public Transit Systems?", authors: "Giuseppe Perona, Zhenliang Ma, Marta Gonzalez"},
    ]
  },{
    name: "Session G: AI and machine learning methods applied to studying mobility",
    id : "session-g",
    papers: [
      {title:"Examining 5G Adoption: Effects on Network Traffic and Mobile Service Usage", authors: "Sachit Mishra, André F. Zanella, Orlando E. Martínez-Durive, Diego Madariaga, Cezary Ziemlicki, Marco Fiore"},
      {title: "GeoAvatar: Generating Personal Mobility instead of Isolated Trips", authors: "Peiran Li, Haoran Zhang, Wenjing Li, Dou Huang, Jinyu Chen, Yuhao Yao, Xuan Song, Shibasaki Ryosuke, Koshizuka Noboru"},
      {title: "Large Language Models Are Zero-Shot Next-Location Predictors", authors: "Ciro Beneduce, Bruno Lepri, Massimiliano Luca, Ciro Beneduce"},
      {title: "The Long-Term Effects of Recommender Systems on Urban Mobility", authors: "Giovanni Mauro, Marco Minici, Andrea Frasson, Luca Pappalardo"},      
    ],
  },{
    name: "Session H: Social Media, ICT and Human Behavior",
    id : "session-h",
    papers: [
      {title:"Understanding spatial mismatch with embeddings and transformer models", authors: "Andrew Renninger"},
      {title:"Physical partisan proximity outweighs online ties in predicting US voting outcomes", authors: "Marco Tonin, Michele Tizzoni, Bruno Lepri"},
      {title:"Mobile App Consumption and Political Orientation", authors: "Orlando Eduardo Martínez-Durive, Iñaki Ucar, Zbigniew Smoreda, Esteban Moro Egido, Marco Fiore, Esteban Moro"},
      {title:"Mexico's resilience in an Earthquakes", authors: "Ollin Langle Chimal"},
    ],
  },{
    name: "Session I: Measuring Mobility with MPD: Methods and Limitations",
    id : "session-i",
    papers: [
      {title:"A methodology for the identification and characterisation of last-mile delivery trips", authors: "Raquel Sanchez-Cauce, Oliva Cantú Ros, Pablo Ruiz, Javier Burrieza-Galan, Ricardo Herranz"},
      {title:"A validated home/work location detection algorithm for longitudinal geospatial-analysis", authors: "Silvia De Sojo Caso, Lorenzo Lucchini, Ollin Langle Chimal, Samuel Fraiberger, Laura Alessandretti, Lorenzo Lucchini"},
      {title:"Assessing Shadows in Mobility: Beyond Spatiotemporal Patterns", authors: "Lucas Félix, Anne Josiane Kouam, Aline Carneiro Viana, Nadjib Achir, Jussara Almeida"},
      {title:"Assessing Socioeconomic Inequalities in Disaster Response Using Smartphone Mobility Data: A Case Study from Indonesia", authors: "Saumitra Kulkarni, Mattia Mazzoli, Nicolò Gozzi, Andrea Martini, Daniela Paolotti, Esteban Moro, Manuel Garcia-Herranz, Kyriaki Kalimeri"},
    ],
  },{
    name: "Session J: Policy Application of MPD",
    id : "session-j",
    papers: [
      {title:"A data science framework for planning the growth of bicycle infrastructures", authors: "Maria Sol Tadeo, Luis E. Olmos, Dimitris Vlachogiannis, Fahad Alhasoun, Xavier Espinet Alegre, Catalina Ochoa, Felipe Targa, Marta C. González"},
      {title:"Unequal socio-economic impact and recovery of COVID-19 in Mexico", authors: "Ollin Langle Chimal, Bernardo Garcia Bulle-Bueno, Esteban Moro Egido, Samuel Fraiberger, Esteban Moro"},
      {title:"Socioeconomic-informed emergency re-location dynamics during wildfires in Chile", authors: "Timur Naushirvanov, Erick Elejalde, Kyriaki Kalimeri, Elisa Omodei, Marton Karsai, Leo Ferres"},
      {title:"Extreme heat is associated with reductions in human activity", authors: "Andrew Renninger, Olena Holubowska"},
    ],
  }
]

export const keynoteDay2 = {
  affliation: "Zachry Department of Civil Engineering, Texas A&M University",
  author: "Ali Mostafavi",
  title: "Decoding the Anatomy of Resilient Communities Based on Human Mobility Shifts",
  abstract: "This talk presents the synthesis of a series of studies in which various aspects of community resilience dynamics are characterized based on fluctuations in human mobility patterns. From a human-centric characterization of flood exposure to the evaluation of disrupted access to critical facilities and mapping of post-disaster lifestyle recovery, this talk showcases key applications of human mobility data for unraveling and monitoring the pulse of communities in the face of crises.",
  img: "/img/speakers/ali-mostafavi.png"
}


export const sessionsDay3 = [
  {
    name: "Data Challenge Session 1", 
    id : "session-1",
    papers: [
      {title: "Scorching streets: The Impact of Heat Stress on Urban Mobility in India",
       authors: "Paul Blanchard, Lou Chiani"},
      {title: "Socioeconomic Disparities in Heat Exposure and Mitigation Based on Human Mobility in India", 
       authors: "Jue Ma, Santiago Garcia Gabilondo, Carl D. Torbjörnsson, Chenchen Sun, Zeyu Wu, Yuya Shibuya, Yoshihide Sekimoto"},
      {title: "Decode Segregation in Mobility Networks: The Role of the Built Environment", 
       authors : "Antonio Desiderio, Yuan Liao, Silvia De Sojo, Federico Delussu, Laura Alessandretti, Louis Boucherie, Lasse Pelle Skytte Hansen"},
      {title: "Mobility, Information, and Climate Resilience: Evidence from India's Rural Poor", authors: "Nikhil Basavappa, Ricardo Pommer Munoz"},
    ]
  },{
    name: "Data Challenge Session 2",
    id : "session-2",
    papers: [
      {title: "Dynamic Air Pollution Exposure Index Using Human Mobility Patterns: Case Studies from the Global South",
        authors: "Yuya Shibuya, Santiago Garcia Gabilondo, Carl D. Torbjörnsson, Zeyu Wu, Chenchen Sun, Jue Ma, Yoshihide Sekimoto, Yuya Shibuya"}, 
      {title: "Silent Majority from Rural India: Where are They Now?", authors: "Yueyang Yi, Roy Meijer, Yijie Zhou, Jessie Ziyue Zhu"},
      {title: "Disaster-Driven Climate Mobility Changes: Findings from Large Mobile Phone Datasets in India", authors: "Guangyuan Weng, Sukie Xiuqi Yang, Catherine Chen, Shiyue Cui, Zhicong Chen, Ying Zhu"},
      {title: "Urban Rhythms and Dynamic City Centres", authors: "Federico Botta, Marcos Oliveira, Rudy Arthur"},
    ]
  }, {
    name: "Data Challenge Session 3",
    id : "session-3",
    papers: [
      {title:"Leveraging high-resolution connectivity data for pandemic preparedness: from potential emergence areas to nodes of global human mobility.", authors: "Davide Bogani, Lorenzo Mari, Renato Casagrandi"},
      {title:"Revealing Disparities in Public and Digital Infrastructure of Developing Countries", authors: "Abhishek Kumar Mishra, Sachit Mishra"},
      {title:"Assessing Urban and Rural Routing Inefficiencies with Aggregated Mobility Patterns", authors: "Nandini Iyer, Massimiliano Luca, Riccardo Di Clemente"},
      {title:"Identifying Opportunities for Social Development by Estimating Supply and Demand of Public Transportation in Mexico City", authors: "Carlos O. Lopez-Tenorio, Marco A. Rosas, Fernando Gutierrez Luna, Carlos Gershenson"},
    ]
  }
]
