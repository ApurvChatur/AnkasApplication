const mongoose = require('mongoose');
const slugify = require('slugify');
const timezone = require('moment-timezone');
const defaultSchema = require('../../../../../../../bFunction/jDefaultSchema');

const schema = new mongoose.Schema({
  ...defaultSchema,

  cChat: { type: mongoose.Schema.Types.ObjectId, ref: 'ChatModel', required: true },

  dAttachments: [
    {
      public_id: { type: String },
      url      : { type: String },
    },
  ]

})

// Pre Save
// Slugify Title
schema.pre("save", async function() {
  this.aSlug = slugify(this.aTitle);
})

module.exports = mongoose.model("MessageModel", schema)
