<script setup lang="ts">
import navBarItems from '~/data/navBarItems'

function onScroll() {
  const ids = Object.values(navBarItems)
    .map((item) => `#${item.id}`)
    .reduce((total, id) => `${total} , ${id}`)

  const sections = document.querySelectorAll(ids)
  const navItems = document.querySelectorAll('header nav ul li a')

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting || entry.intersectionRatio) {
        navItems.forEach((item: Element | HTMLElement) => {
          if (item.getAttribute('aria-label') == entry.target.id) {
            item.firstElementChild?.classList.add('w-8')
          } else {
            item.firstElementChild?.classList.remove('w-8')
          }
        })
      }
    })
  }

  const observer = new IntersectionObserver(callback, {
    rootMargin: '0px',
    threshold: 1,
  })

  sections.forEach((section) => {
    observer.observe(section)
  })

  document.onvisibilitychange = () => {
    if (document.visibilityState === 'hidden') {
      observer.disconnect()
    } else {
      sections.forEach((section) => {
        observer.observe(section)
      })
    }
  }
}

onMounted(() => {
  document.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  document.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <nav>
    <ul>
      <NavBarItem :item="navBarItems.ABOUT" />
      <NavBarItem :item="navBarItems.EXPERIENCE" />
      <NavBarItem
        v-if="$config.public.enableProjects"
        :item="navBarItems.PROJECTS"
      />
      <NavBarItem
        v-if="$config.public.enableBlog"
        :item="navBarItems.BLOG"
      />
    </ul>
  </nav>
</template>

<style scoped></style>
