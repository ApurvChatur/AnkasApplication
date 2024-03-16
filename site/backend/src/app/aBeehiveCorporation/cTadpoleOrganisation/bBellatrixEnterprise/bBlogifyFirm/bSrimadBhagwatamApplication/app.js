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
const heroRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/aHeroRoute');
const counterRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/bCounterRoute');
const aboutRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/cAboutRoute');
const serviceRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/dServiceRoute');
const projectSectionRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/hProjectSectionRoute');
const projectGroupRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/iProjectGroupRoute');
const projectRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/jProjectRoute');
const staticDataRoute = require('../../../../../../love/aMCR/bCommon/cRoute/dAsset/aStaticDataRoute');

const homePageRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/aCommonRoute/aHomePageRoute');
// const portfolioCardPageRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/zCombinedRoute/bPortfolioCardPageRoute');
// const eventCardPageRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/zCombinedRoute/cEventCardPageRoute');
// const blogCardPageRoute = require('../../../../../../love/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/zCombinedRoute/dBlogCardPageRoute');


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
    "https://srimad-bhagwatam-admin.netlify.app",
    "https://srimad-bhagwatam-frontend.netlify.app",
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
app.use("/api/v1/counter", counterRoute)
app.use("/api/v1/about", aboutRoute)
app.use("/api/v1/service", serviceRoute)
app.use("/api/v1/project-section", projectSectionRoute)
app.use("/api/v1/project-group", projectGroupRoute)
app.use("/api/v1/project", projectRoute)
app.use("/api/v1/static-data", staticDataRoute)

app.use("/api/v1/home-page", homePageRoute)
// app.use("/api/v1/portfolio-card-page", portfolioCardPageRoute)
// app.use("/api/v1/event-card-page", eventCardPageRoute)
// app.use("/api/v1/blog-card-page", blogCardPageRoute)

app.use(errorHandler)


module.exports = app
