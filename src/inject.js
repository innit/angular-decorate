export const ngInject = (...injectables) => {
  return (constructor) => {
    constructor.$inject = injectables || [];
  }
}