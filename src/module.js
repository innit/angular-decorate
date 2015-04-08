import angular from 'angular';
 
export const getModule = (moduleName) => {
	return angular.module(moduleName);
}

export const ngModule = (moduleConfig) => {
	return (moduleCtor) => {
		
		let mod = angular.module(moduleConfig.name,moduleConfig.dependencies);

		if(moduleCtor.run){
			let run = moduleCtor.run;
			if(moduleConfig.inject){
				moduleConfig.inject.push(run);
				moduleCtor.run = moduleConfig.inject;
			}
			mod.run(moduleCtor.run);
		}

	}
}