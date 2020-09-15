var images = document.getElementsByTagName('img')
for (var i = 0; i < images.length; ++i) {
  if ( /^https:\/\/static.tracsis.com\/trent\/public-.*\/images\/.*logo.*\.*/.test(images[i].src)) {
    u = new URL(images[i].src)
    f = u.pathname
    r = u.protocol + "//" + u.host + f.substr(0, f.lastIndexOf('/')) + "/tracsis_logo.svg"
    images[i].src=r;
  }
}
