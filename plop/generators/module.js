module.exports = {
  generatorName: "generate:module",
  config: {
    description: "Generate a module with its subfolders",
    prompts: [
      {
        type: "input",
        name: "moduleName",
        message: "Module name => ",
      },
    ],
    actions: [
      {
        type: "add",
        path: `modules/{{moduleName}}/index.ts`,
        templateFile: "plop/templates/module/moduleIndex.hbs",
      },
      {
        type: "add",
        path: `modules/{{moduleName}}/components/index.ts`,
        templateFile: "plop/templates/common/defaultComponentsIndex.hbs",
      },
      {
        type: "add",
        path: `modules/{{moduleName}}/helpers/index.ts`,
        templateFile: "plop/templates/common/defaultHelpersIndex.hbs",
      },
      {
        type: "add",
        path: `modules/{{moduleName}}/services/index.ts`,
        templateFile: "plop/templates/common/defaultServicesIndex.hbs",
      },
      {
        type: "add",
        path: `modules/{{moduleName}}/hooks/index.ts`,
        templateFile: "plop/templates/common/defaultHooksIndex.hbs",
      },
      {
        type: "add",
        path: `modules/{{moduleName}}/types.ts`,
        templateFile: "plop/templates/common/defaultTypes.hbs",
      },
      {
        type: "add",
        path: `modules/{{moduleName}}/constants.ts`,
        templateFile: "plop/templates/common/defaultConstants.hbs",
      },
      {
        type: "modify",
        path: "tsconfig.json",
        pattern: /\/\*PlopSlot\*\//,
        template:
          '"@{{pascalCase moduleName}}": ["modules/{{moduleName}}"],\n/*PlopSlot*/',
      },
    ],
  },
};
