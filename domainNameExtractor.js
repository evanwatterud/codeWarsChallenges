function domainName(url){
  if (url.includes('www.')) {
    return url.split('.')[1]
  } else if (url.includes('http')) {
    return url.split('//')[1].split('.')[0]
  } else {
    return url.split('.')[0]
  }
}
