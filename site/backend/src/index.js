const dotenv = require('dotenv');
const database = require("./connection/aDatabase");
const fileStorage = require("./connection/bFileStorage");

// Uncaught Exception
process.on("uncaughtException", (error) => {
    console.log(`Error--> ${error.message}`)
    console.log(`Shutting down the server due to Uncaught Exception`)
    process.exit(1)
})

// Connect Environment Variable
dotenv.config({path: "src/config/my.env"})

// Connect App
switch (process.env.CORPORATION) {
    case 'BeehiveCorporation':

        switch (process.env.ORGANISATION) {
            case 'AndromedaOrganisation':
                
                switch (process.env.ENTERPRISE) {
                    case 'AcruxEnterprise':

                        switch (process.env.APPLICATION) {
                            case 'ArionApplication':
                                var app = require("./app/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/aArionApplication/app")
                                break;
                            case 'AnkasApplication':
                                var app = require("./app/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/bAnkasApplication/app")
                                break;
                            case 'AbolApplication':
                                var app = require("./app/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/cAbolApplication/app")
                                break;
                            default:
                                break;
                        }   
                        break;

                    case 'AnserEnterprise':

                        switch (process.env.APPLICATION) {
                            case 'SwiftTalkApplication':
                                var app = require("./app/aBeehiveCorporation/aAndromedaOrganisation/bAnserEnterprise/aSwiftTalkApplication/app")
                                break;
                            default:
                                break;
                        }   
                        break;
                        
                    default:
                        break;
                }   
                break;

            case 'PinwheelOrganisation':

                switch (process.env.APPLICATION) {
                    case 'BeehiveApplication':
                        var app = require("./app/aBeehiveCorporation/bPinwheelOrganisation/aBeehiveApplication/app")
                        break;
                    case 'AndromedaApplication':
                        var app = require("./app/aBeehiveCorporation/bPinwheelOrganisation/bAndromedaApplication/app")
                        break;
                    case 'PinwheelApplication':
                        var app = require("./app/aBeehiveCorporation/bPinwheelOrganisation/cPinwheelApplication/app")
                        break;
                    case 'TadpoleApplication':
                        var app = require("./app/aBeehiveCorporation/bPinwheelOrganisation/dTadpoleApplication/app")
                        break;
                    case 'AcruxApplication':
                        var app = require("./app/aBeehiveCorporation/bPinwheelOrganisation/eAcruxEnterprise/app")
                        break;
                    case 'AnserApplication':
                        var app = require("./app/aBeehiveCorporation/bPinwheelOrganisation/fAnserApplication/app")
                        break;
                    case 'AquilaApplication':
                        var app = require("./app/aBeehiveCorporation/bPinwheelOrganisation/gAquilaApplication/app")
                        break;
                    case 'BellatrixApplication':
                        var app = require("./app/aBeehiveCorporation/bPinwheelOrganisation/hBellatrixApplication/app")
                        break;
                    case 'CapellaApplication':
                        var app = require("./app/aBeehiveCorporation/bPinwheelOrganisation/iCapellaApplication/app")
                        break;
                    default:
                        break;
                }   
                break;

            case 'TadpoleOrganisation':

                switch (process.env.ENTERPRISE) {

                    case 'AquilaEnterprise':
                        break;
                        
                    case 'BellatrixEnterprise':

                        switch (process.env.FIRM) {
                            case 'TechfolioFirm':

                                switch (process.env.APPLICATION) {
                                    case 'TechfolioApplication':
                                        var app = require("./app/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioAppliation/app")
                                        break;
                                    case 'ApurvChaturApplication':
                                        var app = require("./app/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/bApurvChaturApplication/app")
                                        break;
                                    case 'AnushreeMandapeApplication':
                                        var app = require("./app/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/cAnushreeMandapeApplication/app")
                                        break;
                                    case 'SofieBerkinApplication':
                                        var app = require("./app/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/dSofieBerkinApplication/app")
                                        break;
                                    default:
                                        break;
                                }   
                                break;

                            case 'BlogifyFirm':

                                switch (process.env.APPLICATION) {
                                    case 'BlogifyApplication':
                                        var app = require("./app/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/app")
                                        break;
                                    case 'SrimadBhagwatamApplication':
                                        var app = require("./app/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/app")
                                        break;
                                    case 'BhagwadGitaApplication':
                                        var app = require("./app/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/app")
                                        break;
                                    case 'InterviewQuestionApplication':
                                        var app = require("./app/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/app")
                                        break;
                                    default:
                                        break;
                                }   
                                break;

                            default:
                                break;
                        }   
                        break;

                    case 'CapellaEnterprise':
                        break;
                        
                    default:
                        break;
                }   
                break;
        }  
        break;

    default:
        var app = require("./app/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/bAnkasApplication/app")
        break;
}

// Connect Database
database()

// Connect File Storage
fileStorage()

// Server Listen
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

// Unhandled Promise Rejection
process.on("unhandledRejection", error => {
    console.log(`Error--> ${error.message}`)
    console.log(`Shutting down the server due to Unhandled Promise Rejection`)

    server.close(() => {
        process.exit(1)
    })
})

