document.addEventListener('DOMContentLoaded', function () {
  const dropdownBtns = document.querySelectorAll('.toggle-dropdown')

  dropdownBtns.forEach(function (dropdownBtn) {
    dropdownBtn.addEventListener('click', function (event) {
      event.preventDefault()
      const dropdownContainer = this.nextElementSibling

      document.querySelectorAll('.dropdown').forEach(function (dropdown) {
        if (dropdown !== dropdownContainer) {
          dropdown.classList.remove('active')
        }
      })

      dropdownContainer.classList.toggle('active')
    })
  })

  window.onclick = function (event) {
    const isDropdownButton =
      event.target.matches('.toggle-dropdown') ||
      event.target.closest('.toggle-dropdown')
    if (!isDropdownButton) {
      document.querySelectorAll('.dropdown').forEach(function (dropdown) {
        dropdown.classList.remove('active')
      })
    }
  }
})
