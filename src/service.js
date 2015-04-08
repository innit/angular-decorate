import {getModule} from './module';


export const ngService = (config) => {
	return (serviceCtor) => {
		serviceCtor.$inject = config.inject || [];
		getModule(config.module).service(serviceCtor);
	}
}