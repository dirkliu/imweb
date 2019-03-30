<template>
<div class="login-page">
	<form>
		<div class="form-item"><input v-model="formData.user"></div>
	</form>
</div>
</template>

<script>
	export default {
		data () {
	 		return {
	 		 	formData: {
	 		 		user: ''
	 		 	}
	 		}
	 	}
	}
</script>
