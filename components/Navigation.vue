<script setup lang="ts">
import navBarItems from '~/data/navBarItems'

const ACTIVE_CLASSNAME = 'active'

const ids = Object.values(navBarItems)
  .map((item) => `#${item.id}`)
  .reduce((total, id) => `${total} , ${id}`)

function getNavBarItems(): NodeListOf<Element> {
  return document.querySelectorAll('header nav ul li a')
}

function activateFirst(): void {
  const navItems = getNavBarItems()
  navItems[0]?.classList.add(ACTIVE_CLASSNAME)
}

function onScroll(): void {
  const sections = document.querySelectorAll(ids)
  const navItems = getNavBarItems()

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting || entry.intersectionRatio) {
        navItems.forEach((item: Element | HTMLElement) => {
          if (item.getAttribute('aria-label') == entry.target.id) {
            item.classList.add(ACTIVE_CLASSNAME)
          } else {
            item.classList.remove(ACTIVE_CLASSNAME)
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
  activateFirst()
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
