function sharePage() {
   navigator.share({
      title: 'Top Films',
      url: window.location.href
   })
}