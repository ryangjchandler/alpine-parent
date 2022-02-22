import Parent from '../src/index'

document.addEventListener('alpine:initializing', () => {
    Parent(window.Alpine)
})
