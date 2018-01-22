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
								<form @submit.prevent="onSignin">
									<v-layout row>
										<v-flex xs12>
											<v-text-field
													name="email"
													label="Mail"
													id="email"
													v-model="email"
													type="email"
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
													label="Remember Me!"
													v-model="checkbox"
													:rules="[v => !!v || 'You must agree to continue!']"
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
				email: '',
				password: ''
			}
		},
		computed: {
			user () {
			
			},
			error () {
			
			},
			loading () {
			
			}
		},
		watch: {
			user (value) {
			
			}
		},
		methods: {
			onSignin () {
				//this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
			},
			onDismissed () {
				//this.$store.dispatch('clearError')
			}
		}
	}
</script>