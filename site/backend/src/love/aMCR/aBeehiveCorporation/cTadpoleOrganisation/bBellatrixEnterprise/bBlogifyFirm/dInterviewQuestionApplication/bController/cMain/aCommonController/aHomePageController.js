const cloudinary = require("cloudinary")
const catchAsyncError = require("../../../../../../../../../bFunction/aCatchAsyncError")
const ErrorHandler = require("../../../../../../../../../bFunction/bErrorHandler")
const handleImage = require("../../../../../../../../../bFunction/hHandleImage")
const SearchFilterPaginate = require("../../../../../../../../../bFunction/fSearchFilterPaginate")
const HeroModel = require("../../../aModel/cMain/aHeroModel")
const CounterModel = require("../../../aModel/cMain/bCounterModel")
const AdminHeroModel = require("../../../../../../../../bCommon/aModel/aSetting/bAdminHeroModel")
const AboutModel = require("../../../aModel/cMain/cAboutModel")
const ServiceModel = require("../../../aModel/cMain/dServiceModel")
const ProjectSectionModel = require("../../../aModel/cMain/hProjectSectionModel")
const ProjectGroupModel = require("../../../aModel/cMain/iProjectGroupModel")
const ProjectModel = require("../../../aModel/cMain/jProjectModel")


exports.homePageController = (Label= 'Home Page') => {
	return {
		// Retrieve Controller
		retrieve: catchAsyncError(async (request, response, next) => {
      let hero_retrieve = {
        admin: await HeroModel.findOne({ dType: "Admin" }).sort({ _id: -1 }),
        frontend: await HeroModel.findOne({ dType: "Frontend" }).sort({ _id: -1 }),
      };
      let counter_list = await CounterModel.find().sort({ _id: -1 }).limit(3);
      let about_retrieve = {
        actually: await AboutModel.findOne({ dTag: "actually" }).sort({ _id: -1 }),
        comparatively: await AboutModel.findOne({ dTag: "comparatively" }).sort({ _id: -1 })
      };
      let service_list = await ServiceModel.find().sort({ _id: -1 }).limit(4);
      let project_section_retrieve = await ProjectSectionModel.findOne().sort({ _id: -1 }).populate({
        path: 'cProjectGroups',
        model: ProjectGroupModel,
        populate: {
          path: 'cProjects',
          model: ProjectModel,
        },
      });

      // Not Found
      // if (!home_retrieve) next(new ErrorHandler(`Home Not Found`, 404))
  
      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Reterived Successfully`,
        retrieve: {
          hero_retrieve,
          counter_list,
          about_retrieve,
          service_list,
          project_section_retrieve
        }
      })
    }),

    // Admin Retrieve Controller
		admin_retrieve: catchAsyncError(async (request, response, next) => {
      let hero_retrieve = await AdminHeroModel.findOne().sort({ _id: -1 });

      // Not Found
      // if (!home_retrieve) next(new ErrorHandler(`Home Not Found`, 404))
  
      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Reterived Successfully`,
        retrieve: {
          hero_retrieve,
        }
      })
    }),
    
	}
}
