
  <template>
    <v-app id="inspire" :dark="dark">
      
      <v-navigation-drawer
          fixed
          v-model="drawer"
          app
      >
        <v-switch v-model="dark"></v-switch>
        
        <v-list dense>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Contact</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="red" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Application</v-toolbar-title>
        <div class="d-flex align-center" style="margin-left: auto">
  
          <v-menu offset-y>
            <v-btn icon dark slot="activator">
              <v-icon dark language>language</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile v-for="lang in locales" :key="lang" @mouseover.native="changeLocale(lang)">
                <v-list-tile-title> {{lang}} </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
          <v-btn icon>
            <v-icon>message</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>notifications</v-icon>
          </v-btn>
        </div>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
 

</template>

<script>
export default {
  name: 'app',
	props: {
		source: String
	},
  data () {
    return {
	    dialog: false,
	    dark: false,
	    theme: 'primary',
	    mini: false,
	    drawer: true,
	    locales: ['en-US', 'zh-CN'],
	    colors: ['blue', 'green', 'purple', 'red']
    }
  }
}
</script>

<style lang="scss">


</style>
