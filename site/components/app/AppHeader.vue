<script setup lang="ts">
const { config } = useDocus()
const { navigation } = useContent()
const { hasDocSearch } = useDocSearch()

const hasDialog = computed(() => navigation.value?.length > 1 || navigation.value?.[0]?.children?.length)

defineProps({
  ...variants
})

const page = ref<boolean>(false)
const router = useRouter()

watchEffect(() => {
  if (router.currentRoute.value.path.includes('about')) page.value = true
  else page.value = false
})

</script>

<template>
  <header :class="{ 'has-dialog': hasDialog }" v-show="!page">
    <Container :fluid="config?.header?.fluid">
      <div class="section left">
        <AppHeaderDialog v-if="hasDialog" />
        <AppHeaderLogo />
        <AppDocSearch v-if="hasDocSearch" />
        <AppSearch v-else :fuse="config.fuse" />
      </div>

      <div class="section center">
        <AppHeaderLogo v-if="hasDialog" />
        <!-- <AppHeaderNavigation /> -->
      </div>

      <div class="section right">
        <AppHeaderNavigation />

        <!-- <AppDocSearch v-if="hasDocSearch" />
        <AppSearch
          v-else
          :fuse="config.fuse"
        /> -->

        <ThemeSelect />
        <div class="social-icons">
          <div class="line bg-gray-200 dark:bg-gray-700" />
          <AppSocialIcons />
        </div>
      </div>
    </Container>
  </header>
</template>

<style scoped lang="ts">
css({
  ':deep(.icon)': {
    width: '{space.4}',
    height: '{space.4}'
  },

  '.navbar-logo': {
    '.left &': {
      '.has-dialog &': {
        display: 'none',
        '@lg': {
          display: 'block'
        }
      },
    },
    '.center &': {
      display: 'block',
      '@lg': {
        display: 'none'
      }
    }
  },

  header: {
    backdropFilter: '{elements.backdrop.filter}',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    width: '100%',
    borderBottom: '1px solid {elements.border.primary.static}',
    backgroundColor: '{elements.backdrop.background}',
    height: '{docus.header.height}',

    '.container': {
      display: 'grid',
      height: '100%',
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
      gap: '{space.2}'
    },

    '.section': {
      display: 'flex',
      alignItems: 'center',
      flex: 'none',
      '&.left': {
        gridColumn: 'span 4 / span 4',
        '@lg': {
          marginLeft: 0
        },
      },
      '&.center': {
        gridColumn: 'span 4 / span 4',
        justifyContent: 'center',
        flex: '1',
        zIndex: '1',
      },
      '&.right': {
        display: 'flex',
        gridColumn: 'span 4 / span 4',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 'none',
        marginRight: 'calc(0px - {space.4})',
        zIndex: '2',
        '.social-icons': {
          display: 'none',
          position: 'relative',
          '@md': {
            display: 'flex',
            alignItems: 'center',
          },
          '.line': {
            content: "''",
            position: 'absolute',
            width: '1px',
            // height: '65%',
            height: '25px',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
          },
        }
      }
    }
  }
})
</style>
