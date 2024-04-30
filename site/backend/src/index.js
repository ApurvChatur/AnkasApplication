const dotenv = require('dotenv');
const database = require("./cConnection/aDatabase");
const fileStorage = require("./cConnection/bFileStorage");
const { createServer } = require('http');
const cluster = require('cluster');
const os = require('os');


// Uncaught Exception
process.on("uncaughtException", (error) => {
  console.log(`Error--> ${error.message}`)
  console.log(`Shutting down the server due to Uncaught Exception`)
  process.exit(1)
})

// Connect Environment Variable
dotenv.config({path: ".env"})
const corporation = process.env.CORPORATION;
const organisation = process.env.ORGANISATION;
const enterprise = process.env.ENTERPRISE;
const firm = process.env.FIRM;
const application = process.env.APPLICATION;

// Connect App
let app;

const appConfig = {
  BeehiveCorporation: {
    AndromedaOrganisation: {
      AcruxEnterprise: {
        ArionApplication: "./aApp/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/aArionApplication/app",
        AnkasApplication: "./aApp/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/bAnkasApplication/app",
        AbolApplication: "./aApp/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/cAbolApplication/app"
      },
      AnserEnterprise: {
        SwiftTalkApplication: "./aApp/aBeehiveCorporation/aAndromedaOrganisation/bAnserEnterprise/aSwiftTalkApplication/app"
      }
    },
    PinwheelOrganisation: {
      BeehiveApplication: "./aApp/aBeehiveCorporation/bPinwheelOrganisation/aBeehiveApplication/app",
      AndromedaApplication: "./aApp/aBeehiveCorporation/bPinwheelOrganisation/bAndromedaApplication/app",
      PinwheelApplication: "./aApp/aBeehiveCorporation/bPinwheelOrganisation/cPinwheelApplication/app",
      TadpoleApplication: "./aApp/aBeehiveCorporation/bPinwheelOrganisation/dTadpoleApplication/app",
      AcruxApplication: "./aApp/aBeehiveCorporation/bPinwheelOrganisation/eAcruxEnterprise/app",
      AnserApplication: "./aApp/aBeehiveCorporation/bPinwheelOrganisation/fAnserApplication/app",
      AquilaApplication: "./aApp/aBeehiveCorporation/bPinwheelOrganisation/gAquilaApplication/app",
      BellatrixApplication: "./aApp/aBeehiveCorporation/bPinwheelOrganisation/hBellatrixApplication/app",
      CapellaApplication: "./aApp/aBeehiveCorporation/bPinwheelOrganisation/iCapellaApplication/app"
    },
    TadpoleOrganisation: {
      BellatrixEnterprise: {
        TechfolioFirm: {
          TechfolioApplication: "./aApp/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioAppliation/app",
          ApurvChaturApplication: "./aApp/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/bApurvChaturApplication/app",
          AnushreeMandapeApplication: "./aApp/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/cAnushreeMandapeApplication/app",
          SofieBerkinApplication: "./aApp/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/dSofieBerkinApplication/app"
        },
        BlogifyFirm: {
          BlogifyApplication: "./aApp/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/app",
          SrimadBhagwatamApplication: "./aApp/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/app",
          BhagwadGitaApplication: "./aApp/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/app",
          InterviewQuestionApplication: "./aApp/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/app"
        }
      }
    }
  }
};

if (appConfig[corporation] && appConfig[corporation][organisation] && appConfig[corporation][organisation][enterprise] && appConfig[corporation][organisation][enterprise][firm]) {
  if (application && appConfig[corporation][organisation][enterprise][firm][application]) {
    console.log("Succeed to connect to app.js")
    app = require(appConfig[corporation][organisation][enterprise][firm][application]);
  } else {
    console.log("Failed to connect to app.js")
  }
} else if (appConfig[corporation] && appConfig[corporation][organisation] && appConfig[corporation][organisation][enterprise]) {
  if (application && appConfig[corporation][organisation][enterprise][application]) {
    console.log("Succeed to connect to app.js")
    app = require(appConfig[corporation][organisation][enterprise][application]);
  } else {
    console.log("Failed to connect to app.js")
  }  
} else if (appConfig[corporation] && appConfig[corporation][organisation]) {
  if (application && appConfig[corporation][organisation][application]) {
    console.log("Succeed to connect to app.js")
    app = require(appConfig[corporation][organisation][application]);
  } else {
    console.log("Failed to connect to app.js")
  }  
} else {
  console.log("Failed to connect to app.js")
}

