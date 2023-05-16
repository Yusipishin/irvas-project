function tabs(tabsSelector, contentSelector, linkSelector, activeClass) { // active -- стиль активного таба
  const contentTabs = document.querySelectorAll(contentSelector),
        tabs = document.querySelectorAll(tabsSelector),
        tabsLinks = document.querySelectorAll(linkSelector)
  console.log(tabs)
  console.log(contentTabs)
  console.log(tabsLinks)
  tabsLinks[0].classList.add(activeClass)
  contentTabs[0].classList.add('show')
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabsLinks.forEach(link => {
        if (link.classList.contains(activeClass)) {
          link.classList.remove(activeClass)
        }
      })
      contentTabs.forEach(box => {
        if (box.classList.contains('show')) {
          box.classList.remove('show')
        }
      })
      tabsLinks[i].classList.add(activeClass);
      contentTabs[i].classList.add('show');
    })
  })
}

export default tabs;