const mongoose = require('mongoose');

/**
 * @see http://mongoosejs.com/docs/guide.html
 * @see http://mongoosejs.com/docs/schematypes.html
 *
 * @see https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#statement-properties
 */
const schema = mongoose.Schema({

  // Whom the Statement is about, as an Agent or Group Object.
  'actor': {
    type: Object,
    required: true,
    default: null
  },

  // Action taken by the Actor.
  'verb': {
    type: Object,
    required: true,
    default: null
  },

  // Activity, Agent, or another Statement that is the Object of the Statement.
  'object': {
    type: Object,
    required: true,
    default: null
  },

  // Result Object, further details representing a measured outcome.
  'result': {
    type: Object,
    default: null
  },

  // Context that gives the Statement more meaning.
  // Examples: a team the Actor is working with,
  // altitude at which a scenario was attempted in a flight simulator.
  'context': {
    type: Object,
    default: null
  },

  // Agent or Group who is asserting this Statement is true.
  // Verified by the LRS based on authentication.
  // Set by LRS if not provided or if a strong trust relationship
  // between the Learning Record Provider and LRS has not been established.
  'authority': {
    type: Object,
    default: null
  },

  // Headers for Attachments to the Statement
  'attachments': {
    type: [Object],
  },

  // Timestamp of when the events described within this Statement occurred.
  // Set by the LRS if not provided.
  'timestamp': {
    type: Date,
    default: null
  },

  // Timestamp of when this Statement was recorded. Set by LRS.
  'stored': {
    type: Object,
    default: null
  }

});

module.exports = mongoose.model('Statement', schema);