// Connect Database
database()

// Connect File Storage
fileStorage()

// Connect Socket Server
const server = createServer(app);
let socketServer;

const socketConfig = {
  BeehiveCorporation: {
    AndromedaOrganisation: {
      AcruxEnterprise: {
        ArionApplication: "./bSocket/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/aArionApplication/socketServer",
        AnkasApplication: "./bSocket/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/bAnkasApplication/socketServer",
        AbolApplication: "./bSocket/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/cAbolApplication/socketServer"
      },
      AnserEnterprise: {
        SwiftTalkApplication: "./bSocket/aBeehiveCorporation/aAndromedaOrganisation/bAnserEnterprise/aSwiftTalkApplication/socketServer"
      }
    },
    PinwheelOrganisation: {
      BeehiveApplication: "./bSocket/aBeehiveCorporation/bPinwheelOrganisation/aBeehiveApplication/socketServer",
      AndromedaApplication: "./bSocket/aBeehiveCorporation/bPinwheelOrganisation/bAndromedaApplication/socketServer",
      PinwheelApplication: "./bSocket/aBeehiveCorporation/bPinwheelOrganisation/cPinwheelApplication/socketServer",
      TadpoleApplication: "./bSocket/aBeehiveCorporation/bPinwheelOrganisation/dTadpoleApplication/socketServer",
      AcruxApplication: "./bSocket/aBeehiveCorporation/bPinwheelOrganisation/eAcruxEnterprise/socketServer",
      AnserApplication: "./bSocket/aBeehiveCorporation/bPinwheelOrganisation/fAnserApplication/socketServer",
      AquilaApplication: "./bSocket/aBeehiveCorporation/bPinwheelOrganisation/gAquilaApplication/socketServer",
      BellatrixApplication: "./bSocket/aBeehiveCorporation/bPinwheelOrganisation/hBellatrixApplication/socketServer",
      CapellaApplication: "./bSocket/aBeehiveCorporation/bPinwheelOrganisation/iCapellaApplication/socketServer"
    },
    TadpoleOrganisation: {
      BellatrixEnterprise: {
        TechfolioFirm: {
          TechfolioApplication: "./bSocket/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioAppliation/socketServer",
          ApurvChaturApplication: "./bSocket/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/bApurvChaturApplication/socketServer",
          AnushreeMandapeApplication: "./bSocket/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/cAnushreeMandapeApplication/socketServer",
          SofieBerkinApplication: "./bSocket/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/dSofieBerkinApplication/socketServer"
        },
        BlogifyFirm: {
          BlogifyApplication: "./bSocket/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/socketServer",
          SrimadBhagwatamApplication: "./bSocket/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/socketServer",
          BhagwadGitaApplication: "./bSocket/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/socketServer",
          InterviewQuestionApplication: "./bSocket/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/socketServer"
        }
      }
    }
  }
};

if (socketConfig[corporation] && socketConfig[corporation][organisation] && socketConfig[corporation][organisation][enterprise] && appConfig[corporation][organisation][enterprise][firm]) {
  if (application && socketConfig[corporation][organisation][enterprise][firm][application]) {
    console.log("Succeed to connect to socket")
    socketServer = require(socketConfig[corporation][organisation][enterprise][firm][application]);
    socketServer(server)
  } else {
    console.log("Failed to connect to socket")
  }
} else if (appConfig[corporation] && appConfig[corporation][organisation] && appConfig[corporation][organisation][enterprise]) {
  if (application && appConfig[corporation][organisation][enterprise][application]) {
    console.log("Succeed to connect to socket")
    socketServer = require(socketConfig[corporation][organisation][enterprise][application]);
    socketServer(server)
  } else {
    console.log("Failed to connect to socket")
  }  
} else if (socketConfig[corporation] && socketConfig[corporation][organisation]) {
  if (application && socketConfig[corporation][organisation][application]) {
    console.log("Succeed to connect to socket")
    socketServer = require(socketConfig[corporation][organisation][application]);
    socketServer(server);
  } else {
    console.log("Failed to connect to socket")
  }  
} else {
  console.log("Failed to connect to socket")
}

// Cluster
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  // console.log(`Master process ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker process ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  // Server Listen
  server.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT} at worker process ${process.pid}`)
  })
}

// Unhandled Promise Rejection
process.on("unhandledRejection", error => {
  console.log(`Error--> ${error.message}`)
  console.log(`Shutting down the server due to Unhandled Promise Rejection`)

  server.close(() => {
    process.exit(1)
  })
})
