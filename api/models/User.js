/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.user.attributes({
    email: 'string',
    password: 'string',
    firstname: 'string',
    lastname: 'string',
    city: 'string',
    level: 'integer',
    languages: 'array',
    fulltimeexperience: 'integer',
    internshipsdone: 'integer',
    timezone: 'integer',
    field: 'text',
    degree: 'string',
    education: 'string'
    /* e.g.
    nickname: 'string'
    */
  }),
  
  beforeCreate: require('waterlock').models.user.beforeCreate,
  beforeUpdate: require('waterlock').models.user.beforeUpdate
};
