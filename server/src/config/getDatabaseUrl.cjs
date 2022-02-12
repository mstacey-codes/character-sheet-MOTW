const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/characterSheetMOTW_development",
      test: "postgres://postgres:postgres@localhost:5432/characterSheetMOTW_test",
      e2e: "postgres://postgres:postgres@localhost:5432/characterSheetMOTW_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
