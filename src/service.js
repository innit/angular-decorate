import {getModule} from './module';


export const ngService = (config) => {
	let mod = getModule(config.module);
	return (serviceCtor) => {
		serviceCtor.$inject = config.inject || [];
		mod.service(config.name,serviceCtor);
	}
}