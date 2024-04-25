const getSockets = (users = [], userSocketIDs) => {
  return users.map((user) => userSocketIDs.get(user._id.toString()))
};

module.exports = getSockets;