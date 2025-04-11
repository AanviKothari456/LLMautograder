const { VM } = require("vm2");

exports.runTestsOnCode = async (code, tests) => {
  const vm = new VM({
    timeout: 3000,
    sandbox: {}
  });

  try {
    const script = `${code}\n${tests}`;
    const result = vm.run(script);
    return { success: true, result };
  } catch (error) {
    return { success: false, error: error.message };
  }
};