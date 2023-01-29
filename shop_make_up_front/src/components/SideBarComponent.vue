  <template>
    <div>
      <b-sidebar
        id="sidebar-menu"
        aria-labelledby="sidebar-no-header-title"
        no-header
        shadow
        bg-variant="dark"
        text-variant="light"
        backdrop backdrop-variant="danger"
        >
        <template #default="{ hide }">
          <div class="p-3">
            <div class="d-flex align-items-center flex-column">
              <b-avatar variant="danger" text="SM" class="mb-3 mt-3" size="5rem"></b-avatar>
              <h4 id="sidebar-no-header-title">Shop Make Up</h4>
            </div>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <nav class="mb-3">
              <b-nav vertical>
                <!-- verificar porque os icones não estão funcionando -->
                <b-nav-item active @click="hide"><b-icon></b-icon>Marcas</b-nav-item>
                <b-nav-item href="#link-1" @click="hide"><b-icon></b-icon>Olhos</b-nav-item>
                <b-nav-item href="#link-2" @click="hide"><b-icon></b-icon>Lábios</b-nav-item>
                <b-nav-item href="#link-3" @click="hide"><b-icon></b-icon>Rosto</b-nav-item>
                <b-nav-item href="#link-4" @click="hide"><b-icon></b-icon>Pincéis</b-nav-item>
                <b-nav-item href="#link-5" @click="hide"><b-icon></b-icon>Ofertas</b-nav-item>
              </b-nav>
            </nav>
            <b-button variant="primary" block @click="hide">Fechar</b-button>
          </div>
        </template>
      </b-sidebar>
    </div>
  </template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SidesBarComponent',
  props: {
    msg: String
  }
})
</script>

<style scoped>

</style>
