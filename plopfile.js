module.exports = function (/** @type {import('plop').NodePlopAPI} */ plop) {
  // ****************** UI COMPONENT ****************** //

  plop.setGenerator("generate:ui:component", {
    description:
      "Generate a UI component with its associates test folder and file",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "Component name => ",
      },
    ],
    actions: [
      {
        type: "add",
        path: `modules/ui/components/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx`,
        templateFile: "plop-templates/uiComponent/component.hbs",
      },
      {
        type: "add",
        path: `modules/ui/components/{{pascalCase componentName}}/__tests__/{{pascalCase componentName}}.tsx`,
        templateFile: "plop-templates/uiComponent/test.hbs",
      },
      {
        type: "add",
        path: `modules/ui/components/{{pascalCase componentName}}/index.ts`,
        templateFile: "plop-templates/uiComponent/index.hbs",
      },
      {
        type: "append",
        path: "modules/ui/index.ts",
        pattern: /[;]/,
        template: "export * from './components/{{pascalCase componentName}}';",
      },
    ],
  });
};
