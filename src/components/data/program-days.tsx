import { link } from "fs";
import { title } from "process";
import React from "react";

export const day1 = [
  { time: "08:30 - 09:00", title: "Registration" },
  { time: "09:00 - 09:30", title: "Welcome" },
  { time: "09:30 - 10:30", title: "Session A: Modelling Human Mobility", link: "#session-a" },
  { time: "10:30 - 10:45", title: "Break" },
  { time: "10:45 - 11:45", title: "Session B: Urban Segregation and Mobility Barriers", link: "#session-b"},
  { time: "11:45 - 12:45", title: "Session C: Mobility in the Context of Socio-Economic Vulnerability" , link: "#session-c"},
  { time: "12:45 - 14:00", title: "Lunch and Conference Poster Session" },
  { time: "14:00 - 14:45", title: "Keynote: Neave O’Clery: Can we do policy impact evaluation using mobile phone data in low data settings?" },
  { time: "14:45 - 15:00", title: "Break" },
  { time: "15:00 - 16:00", title: "Session D: Health and Epidemiology", link: "#session-d" },
  { time: "16:00 - 17:00", title: "Session E: Covid 19, human mobility and the distribution of economic activity", link: "#session-e" },
]

export const day2 = [
  { time: "09:00 - 10:00", title: "Keynote: Ali Mostafavi: Decoding the Anatomy of Resilient Communities Based on Human Mobility Shifts" },
  { time: "10:00 - 11:00", title: "Session F: Urban Transport Systems", link: "#session-f" },
  { time: "11:00 - 11:15", title: "Break" },
  { time: "11:15 - 12:15", title: "Session G: AI and machine learning methods applied to studying mobility", link: "#session-g" },
  { time: "12:15 - 13:30", title: "Lunch/Challenge Poster Session" },
  { time: "13:30 - 14:30", title: "Session H: Social Media, ICT and Human Behavior", link: "#session-h" },
  { time: "14:30 - 15:30", title: "Session I: Measuring Mobility with MPD: Methods and Limitations", link: "#session-i" },  
  { time: "15:30 - 15:45", title: "Break" },
  { time: "15:45 - 16:30", title: "Session J: Policy Application of MPD", link: "#session-j" },
  { time: "16:30 - 17:30", title: "Policymaker Session" },
  { time: "17:30", title: "Reception" },
]

export const day3 = [
  { time: "09:00 - 10:00", title: "Challenge Session 1" },
  { time: "10:00 - 11:00", title: "Challenge Session 2" },
  { time: "11:00 - 11:15", title: "Break" },
  { time: "11:15 - 12:15", title: "Challenge Session 3" },
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
      {title: "One rule does not fit all: deviation from universality in human mobility modelling", authors : "Ludovico Napoli, Marton Karsai, Esteban Moro, Ludovico Napoli"},
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
      {title:"Mobility and Vulnerability: The Role of Informal Employment", authors: "Ollin Langle Chimal, Marta Gonzalez, Marco Rosas, Christopher Chavez"},
      {title:"Mexico's resilience in an Earthquakes", authors: "Ollin Langle Chimal"},
      {title:"Unconstrained mobility patterns reveal significant gender differencess", authors: "Silvia De Sojo, Sune Lehmann, Laura Alessandretti"},
      {title:"What makes for a successful ‘MPD for Policy’ initiative? Lessons learnt and best practice", authors: "Thomas Smallwood, Daniel Power, Sarah Allen, Francky Salomon, Trevor Monroe, Sveta Milusheva, Esperanza Magpantay,Cathy Riley, Sophie Delaporte"},
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
      {title:"Measuring the Impact of Remote Working on the Structure of Urban Activity in the Top 100 US Cities between 2019 and 2023", authors: "Michael Leong, Jinhua Zhao"},
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
      {title: "Business Site Recommendation with Deep Q-Learning" , authors: "Atra Zeynep Bahceci, Hasan Alp Boz, Selim Balcisoy"},
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
      {title:"Examining 5G Adoption: Effects on Network Traffic and Mobile Service Usage", authors: "Sachit Mishra, André F. Zanella, Orlando E. Martínez-Durive, Diego Madariaga, Cezary Ziemlicki, Marco Fiore"},
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
      {title:"Exposure to air pollution using MNO data", authors: "Erika Cerasti, Cristina Faricelli, Paolo Mattera, Roberta Radini, Tiziana Tuoto"},
      {title:"Socioeconomic-informed emergency re-location dynamics during wildfires in Chile", authors: "Timur Naushirvanov, Erick Elejalde, Kyriaki Kalimeri, Elisa Omodei, Marton Karsai, Leo Ferres"},
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