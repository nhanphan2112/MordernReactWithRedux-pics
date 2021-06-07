import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID aLW7zmKCMGSkK_tuRJMMvs_uVyuCqQ17ZxKhK_h-pHc",
	},
});
