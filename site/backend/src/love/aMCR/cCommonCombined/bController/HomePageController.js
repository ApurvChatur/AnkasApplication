const cloudinary = require("cloudinary")
const catchAsyncError = require("../../../bFunction/aCatchAsyncError")
const ErrorHandler = require("../../../bFunction/bErrorHandler")
const handleImage = require("../../../bFunction/hHandleImage")
const SearchFilterPaginate = require("../../../bFunction/fSearchFilterPaginate")
const HeroModel = require("../../bCommon/aModel/cMain/aHeroModel")
const CounterModel = require("../../bCommon/aModel/cMain/bCounterModel")
const AboutModel = require("../../bCommon/aModel/cMain/cAboutModel")
const ServiceModel = require("../../bCommon/aModel/cMain/dServiceModel")
const BranchModel = require("../../bCommon/aModel/cMain/eBranchModel")
const SubSubBranchModel = require("../../bCommon/aModel/cMain/gSubSubBranchModel")
const SubBranchModel = require("../../bCommon/aModel/cMain/fSubBranchModel")
const ProjectSectionModel = require("../../bCommon/aModel/cMain/hProjectSectionModel")
const ProjectGroupModel = require("../../bCommon/aModel/cMain/iProjectGroupModel")
const ProjectModel = require("../../bCommon/aModel/cMain/jProjectModel")


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
      let branch_retrieve = await BranchModel.findOne().sort({ _id: -1 }).populate({
        path: 'cSubBranches',
        model: SubBranchModel,
        populate: {
          path: 'cSubSubBranches',
          model: SubSubBranchModel,
        },
      });
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
          branch_retrieve,
          project_section_retrieve
        }
      })
    }),
	}
}
