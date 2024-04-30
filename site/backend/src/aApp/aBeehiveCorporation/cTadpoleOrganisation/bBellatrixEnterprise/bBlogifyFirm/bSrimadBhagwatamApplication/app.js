// Imports
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const errorHandler = require('../../../../../../dLove/cMiddleware/aError');

const baseRoute = require('../../../../../../dLove/aMCR/bCommon/cRoute/aSetting/aBaseRoute');
const adminHeroRoute = require('../../../../../../dLove/aMCR/bCommon/cRoute/aSetting/bAdminHeroRoute');
const notificationRoute = require('../../../../../../dLove/aMCR/bCommon/cRoute/aSetting/cNotificationRoute');
const menuRoute = require('../../../../../../dLove/aMCR/bCommon/cRoute/bAdministration/cMenuRoute');
const roleRoute = require('../../../../../../dLove/aMCR/bCommon/cRoute/bAdministration/bRoleRoute');
const userRoute = require('../../../../../../dLove/aMCR/bCommon/cRoute/bAdministration/aUserRoute');
const heroRoute = require('../../../../../../dLove/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/aHeroRoute');
const counterRoute = require('../../../../../../dLove/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/bCounterRoute');
const aboutRoute = require('../../../../../../dLove/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/cAboutRoute');
const serviceRoute = require('../../../../../../dLove/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/dServiceRoute');
const projectSectionRoute = require('../../../../../../dLove/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/hProjectSectionRoute');
const projectGroupRoute = require('../../../../../../dLove/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/iProjectGroupRoute');
const projectRoute = require('../../../../../../dLove/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/jProjectRoute');
const staticDataRoute = require('../../../../../../dLove/aMCR/bCommon/cRoute/dAsset/aStaticDataRoute');

const homePageRoute = require('../../../../../../dLove/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/aCommonRoute/aHomePageRoute');
const projectPageRoute = require('../../../../../../dLove/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/aCommonRoute/bProjectPageRoute');
// const portfolioCardPageRoute = require('../../../../../../dLove/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/zCombinedRoute/bPortfolioCardPageRoute');
// const eventCardPageRoute = require('../../../../../../dLove/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/zCombinedRoute/cEventCardPageRoute');
// const blogCardPageRoute = require('../../../../../../dLove/aMCR/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cRoute/cMain/zCombinedRoute/dBlogCardPageRoute');


// App
const app = express()

// Use
app.use(morgan("dev"))
app.use(express.json({
  limit: '50mb'
}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
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
app.use("/api/v1/notification", notificationRoute)
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
app.use("/api/v1/project-page", projectPageRoute)
// app.use("/api/v1/portfolio-card-page", portfolioCardPageRoute)
// app.use("/api/v1/event-card-page", eventCardPageRoute)
// app.use("/api/v1/blog-card-page", blogCardPageRoute)

app.use(errorHandler)


module.exports = app