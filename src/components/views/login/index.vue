<template>
	<v-app style="background: #eeeeee">
		<v-container fluid fill-height app>
			<v-layout row style="display: flex; justify-content: center; align-items: center; align-content: center;" app>
				<v-flex xs12 sm3 offset-sm>
					<v-card app>
						<v-card-title app>
							<h2>Dashboard Login</h2>
						</v-card-title>
						<v-divider></v-divider>
						<v-card-text>
							<v-container>
								<form @submit.prevent="onLogin">
									<v-layout row>
										<v-flex xs12>
											<v-text-field
													name="user"
													label="Mail"
													id="user"
													v-model="user"
													type="text"
													required></v-text-field>
										</v-flex>
									</v-layout>
									<v-layout row>
										<v-flex xs12>
											<v-text-field
													name="password"
													label="Password"
													id="password"
													v-model="password"
													type="password"
													required></v-text-field>
										</v-flex>
									</v-layout>
									
									<v-layout row>
										<v-flex xs12>
											<v-checkbox
													label="Do you agree?"
													v-model="remember"
											></v-checkbox>
										</v-flex>
									</v-layout>
									
									<v-layout row>
										<v-flex xs12>
											<v-btn type="submit" :disabled="loading" :loading="loading">
												Sign in
												<span slot="loader" class="custom-loader">
	                                                <v-icon light>cached</v-icon>
	                                            </span>
											</v-btn>
										</v-flex>
									</v-layout>
								</form>
							</v-container>
						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</v-app>
</template>

<script>
	export default {
		data () {
			return {
				loading: false,
				user: 'sno',
				password: 'admin',
				remember: false
			}
		},
		methods: {
			onLogin ()
			{
				this.loading = true;
				
				this.$User.login( this.user, this.password, this.remember ).then( ( response ) => {
					this.loading = false;
					this.$router.push('/dashboard');
				});
			}
		},
		created(){
			if( this.$User.isLogged() ) this.$router.push('/dashboard');
		}

	}
</script>