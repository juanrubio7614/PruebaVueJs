export default function ({ $_, $axios, redirect, store }) {
	$axios.onResponse((res)=>{
		if(typeof(res.data) !== "object" ){
			res.data = {"message":res.data};
		}
		res.data.response={"status": res.status, "statusMessage": res.statusText};
		return res;
	})
}