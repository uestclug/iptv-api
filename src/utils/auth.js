module.exports = (error, request, response, next) => {
  if (request.auth || request.auth_admin) {
    next();
  } else {
    response.status(403);
    response.send({ error: "Unauthorized" });
  }
};
