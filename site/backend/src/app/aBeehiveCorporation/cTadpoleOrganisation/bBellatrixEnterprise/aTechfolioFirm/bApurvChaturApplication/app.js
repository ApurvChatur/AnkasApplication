// Imports
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const errorHandler = require('../../../../../../love/cMiddleware/aError');

const baseRoute = require('../../../../../../love/aMCR/bCommon/cRoute/aSetting/aBaseRoute');
const adminHeroRoute = require('../../../../../../love/aMCR/bCommon/cRoute/aSetting/bAdminHeroRoute');
const menuRoute = require('../../../../../../love/aMCR/bCommon/cRoute/bAdministration/cMenuRoute');
const roleRoute = require('../../../../../../love/aMCR/bCommon/cRoute/bAdministration/bRoleRoute');
const userRoute = require('../../../../../../love/aMCR/bCommon/cRoute/bAdministration/aUserRoute');
const heroRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/bCommonApplication/cRoute/cMain/aHeroRoute');
const aboutRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/bCommonApplication/cRoute/cMain/bAboutRoute');
const experienceRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/bCommonApplication/cRoute/cMain/cExperienceRoute');
const serviceRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/bCommonApplication/cRoute/cMain/dServiceRoute');
const portfolioRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/bCommonApplication/cRoute/cMain/ePortfolioRoute');
const portfolioCardRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/bCommonApplication/cRoute/cMain/fPortfolioCardRoute');
const eventRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/bCommonApplication/cRoute/cMain/gEventRoute');
const eventCardRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/bCommonApplication/cRoute/cMain/hEventCardRoute');
const blogRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/bCommonApplication/cRoute/cMain/iBlogRoute');
const blogCardRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/bCommonApplication/cRoute/cMain/jBlogCardRoute');
const staticDataRoute = require('../../../../../../love/aMCR/bCommon/cRoute/dAsset/aStaticDataRoute');

const homePageRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/bCommonApplication/cRoute/cMain/zCombinedRoute/aHomePageRoute');
const portfolioCardPageRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/bCommonApplication/cRoute/cMain/zCombinedRoute/bPortfolioCardPageRoute');
const eventCardPageRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/bCommonApplication/cRoute/cMain/zCombinedRoute/cEventCardPageRoute');
const blogCardPageRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/bCommonApplication/cRoute/cMain/zCombinedRoute/dBlogCardPageRoute');


// App
const app = express()

// Use
app.use(express.json({
  limit: '50mb'
}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())
app.use(cors({ origin:  
  process.env.ENVIRONMENT === "Production" ?
  [
    "https://apurv-chatur-admin.netlify.app",
    "https://apurv-chatur-frontend.netlify.app",
    "https://apurvchatur.netlify.app",
  ] : 
  [
    "http://localhost:5173",
    "http://localhost:5174",
  ], 
credentials: true }))

app.use("/api/v1/base", baseRoute)
app.use("/api/v1/admin-hero", adminHeroRoute)
app.use("/api/v1/menu", menuRoute)
app.use("/api/v1/role", roleRoute)
app.use("/api/v1/user", userRoute)
app.use("/api/v1/hero", heroRoute)
app.use("/api/v1/about", aboutRoute)
app.use("/api/v1/experience", experienceRoute)
app.use("/api/v1/service", serviceRoute)
app.use("/api/v1/portfolio", portfolioRoute)
app.use("/api/v1/portfolio-card", portfolioCardRoute)
app.use("/api/v1/event", eventRoute)
app.use("/api/v1/event-card", eventCardRoute)
app.use("/api/v1/blog", blogRoute)
app.use("/api/v1/blog-card", blogCardRoute)
app.use("/api/v1/static-data", staticDataRoute)

app.use("/api/v1/home-page", homePageRoute)
app.use("/api/v1/portfolio-card-page", portfolioCardPageRoute)
app.use("/api/v1/event-card-page", eventCardPageRoute)
app.use("/api/v1/blog-card-page", blogCardPageRoute)

app.use(errorHandler)


module.exports = app
