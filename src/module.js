import angular from 'angular';
 
export const getModule = (moduleName) => {
	return angular.module(moduleName);
}

export const ngModule = (moduleConfig) => {
	return (moduleCtor) => {
		angular.module(moduleConfig.name,moduleConfig.dependencies);
	}
}