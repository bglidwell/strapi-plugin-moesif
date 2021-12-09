module.exports = ({ env }) => ({
  moesif: {
    applicationId: env("MOESIF_APPLICATION_ID", ""),
    identifyUser: function (req, res) {
      if (req.state && req.state.user) {
        return String(req.state.user.id);
      }
      return undefined;
    },
    skip: function (req, res) {
      // don't log non JSON types
      return (
        res.headers && !res.headers["Content-Type"].includes("application")
      );
    },
    debug: false,
  },
});
